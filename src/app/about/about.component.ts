import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  date = Date();
  age: number = new Date().getFullYear() - 1992;

  constructor() { }

  ngOnInit(): void {
  }

}
