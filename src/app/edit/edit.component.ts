import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Datas } from '../datas';
import { PassvalueService } from '../passvalue.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
  change : Datas=new Datas;
  constructor(public router:Router, public http:HttpClient,public service:PassvalueService) { 
    this.change=this.service.editvalue
    console.log(this.service.editvalue);
    
  }

  ngOnInit(): void {
  }

  edit(){
    this.http.post<any>('http://localhost:4200/api/update',this.change).subscribe((x)=>{
      if(x.status=="updated"){
        console.log("Value Update successfully...")
        this.change=new Datas;
        
      }

    })
  }

}
