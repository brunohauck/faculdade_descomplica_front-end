import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ListarDataSource, ListarItem } from './listar-datasource';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<ListarItem>;
  dataSource: ListarDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor() {
    this.dataSource = new ListarDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  /*
      let data = { longtitue: 1, name: 'hien'};
    //this.router.navigate( ['authenticate'], { queryParams: { jwt: JSON.stringify(data)}});

    this.router.navigate(['/chat-profile'], 
        { queryParams: { profile: JSON.stringify(data) }});

    
    ngOnInit() {
    this.route.queryParams.subscribe(
      params => {
        console.log('Got param: ', params['profile']);
        this.profile =  params['profile'];
        let data = JSON.parse(this.profile);
        console.log(data.name);
      }
    )
  }    
  */
}
