import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Product } from '../Product'
import { DataService } from "../services/data.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  ngOnInit(): void {
  }

  public keyword = "productName";
  public data$: Observable<any[]>;
  selectedItem: any;
  showForm:boolean = false;
  
  constructor(private dataSvc: DataService) {
    this.getData();
  }

  getData(): void {
    this.data$ = this.dataSvc.getAllProcuts();
    console.log("data",this.data$);
  }




  selectEvent(item) {
    // do something with selected item
    this.selectedItem = {...item};
    console.log("Selected",this.selectedItem);
    this.showForm = true;
  }
  onChangeSearch(item){
    this.selectedItem = {...item};
    this.showForm = false;
    console.log('here' , this.selectedItem);
    
  }



}
