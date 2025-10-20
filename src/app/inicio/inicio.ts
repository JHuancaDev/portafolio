import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DetalleProyecto } from '../detalle-proyecto/detalle-proyecto';
import { HttpClientModule } from '@angular/common/http';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-inicio',
  imports: [CommonModule, HttpClientModule, MatDialogModule],
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss'
})
export class Inicio {

  constructor(private dialog: MatDialog) { }

  lenguajes = [
    { name: 'SQL', icon: '/lenguajes/sql.png', class: 'sql' , nivel:'Basico-Intermedio'},
    { name: 'TypeScript', icon: '/lenguajes/Typescript.png', class: 'typescript' , nivel:'Basico-Intermedio'},
    { name: 'Java', icon: '/lenguajes/java.png', class: 'java' , nivel:'Intermedio'},
    { name: 'HTML', icon: '/lenguajes/html.png', class: 'html', nivel:'Intermedio' },
    { name: 'CSS3 / SCSS', icon: '/lenguajes/scss.png', class: 'css', nivel:'Intermedio' },
    { name: 'PHP', icon: '/lenguajes/php.png', class: 'php' , nivel:'Basico'},
  ];
  frameworks = [
    { name: 'Angular', icon: '/framework/angular.png', class: 'angular', nivel: 'Intermedio' },
    { name: 'Nest js', icon: '/framework/nest.png', class: 'nest' , nivel: 'Basico'},
    { name: 'Spring boot', icon: '/framework/spring.png', class: 'spring' , nivel: 'Basico-Intermedio'},
    { name: 'Bootstrap', icon: '/framework/bootstrap.png', class: 'bootstrap' , nivel: 'Intermedio'},
    { name: 'Laravel', icon: '/framework/laravel.png', class: 'laravel', nivel: 'Basico-intermedio' },
  ];

  proyectos = [

    {
      id: 1,
      titulo: 'Sistema de Ventas y Gestión con Angular y Laravel',
      descripcion: 'Proyecto fullstack para la administracion y compras por el cliente con autenticación, el administrador puede crear, eliminar, editar, mostrar productos, ver los pedidos que estan pendiente, marcar si se termino, esta en espera, todo con token con roles de administrador o rol por defecto de cliente, pasarela de pago simple, conectado mediante API para realizar las operaciones y conexion a la base de datos MySQL. Todo en un VPS con apache2, configuracion gratuita de seguridad SSL y redireccionamiento con DNS de Hostinger con el dominio',
      tecnologias: ['Angular', 'Typescript', 'Laravel', 'PHP', 'MySQL', 'VPS', 'Apache2'],
      portada: '/proyectos/proyecto1/imagen/cap1.png',

      arquitectura: [
        '/proyectos/proyecto1/arquitectura/ABackend.png',
        '/proyectos/proyecto1/arquitectura/AFrontend.png',
      ],

      baseDatos: [
        '/proyectos/proyecto1/database/database.png',
      ],

      apis: [
        {
          url: 'https://web.hjappscode.shop', descripcion: 'Frontend', imagenes: ['/proyectos/proyecto1/api/api3.png',
            '/proyectos/proyecto1/api/api4.png',
            '/proyectos/proyecto1/api/api5.png',
            '/proyectos/proyecto1/api/api6.png',
            '/proyectos/proyecto1/api/api7.png',
            '/proyectos/proyecto1/api/api8.png',
            '/proyectos/proyecto1/api/api9.png',
            '/proyectos/proyecto1/api/api10.png',
            '/proyectos/proyecto1/api/api11.png',
            '/proyectos/proyecto1/api/api12.png',
          ]
        },
        { url: 'https://api.hjappscode.shop', descripcion: 'Backend', imagenes: ['/proyectos/proyecto1/api/api1.png', '/proyectos/proyecto1/api/api2.png'] }
      ],

      github: 'https://github.com/JHuancaDev/jugueteriaBackend',
      //documentacion: 'https://tu-servidor.com/docs.pdf'
    }, {
      id: 2,
      titulo: 'Sistema de inventario para escritorio',
      descripcion: 'Aplicacion para almacenar productos de una libreria, mantener informado sobre la cantidad de productos que faltan o estan por acabar, con reportes sobre los productos que se aumentaron la cantidad o los productos que se agregaron',
      tecnologias: ['Spring Boot', 'JPA', 'Java', 'JavaFx', 'MySQL'],
      portada: '/proyectos/proyecto3/imagen/cap1.png',

      arquitectura: [
        '/proyectos/proyecto3/arquitectura/arquitectura.png',
      ],

      baseDatos: [
        '/proyectos/proyecto3/imagen/cap1.png',
        '/proyectos/proyecto3/imagen/cap2.png',

      ],

      apis: [

      ],

    }, {
      id: 3,
      titulo: 'Aplicacion con CRUD de productos web',
      descripcion: 'Aplicacion para crear, mostrar, eliminar, modificar, los productos a una base de datos con backend y frontend, mediante conexion de API',
      tecnologias: ['Angular', 'Typescrits', 'Spring Boot', 'Java', 'JPA', 'MySQL', 'Bootstrap'],
      portada: '/proyectos/proyecto4/imagen/cap1.png',

      arquitectura: [
        '/proyectos/proyecto4/arquitectura/ABackend.png',
        '/proyectos/proyecto4/arquitectura/AFrontend.png',
      ],

      baseDatos: [
        '/proyectos/proyecto4/database/database.png',
        '/proyectos/proyecto4/imagen/cap1.png',
        '/proyectos/proyecto4/imagen/cap2.png',
        '/proyectos/proyecto4/imagen/cap3.png',
        '/proyectos/proyecto4/imagen/cap4.png',
        '/proyectos/proyecto4/imagen/cap5.png',
      ],

      apis: [
      ],

    },
    {
      id: 4,
      titulo: 'Sistema de escritorio para recoleccion de plastico',
      descripcion: 'Sistema que recolecta datos mediante app movil de los trabajadores que registran la cantidad de plastico ingresada , luego para la separacion, agrupacion por categorias, y al final generar un informe de lo que se registro al dia, don los datos ingresados de lugares a donde se llego a recoger, tambien CRUD para empleados el cual sera separado por categoria, CRUD para asignar carros a solo la categoria de camioneros.',
      tecnologias: ['Spring Boot', 'Java', 'JPA', 'Kotlin', 'MySQL'],
      portada: '/proyectos/proyecto5/imagen/cap4.png',

      arquitectura: [
        '/proyectos/proyecto5/arquitectura/arquitectura.png',
      ],

      baseDatos: [
        '/proyectos/proyecto5/database/database.png',
      ],

      apis: [
        {
          url: 'Proyecto', descripcion: 'App escritorio', imagenes: [
            '/proyectos/proyecto5/imagen/cap1.png',
            '/proyectos/proyecto5/imagen/cap2.png',
            '/proyectos/proyecto5/imagen/cap3.png',
            '/proyectos/proyecto5/imagen/cap4.png',
            '/proyectos/proyecto5/imagen/cap5.png',
          ]
        }
      ],

      // github: 'https://github.com/JHuancaDev/jugueteriaBackend',
      //documentacion: 'https://tu-servidor.com/docs.pdf'
    }
  ];


  abrirProyecto(proyecto: any) {
    this.dialog.open(DetalleProyecto, {
      width: '90%',
      data: proyecto
    });
  }
}
