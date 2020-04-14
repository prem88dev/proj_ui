import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  projects = [];
  selectedProject: String;
  constructor(private apiSerice: ApiService) { }

  ngOnInit(): void {
    this.apiSerice.get().subscribe((data: any[]) => {
      console.log(data);
      this.projects = data;
    })
  }

}
