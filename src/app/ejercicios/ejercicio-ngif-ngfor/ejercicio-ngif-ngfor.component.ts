import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models';

@Component({
  selector: 'app-ejercicio-ngif-ngfor',
  templateUrl: './ejercicio-ngif-ngfor.component.html',
  styleUrls: ['./ejercicio-ngif-ngfor.component.css']
})
export class EjercicioNgifNgforComponent implements OnInit {
  public loading = true;
  public usuarios: Usuario[] = [
    new Usuario(1, 'Juan', 'Perez', 'juanchoperez@gmail.com', 21, true, new Date('2002-03-06')),
    new Usuario(2, 'Candelaria', 'Miguez', 'candemiguez@gmail.com', 24, false, new Date('1999-02-26')),
    new Usuario(3, 'Santiago', 'Gonzalez', 'santigonzalez@gmail.com', 19, false, new Date('2003-09-09')),
    new Usuario(4, 'Catalina', 'Gomez', 'catugomez@gmail.com', 19, true, new Date('2003-06-14')),
    new Usuario(5, 'Alan', 'Olivero', 'oliveroalan@gmail.com', 22, true, new Date('2001-07-06')),
  ];
  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
}
