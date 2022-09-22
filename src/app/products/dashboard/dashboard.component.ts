import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { service } from '../../services/service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  productsArray: any[];

  constructor(private service: service, private router:Router) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  logout(){
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    this.router.navigate(['/login'])
  }

  fetchProducts() {
    this.service.getProducts().subscribe((response) => {
      console.log(response['products']);
      this.productsArray = response['products'];
    });
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
}
