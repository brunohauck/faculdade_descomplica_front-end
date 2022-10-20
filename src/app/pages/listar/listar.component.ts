import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { ListarDataSource } from './listar-datasource';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<User>;
  dataSource: ListarDataSource;

  users: User[] = [];
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'firstName', 'email', 'phone', 'cpf'];

  constructor(public service: UserService) {
    console.log('entrou 01')
    this.dataSource = new ListarDataSource();
    console.log('entrou 02')
    this.service.getUsers().subscribe(
      {
        next: (response) => {
          
          this.dataSource.data = response;
          this.users = response;
          console.log(this.dataSource.data);
          console.log('entrou 05 service')
          this.dataSource.connect()
        },
        error: (erro: any) => {
          console.log('entrou no erro')
          alert("Usuário ou Senha inválido(s)!");
          console.log(erro)
        }
      }
    )
    console.log('entrou 03')
  

  }

  ngOnit(){
    this.table.dataSource = this.users;

  }
  

  ngAfterViewInit(): void {
    console.log(this.dataSource.sort)
    console.log(this.sort)
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    console.log(this.dataSource);
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
