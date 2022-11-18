import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { ListarDataSource } from './listar-datasource';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable, { static: false }) table!: MatTable<User>;
  dataSource = new MatTableDataSource <User> ([]);

  ngOnInit() {
    this.getUsers()
  }

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'firstName', 'email', 'phone', 'cpf'];

  constructor(public service: UserService) {
    //this.dataSource = new ListarDataSource(this.service);
    //console.log('contrutor')
    //console.log(this.dataSource)
   

    //fdsfds
  }

  getUsers(): void {
    this.service.getUsers().subscribe(
      {
        next: (response) => {
          this.dataSource = new MatTableDataSource <User> (response);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
          

        },
        error: (erro: any) => {
          console.log('entrou no erro')
          alert("Ocorreu um erro ao listar os usuários! Tente mais tarde.");
          console.log(erro)
        }
      }
    )
  }

 

  ngAfterViewInit() {
    this.table.dataSource = this.dataSource;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  /*
      this.router.navigate( ['authenticate'], { queryParams: { jwt: JSON.stringify(data)}});
    let data = { longtitue: 1, name: 'hien'};
    user: User = new User('Bruno', 'brunohauck@gmail.com')


    this.router.navigate(['/user-detail'], 
        { queryParams: { user: JSON.stringify(data) }});

    
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
