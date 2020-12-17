import { Component, OnInit } from '@angular/core';
import {SHEET_CONFIG} from './../../static/config';
import { SheetState } from './../../store/sheet.state';
import { TreeState } from './../../store/tree.state';
import {Select, Store} from '@ngxs/store';
import { Observable, combineLatest } from 'rxjs';
import { fetchSheetData } from './../../actions/sheet.actions';
import { TreeService } from '../../components/tree/tree.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UIState } from '../../store/ui.state';
import { HasError, CloseSnackbar } from '../../actions/ui.actions';
import { Error } from '../../models/response.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LoadingComponent } from '../../components/loading/loading.component';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';



@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {
  data: any;
  loading: boolean;
  view: any;
  sheet: any;
  hasError: boolean;
  error: Error;
  snackbarRef: MatSnackBarRef<PizzaPartyComponent>
  
  // Sheet Observables
  // @Select(SheetState.getLoading) loading$: Observable<boolean>;
  @Select(SheetState.getData) data$: Observable<any>;

  // Tree Observables
  @Select(TreeState.getTreeData) treeData$: Observable<any>;

  // Control Pane Observables
  @Select(UIState.getControlPaneState) pane$: Observable<boolean>;

  // UI Observables
  @Select(UIState.getError) error$: Observable<any>;
  @Select(UIState.getLoading) loading$: Observable<any>;
  @Select(UIState.getLoadingText) loadingText$: Observable<any>;
  @Select(UIState) uiState$: Observable<any>;


  constructor(public store: Store, public ts:TreeService, public route: ActivatedRoute, public dialog: MatDialog, private snackbar: MatSnackBar) {

    this.data$.subscribe(data => {
      if (data.length) {
        this.data = data;
        ts.makeTreeData(this.sheet, data, [])
      }
    })

    this.error$.subscribe(err => {
      this.error = err.error;
    })

    this.route.queryParamMap.subscribe(query => {
      this.sheet =  SHEET_CONFIG.find(i => i.name === query.get('sheet'));
      store.dispatch(new fetchSheetData(this.sheet)).subscribe(
        () => {},
        (error) => {
          const err: Error = {
            msg: error.statusText,
            status: error.status,
            hasError: true
          }
          store.dispatch(new HasError(err))
        }
      )
    })

    this.loading$.subscribe(l => {
      if(l && !this.dialog.getDialogById('LoadingDialog')) this.openLoading()
      else if (!l) this.closeLoading();
    })

    this.uiState$.subscribe(state => {
      if (state.snackbar.opened)  {
        this.snackbarRef = this.snackbar.openFromComponent(PizzaPartyComponent, {duration: 1500});
        this.snackbarRef.afterDismissed().subscribe(s => { store.dispatch(new CloseSnackbar())})
      }
    })

  }

  ngOnInit(): void {
  }

  openLoading(text?: string) {
    const config = new MatDialogConfig();
    config.disableClose = true;
    config.autoFocus = true;
    config.id = 'LoadingDialog'
    config.data = text;
    config.width = '300px';

    const loadingDialog = this.dialog.open(LoadingComponent, config)
  }

  closeLoading() {
    const loadingDialog = this.dialog.getDialogById('LoadingDialog')
    loadingDialog.close();
  }

}


@Component({
  selector: 'snack-bar-component-example-snack',
  template: '<div>HELLO</div>',
  styles: [`
    .example-pizza-party {
      color: hotpink;
    }
  `],
})
export class PizzaPartyComponent {}
