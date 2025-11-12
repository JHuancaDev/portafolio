import { Component, signal } from '@angular/core';
import { Navbar } from "./navbar/navbar";
import { Inicio } from "./inicio/inicio";


@Component({
  selector: 'app-root',
  imports: [ Navbar, Inicio],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portafolio');
}
