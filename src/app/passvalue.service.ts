import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PassvalueService {

  editvalue:any;

  constructor(public http:HttpClient) { }
}
