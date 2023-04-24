import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit  {
  data: any;
  constructor( private http:HttpClient ) {}
  ngOnInit(): void {

    this.getuser()

    throw new Error('Method not implemented.');
  }
  getuser(){
    this.http.get<any>("http://localhost:8000/user/").subscribe(res=>{
      if(res.statusCode==200){
        this.data=res.data
      }
    })
  }
}
