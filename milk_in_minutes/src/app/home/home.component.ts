import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
//import { HttpClient } from '@angular/common/http';
//import { query } from '@angular/animations';
// import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  // standalone: true,
  // imports:[MatCardModule]
})

export class HomeComponent implements OnInit {
  products: any[] = []
  constructor(private appService: AppService) {

  }
  
  ngOnInit(): void {
    this.appService.getProducts("").subscribe(data => {
      console.log(data)
      this.products = data
    })
  }
}
