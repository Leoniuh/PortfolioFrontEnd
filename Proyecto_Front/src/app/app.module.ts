import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcerdaDeComponent } from './components/acerda-de/acerda-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { HysComponent } from "./components/hys/hys.component";
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from "./components/login/LoginComponent";
import { ErrorComponent } from './components/error/error.component';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { EditHysComponent } from './components/hys/edit-hys.component';
import { NewHysComponent } from './components/hys/new-hys.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        LogoAPComponent,
        BannerComponent,
        AcerdaDeComponent,
        ExperienciaComponent,
        EducacionComponent,
        HysComponent,
        ProyectoComponent,
        FooterComponent,
        HomeComponent,
        LoginComponent,
        ErrorComponent,
        NewExperienciaComponent,
        EditExperienciaComponent,
        NewEducacionComponent,
        EditEducacionComponent,
        EditHysComponent,
        NewHysComponent
    ],
    bootstrap: [AppComponent],
    providers: [
        interceptorProvider
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgCircleProgressModule.forRoot({}),
        HttpClientModule,
        FormsModule
 ]
})
export class AppModule { }
