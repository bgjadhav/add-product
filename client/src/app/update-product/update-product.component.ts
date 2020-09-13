import { Component, OnInit , Input, OnChanges, Output , EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../Product'
import { DataService } from "../services/data.service";
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})

export class UpdateProductComponent implements  OnChanges {
  @Input() item;
  @Output() newItemEvent = new EventEmitter();

  model:Product;
  submitted = false;
  isReadOnly:boolean = false;
  isMsg:boolean = false;
  sellingPriceValid:boolean = true;
  sucMsg: string = "Product Added Successfully";
  constructor(private dataSvc: DataService , private router: Router) { 
    this.model = new Product(null,null,null ,null,null);
  }

  
  ngOnChanges(){
    this.isReadOnly = true;
    this.isMsg = false;
    console.log(this.item);
    this.model = new Product(
      this.item._id,
      this.item.productName,
      this.item.sellingPrice,
      this.item.costPrice,
      this.item.quantity,
      
    );
    this.sucMsg="Product Updated Succesfully";
    console.log(this.model);
  }

onSubmit(productFrom:NgForm) { 
  if(productFrom.value.sellingPrice < this.model.costPrice){
    this.submitted = false;
    this.sellingPriceValid = false;
    return;
  }
  
  this.isMsg = true;
  this.sellingPriceValid = true;
  this.submitted = true;
  if(this.isReadOnly) {
    this.dataSvc.updateProducts(this.model).subscribe(res => {
      this.newItemEvent.emit();
      this.router.navigate(['/']);
     });
  }else {
    this.dataSvc.addProducts(this.model).subscribe(res => {
      this.newItemEvent.emit();
     });
  }
  
 }

newProduct() {
this.model = new Product(null,null,null ,null,null);
this.isMsg = false;
}


}
