import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/modelos/login-usuario';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogged = false;
  isLogginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
  errorMsj!: string;
  constructor(private router:Router, private tokenService: TokenService, private authService: AuthService) { }


  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
    
    const recuadro = document.querySelector('.recuadro');
    const ingresoLink = document.querySelector('.link-ingreso');
    const recuperacionLink = document.querySelector('.link-recuperacion');
    const registroLink = document.querySelector('.link-registro');
    const iconCerrar = document.querySelector('.icon-cerrar');

    registroLink?.addEventListener('click', () => {
      recuadro?.classList.add('active');
    });

    ingresoLink?.addEventListener('click', () => {
      recuadro?.classList.remove('active');
    });
   
    recuperacionLink?.addEventListener('click', () => {  
      recuadro?.classList.add('active2');
      recuadro?.classList.remove('active');
    });

    iconCerrar?.addEventListener('click', () => {
      this.router.navigate(['/home']);
    });
  }
  
  OnLogin(): void{
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password); 
    this.authService.login(this.loginUsuario).subscribe(data =>{
        this.isLogged = true;
        this.isLogginFail = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUsername(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate([''])
      }, error =>{
        this.isLogged = false;
        this.isLogginFail = true;
        this.errorMsj = error.error.mensaje;
        console.log(this.errorMsj);
      })
  }
}
