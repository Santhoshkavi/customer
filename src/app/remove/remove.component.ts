import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Datas } from '../datas';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.css']
})
export class RemoveComponent implements OnInit {
re : Datas=new Datas;

  constructor(public router:Router, public http:HttpClient) { }

  ngOnInit(): void {
  }

  delete(){
    this.http.post<any>('http://localhost:4200/api/del',this.re).subscribe((x)=>{
      if(x.status=="delete"){
        console.log("Detais Deleted successfully...")
        this.re=new Datas;
      }

    })
  }

}
