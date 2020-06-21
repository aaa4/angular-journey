import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {AccountWorkerService} from '../account-worker.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {merge} from 'rxjs';
import {startWith, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-pagination-table',
  templateUrl: './pagination-table.component.html',
  styleUrls: ['./pagination-table.component.css']
})
export class PaginationTableComponent implements AfterViewInit {

  constructor(private service: AccountWorkerService) {
  }

  displayedColumns: string[] = ['id', 'name', 'email'];
  data: Account[] = [];
  isLoadingResults = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit(): void {

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = false;
          return this.service.getData();
        })
      )
      .subscribe(x => this.data = x);


  }

}
