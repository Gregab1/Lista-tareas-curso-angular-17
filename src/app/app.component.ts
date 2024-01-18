import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TareasService } from './service/tareas.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  listaTareas:string[]=[];
  nuevaTarea:string='';
  private _tareasServicios=inject(TareasService)
  ngOnInit(): void {
      this.listaTareas=this._tareasServicios.getTareas();
  }
  agregarTarea(){
this._tareasServicios.agragrTarea(this.nuevaTarea);
this.nuevaTarea=''
this.listaTareas=this._tareasServicios.getTareas()
  }
  eliminarTareas(index:number){
    this._tareasServicios.eliminarTraea(index)
    this.listaTareas=this._tareasServicios.getTareas()
  }
}
