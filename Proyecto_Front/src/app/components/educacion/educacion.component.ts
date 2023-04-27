import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/modelos/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  edu: Educacion[] = [];

  constructor(private educacionS: EducacionService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarEducacion();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarEducacion(): void {
    this.educacionS.lista().subscribe(data => {this.edu = data;})
  }

  deleteEdu(id?: number){
    if(id != undefined){
      this.educacionS.delete(id).subscribe(
        data =>{
          this.cargarEducacion();
        }, error =>{
          alert("Hubo un error al intentar borrar la educación seleccionada");
        }
      )
    }
  }
}
