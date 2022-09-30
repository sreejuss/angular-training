import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { service } from '../../services/service.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  productsArray: any[];
  searchTerm:string;

  constructor(private service: service, private router:Router) {}
  searchForm: FormGroup;

  ngOnInit(): void {
    this.fetchProducts();
    this.searchForm = new FormGroup({
      name: new FormControl(''),
    });
  }

  logout(){
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    this.router.navigate(['/login'])
  }

  fetchProducts(searchTerm?:string) {
    if(searchTerm){
      this.service.searchProduct(searchTerm).subscribe((response)=>{
        this.productsArray=response['products']
      })
    }
    else{
    this.service.getProducts().subscribe((response) => {
      console.log(response['products']);
      this.productsArray = response['products'];
    });
  }
  }

  deleteProduct(productId: number) {
    this.service.deleteProduct(productId).subscribe((response) => {
      if (response['isDeleted']) {
        alert('Product deleted');
      }
    });
  }

  addProduct() {
    let product = {
      id: 1,
      title: 'iPhone 14',
    };
    this.service.addProduct(product).subscribe((response) => {
      alert('New Product has been added!.');
      console.log(response);
    });
  }

  searchHandler(event) {
    this.searchTerm=event.target.value;
    this.fetchProducts(this.searchTerm)
 ;
  }
}
