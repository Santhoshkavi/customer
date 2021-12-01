import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Datas } from '../datas';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  ad:Datas =new Datas;
  constructor(public router:Router, public http:HttpClient) { }

  ngOnInit(): void {
  }

  add(){
    this.http.post<any>('http://localhost:4200/api/in',this.ad).subscribe((x)=>{
      if(x.status=="insert"){
        console.log("Value added successfully...")
        this.ad=new Datas;
        // this.router.navigate(['/home']);
      }

    })
  }

}
