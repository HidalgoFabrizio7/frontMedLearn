import { Component, OnInit } from '@angular/core';
import { MatTableDataSource,MatTableModule } from '@angular/material/table';
import { Users } from '../../../../models/Users';
import { UsersService } from '../../../../services/users.service';


@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent implements OnInit{
  datasource: MatTableDataSource<Users> = new MatTableDataSource();
  displayedColumns:string[]=['c1','c2','c3','c4','c5','c6','c7']
  constructor(private cU: UsersService){}
  ngOnInit(): void {
    this.cU.list().subscribe(data=>{
      this.datasource=new MatTableDataSource(data)
    })
  }
}
