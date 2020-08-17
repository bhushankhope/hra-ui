import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  OnChanges,
} from '@angular/core';
import { ReportService } from '../report/report.service';
import { SheetService } from '../services/sheet.service';
import * as XLSX from 'xlsx';
import * as moment from 'moment';

export class AS {
  structure: string;
  uberon: string;
}

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
})
export class ReportComponent implements OnInit, OnChanges {
  sheetData;
  anatomicalStructures = [];
  cellTypes = [];
  bioMarkers = [];
  similarAS = [];
  similarCT = [];
  similarB = [];
  warningCount = 0;
  compareDataStats = [];
  @Output() closeComponent = new EventEmitter();
  @Output() openCompareDialog = new EventEmitter();
  @Input() refreshData;
  @Input() dataVersion;
  @Input() public compareData = [];
  @Input() public shouldReloadData;
  @Input() currentSheet: any;

  sheetName = 'Spleen_R2';

  constructor(public report: ReportService, public sheet: SheetService) {
  }

  async ngOnChanges() {
     
  }

  async makeCompareData() {
    for(let sheet of this.compareData) {
      let newEntry: any = {};

      const compareAS = await this.sheet.makeAS(sheet.data, {
        report_cols: this.currentSheet.report_cols,
        cell_col: this.currentSheet.cell_col,
        marker_col: this.currentSheet.marker_col,
        uberon_col: this.currentSheet.uberon_col,
      });

      const compareCT = await this.sheet.makeCellTypes(sheet.data, {
        report_cols: this.currentSheet.report_cols,
        cell_col: this.currentSheet.cell_col,
        marker_col: this.currentSheet.marker_col,
        uberon_col: this.currentSheet.uberon_col,
      });

      const compareB = await this.sheet.makeBioMarkers(sheet.data, {
        report_cols: this.currentSheet.report_cols,
        cell_col: this.currentSheet.cell_col,
        marker_col: this.currentSheet.marker_col,
        uberon_col: this.currentSheet.uberon_col,
      });

      let identicalStructures = []; 
      let newStructures = [];

      if (compareAS.length > 0 ) {
        for (let a of compareAS) {
          let findObj = this.anatomicalStructures.findIndex(i => i.structure === a.structure)
          if (findObj !== -1) identicalStructures.push(a.structure)
          else newStructures.push(a.structure)
        }
      }

      newEntry.identicalAS = identicalStructures;
      newEntry.newAS = newStructures;

      identicalStructures = []; 
      newStructures = [];

      if (compareCT.length > 0 ) {
        for (let a of compareCT) {
          let findObj = this.cellTypes.findIndex(i => i.structure === a.structure)
          if (findObj !== -1) identicalStructures.push(a.structure)
          else newStructures.push(a.structure)
        }
      }

      newEntry.identicalCT = identicalStructures;
      newEntry.newCT = newStructures;

      identicalStructures = []; 
      newStructures = [];

      if (compareB.length > 0 ) {
        for (let a of compareB) {
          let findObj = this.bioMarkers.findIndex(i => i.structure === a.structure)
          if (findObj !== -1) identicalStructures.push(a.structure)
          else newStructures.push(a.structure)
        }
      }

      newEntry.identicalB = identicalStructures;
      newEntry.newB = newStructures;
      newEntry.color = sheet.color;

      this.compareDataStats.push(newEntry);
    }
  }

  ngOnInit(): void {
    this.getData(this.currentSheet);
  }

  public async getData(currentSheet) {

    this.sheetData = await this.sheet.getSheetData(this.currentSheet, this.dataVersion);
    try {
      this.anatomicalStructures = await this.sheet.makeAS(this.sheetData.data, {
        report_cols: currentSheet.report_cols,
        cell_col: currentSheet.cell_col,
        marker_col: currentSheet.marker_col,
        uberon_col: currentSheet.uberon_col,
      });
      this.cellTypes = await this.sheet.makeCellTypes(this.sheetData.data, {
        report_cols: currentSheet.report_cols,
        cell_col: currentSheet.cell_col,
        uberon_col: currentSheet.uberon_col,
        marker_col: currentSheet.marker_col
      });
      this.bioMarkers = await this.sheet.makeBioMarkers(this.sheetData.data, {
        marker_col: currentSheet.marker_col,
      });

      if (this.compareData.length) {
        this.makeCompareData()
      }  
    } catch (err) {
      console.log(err);
    }
  }

  downloadData() {
    const download = [];
    const totalRows = 6;
    for (let i = 0; i < Math.max(this.anatomicalStructures.length,this.cellTypes.length,this.bioMarkers.length); i++) {
      const row = {};
      if (i < this.anatomicalStructures.length) {
        row['Unique Anatomical Structres'] = this.anatomicalStructures[i].structure;
        if (!this.anatomicalStructures[i].uberon.includes('UBERON')) {
          row['AS with no Uberon Link'] = this.anatomicalStructures[
            i
          ].structure;
        }
      }
      if (i < this.cellTypes.length) {
        row['Unique Cell Types'] = this.cellTypes[i].structure;
        if (!this.cellTypes[i].link.includes('CL')) {
          row['CL with no Link'] = this.cellTypes[i].structure;
        }
      }
      if (i < this.bioMarkers.length) {
        row['Unique Biomarkers'] = this.bioMarkers[i].structure;
        row['Biomarkers with no links'] = this.bioMarkers[i].structure;
      }

      if (i < this.similarAS.length) {
        row['Similar AS from Derived Data'] = this.similarAS[i].name;
      }

      if (i < this.similarCT.length) {
        row['Similar CT from Derived Data'] = this.similarCT[i].name;
      }

      if (i < this.similarB.length) {
        row['Similar B from Derived Data'] = this.similarB[i].name;
      }
      download.push(row);
    }

    const sheetWS = XLSX.utils.json_to_sheet(download);
    sheetWS['!cols'] = [];
    for (let i = 0; i < totalRows; i++) {
      sheetWS['!cols'].push({ wch: 30 });
    }
    const wb = XLSX.utils.book_new();
    const dt = moment(new Date()).format('YYYY.MM.DD_hh.mm');
    const sn = this.currentSheet.display.toLowerCase().replace(' ', '_');
    XLSX.utils.book_append_sheet(wb, sheetWS, this.currentSheet.display);
    XLSX.writeFile(wb, `ASCT+B-Reporter_${sn}_${dt}_Report.xlsx`);
  }

  getASWithNoLink() {
    const noLinks = [];
    this.anatomicalStructures.forEach((ele) => {
      if (!ele.uberon.includes('UBERON')) {
        noLinks.push(ele);
      }
    });
    return noLinks;
  }

  getCTWithNoLink() {
    const noLinks = [];
    this.cellTypes.forEach((ele) => {
      if (!ele.link.includes('CL')) {
        noLinks.push(ele);
      }
    });
    return noLinks;
  }
  getBMWithNoLink() {
    const noLinks = [];

    return noLinks;
  }

  async getSimilarASFromDD() {
    this.similarAS = [];
    // for (let sheet of this.compareData) {
    //   this.similarAS = await this.sheet.makeAS(sheet.data, {report_cols: this.currentSheet.report_cols,
    //     cell_col: this.currentSheet.cell_col,
    //     marker_col: this.currentSheet.marker_col,
    //     uberon_col: this.currentSheet.uberon_col})
    // }
    // this.anatomicalStructures.forEach((a) => {
    //   const idx = this.compareData.findIndex((i) => i.name.toLowerCase() === a.structure.toLowerCase());
    //   if (idx !== -1) {
    //     this.similarAS.push(this.compareData[idx]);
    //   }
    // });
    
    return this.similarAS;
  }

  getSimilarCTFromDD() {
    this.similarCT = [];
    // this.cellTypes.forEach((a) => {
    //   const idx = this.compareData.findIndex((i) => i.name.toLowerCase() === a.structure.toLowerCase());
    //   if (idx !== -1) {
    //     this.similarCT.push(this.compareData[idx])
    //   }
    // });
    return this.similarCT;
  }t

  getSimilarBFromDD() {
    this.similarB = [];
    // this.bioMarkers.forEach((a) => {
    //   const idx = this.compareData.findIndex((i) => i.name.toLowerCase() === a.structure.toLowerCase().replace('*',''))
    //   if (idx !== -1) {
    //     this.similarB.push(this.compareData[idx])
    //   }
    // });
    return this.similarB;
  }

  closeDrawer() {
    this.closeComponent.emit(false);
  }

  openDialogtoCompare() {
    this.openCompareDialog.emit(true);
  }

  mail() {
    const subject = `Problem with ${this.currentSheet.name}.xlsx`;
    const mailText = `mailto:infoccf@indiana.edu?subject=${subject}`;
    window.location.href = mailText;
  }
}
