import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main/main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  approved : any[] = [];
  socials : any[] = [];
  constructor( private ms: MainService ) { }

  ngOnInit(): void {
    this.socials = this.ms.social();
    this.approved = this.ms.approved();
  }

}
