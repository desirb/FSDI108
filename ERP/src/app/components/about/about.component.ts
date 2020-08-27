import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit(): void {
    console.log("Data service holds: ", this.data.getUsers());
  }

}


//angular 2+ dependency injection and lify cycle
