import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/modelos/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  nombreEd: string = '';
  descripcionEd: string = '';

  constructor(private educacionS: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreateEdu(): void{
    const edu = new Educacion(this.nombreEd, this.descripcionEd);
    this.educacionS.save(edu).subscribe(data =>{
      alert("Educación añadida");
      this.router.navigate(['']);
    }, error =>{
      alert("Falló");
      this.router.navigate(['']);
    })
  }
}
