import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { IllnessComponent } from './components/illness/illness.component';
import { InsertarComponent } from './components/illness/insertar/insertar.component';
import { DietComponent } from './components/diet/diet.component';
import { InsertardtComponent } from './components/diet/insertardt/insertardt.component';
import { UsersComponent } from './components/users/users.component';
import { InsertarusComponent } from './components/users/insertarus/insertarus.component';
import { HospitalComponent } from './components/hospital/hospital.component';
import { CrearhpComponent } from './components/hospital/crearhp/crearhp.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { NumberdietinityfinComponent } from './components/reportes/numberdietinityfin/numberdietinityfin.component';
import { ProporcionUsersComponent } from './components/reportes/proporcion-users/proporcion-users.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { seguridadGuard } from '../guard/seguridad.guard';
import { ExercisesComponent } from './components/exercises/exercises.component';
import { InsertarexComponent } from './components/exercises/insertarex/insertarex.component';
import { FoodComponent } from './components/food/food.component';
import { InsertarfdComponent } from './components/food/insertarfd/insertarfd.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'nuevacuenta', component: InsertarusComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'Enfermedades', component: IllnessComponent,
        children:[
            {path: 'nuevoenf', component: InsertarComponent,

            },
            {
                path: 'edicionesenf/:id', component:InsertarComponent,
            },
        ],
        canActivate: [seguridadGuard],
    },

    {
        path: 'reportes', component: ReportesComponent,
        children:[
            {
                path: 'numberdietinityfinal', component: NumberdietinityfinComponent,
            },
            {
                path: 'edicionesrep/:id', component:InsertarComponent,
            },
            {
                path: 'proportionusers', component: ProporcionUsersComponent,
            },
        ],
        canActivate: [seguridadGuard],
    },

    {
        path:'Dietas', component:DietComponent,
        children:[
            {
                path: 'nuevodt', component: InsertardtComponent,
            },
            {
                path:'edicionesdt/:id', component:InsertardtComponent,
            },
            {
                path: ':id', component: DietComponent, // Ruta para ver detalles de la dieta de una enfermedad específica
            },
        ],
        canActivate: [seguridadGuard],
    },
    {
      path:'Ejercicios', component:ExercisesComponent,
      children:[
          {
              path: 'nuevoex', component: InsertarexComponent,
          },
          {
            path:'edicionesex/:id', component: InsertarexComponent,
          },
      ],

    },
    {
      path:'Alimentos', component:FoodComponent,
      children:[
          {
              path: 'nuevofd', component: InsertarfdComponent,
          },
          {
            path:'edicionesfd/:id', component: InsertarfdComponent,
          },
      ],

    },

    {
      path:'Usuarioss', component:UsersComponent,
      children:[
          {
              path: 'nuevous', component: InsertarusComponent,
              children:[
                {
                    path: 'nuevohp/:id', component: CrearhpComponent,
                },
              ],
          },
          {
            path:'modificar/:id', component: InsertarusComponent,
          },
      ],
      canActivate: [seguridadGuard],
    },

    {
      path:'Hospitales', component:HospitalComponent,
      canActivate: [seguridadGuard],
    },

    {
        path: 'homes',
        component: HomeComponent,
        canActivate: [seguridadGuard],
    },

];

