import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  params;
  constructor(activatedRoute: ActivatedRoute ) {
    this.params = activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
  }

}
