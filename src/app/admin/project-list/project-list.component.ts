import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api-service';
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  constructor(private daService:DataApiService) { }
  public jugadores=[];
  public jugador='';
  ngOnInit() {
  	this.daService.getAllProyects().subscribe(jugadores => {
  		console.log("proy",jugadores);
  		this.jugadores=jugadores;
  	});

  }

}
