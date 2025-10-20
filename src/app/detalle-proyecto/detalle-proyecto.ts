import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { SafeUrlPipe } from './safe-url.pipe';

@Component({
  selector: 'app-detalle-proyecto',
  imports: [CommonModule, MatTabsModule, MatButtonModule, MatDialogModule, CommonModule],
  // templateUrl: './detalle-proyecto.html',
  styleUrl: './detalle-proyecto.scss',
  template: `
    <div class="proyecto-detalle">

      <!-- Header con imagen + título + tecnologías -->
      <div class="header" [style.background-image]="'url(' + data.portada + ')'">
        <div class="overlay">
          <h1>{{ data.titulo }}</h1>
          <p class="tecnologias">
            <span *ngFor="let tech of data.tecnologias">{{ tech }}</span>
          </p>
        </div>
      </div>

      <!-- Descripción -->
      <section class="descripcion">
        <h2>Descripción</h2>
        <p>{{ data.descripcion }}</p>
        <a *ngIf="data.github" [href]="data.github" target="_blank" class="github">🔗 Ver en GitHub</a>
      </section>

      <!-- Arquitectura -->
      <section *ngIf="data.arquitectura?.length" class="arquitectura">
        <h2>Arquitectura de la Aplicación</h2>
        <div class="imagenes">
          <img *ngFor="let img of data.arquitectura" [src]="img">
        </div>
      </section>

      <!-- Base de Datos -->
      <section *ngIf="data.baseDatos?.length" class="base-datos">
        <h2>Base de Datos</h2>
        <div class="imagenes">
          <img *ngFor="let img of data.baseDatos" [src]="img">
        </div>
      </section>

      <!-- APIs -->
      <section *ngIf="data.apis?.length" class="apis">
        <h2>APIs</h2>
        <div *ngFor="let api of data.apis" class="api">
          <a [href]="api.url" target="_blank">{{ api.url }}</a>
          <p>{{ api.descripcion }}</p>
          <div class="imagenes" *ngIf="api.imagenes?.length">
            <img *ngFor="let img of api.imagenes" [src]="img">
          </div>
        </div>
      </section>

      <!-- Documentación -->
      <section *ngIf="data.documentacion" class="documentacion">
        <h2>Documentación</h2>
        <a [href]="data.documentacion" target="_blank" class="doc-link">📄 Ver Documento</a>
      </section>

      <div class="acciones">
        <button mat-button mat-dialog-close>Cerrar</button>
      </div>
    </div>`,
  styles: [`
    .imagenes img { width: 100%; margin-bottom: 10px; border-radius: 8px; }
    .arquitectura { width: 100%; margin-top: 20px; }
  `]
})
export class DetalleProyecto {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
  

}
