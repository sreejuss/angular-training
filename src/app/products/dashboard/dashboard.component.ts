import { Component, OnInit } from '@angular/core';
import { service } from '../../services/service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
productsArray: any[];

  constructor(private service:service) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(){
    this.service.getProducts().subscribe((response)=>{
      console.log(response['products']);
      this.productsArray=response['products'];
    })
  }

  deleteProduct(productId:number){
    this.service.deleteProduct(productId).subscribe((response)=>{
      if(response['isDeleted']){
        alert("Product deleted")
      }
    })
  }

  addProduct(product:any[]){
    this.service.addProduct(product).subscribe((response)=>{
      console.log(response);
    })
  }

}