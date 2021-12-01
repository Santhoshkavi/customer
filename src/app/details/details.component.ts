import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Datas } from '../datas';
import {PassvalueService } from '../passvalue.service'
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id:any;
  
val:any=[];
value:any=[];
change:Datas=new Datas;
  constructor(public router:Router, public http:HttpClient, public service:PassvalueService ) { }

  ngOnInit(): void {
  }

  ok(){
    this.http.post<any>('http://localhost:4200/api/read',this.val).subscribe((x)=>{
      this.val=x.details;
     
      console.log(this.val) 
        
      })

    }
    
  
    search(){
      this.http.post<any>('http://localhost:4200/api/select',this.change).subscribe((x)=>{
        this.value=x.detail;
       console.log(this.change);
       
        console.log(this.value) 
    })

    }
    edit(id:any){
      
      this.service.editvalue = this.val.find((x:any) => x.customerID == id);
      

    this.router.navigate(['\edit']);

    //  this.service.editvalue = edvl
    

    }
   
  delete(id:any){
    this.http.post<any>('http://localhost:4200/api/del',{id}).subscribe((x)=>{
      if(x.status=="delete"){
        console.log("Detais Deleted successfully...")
       
      }

    })
  }
  }



