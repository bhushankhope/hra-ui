import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  window = window;
  options = [
    'Tree',
    'Indented List',
    // 'Table' temporarily hide table
  ];
  selectedOption = this.options[0];

  sheetOptions = ['All Organs', 'Heart', 'Kidney', 'Large Intestine', 'Liver', 'Lymph Nodes', 'Skin', 'Small Intestine', 'Spleen'];

  moreOptions = [
    {
      name: 'Data Tables',
      url: 'https://docs.google.com/spreadsheets/d/1j_SLhFipRWUcRZrCDfNH15OWoiLf7cJks7NVppe3htI/edit#gid=1268820100'
    },
    {
      name: 'Github',
      url: 'https://github.com/hubmapconsortium/ccf-asct-reporter'
    }
  ];

  imageOptions = [
    'PNG',
    'SVG',
    'Vega Spec'
  ];

  selectedSheetOption = this.sheetOptions[0];

  @Output() showReport = new EventEmitter<any>();
  @Output() showLog = new EventEmitter<any>();
  @Output() showGraph = new EventEmitter<any>();
  @Output() refresh = new EventEmitter<any>();
  @Output() getSheet = new EventEmitter<any>();
  @Output() downloadVis = new EventEmitter<any>();

  constructor() {


  }

  ngOnInit(): void {
    this.getSheetSelection();
    this.getSelection();
  }

  getSelection() {
    this.showGraph.emit(this.selectedOption);
  }

  getSheetSelection() {
    this.getSheet.emit(this.selectedSheetOption);
  }

  showLogs() {
    this.showLog.emit(true);
  }

  showReports() {
    this.showReport.emit(true);
  }

  refreshData() {
    this.refresh.emit(this.selectedOption);
  }

  downloadVisFunction(img) {
    this.downloadVis.emit(img);
  }

  openGithub() {
    window.open('https://github.com/hubmapconsortium/ccf-asct-reporter', '_blank');
  }

}
