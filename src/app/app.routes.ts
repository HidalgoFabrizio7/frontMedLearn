import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { IllnessComponent } from './components/illness/illness.component';
import { InsertarComponent } from './components/illness/insertar/insertar.component';
import { DietComponent } from './components/diet/diet.component';
import { InsertardtComponent } from './components/diet/insertardt/insertardt.component';
import { MedicineComponent } from './components/medicine/medicine.component';
import { InsertarmedComponent } from './components/medicine/insertarmed/insertarmed.component';
import { UsersComponent } from './components/users/users.component';
import { InsertarusComponent } from './components/users/insertarus/insertarus.component';
import { InsertarquanComponent } from './components/quantity/insertarquan/insertarquan.component';
import { ListarquanComponent } from './components/quantity/listarquan/listarquan.component';
import { QuantityComponent } from './components/quantity/quantity.component';
import {ReportesComponent} from './components/reportes/reportes.component';
import {TreatmentsComponent} from './components/treatments/treatments.component';
import {InsertartrComponent} from './components/treatments/insertartr/insertartr.component';
import { HospitalComponent } from './components/hospital/hospital.component';
import { CrearhpComponent } from './components/hospital/crearhp/crearhp.component';
import { NumberdietinityfinComponent } from './components/reportes/numberdietinityfin/numberdietinityfin.component';

export const routes: Routes = [
    {
        path: 'Enfermedades', component: IllnessComponent,
        children:[
            {path: 'nuevoenf', component: InsertarComponent,

            },
            {
                path: 'edicionesenf/:id', component:InsertarComponent,
            },
        ],
    },

    {
        path: 'reportes', component: ReportesComponent,
        children:[
            {path: 'numberdietinityfinal', component: NumberdietinityfinComponent,

            },
            {
                path: 'edicionesrep/:id', component:InsertarComponent,
            },
        ],
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
    },
    {
        path:'Medicinas', component:MedicineComponent,
        children:[
            {
                path: 'nuevomed', component: InsertarmedComponent,
            },
            {
                path:'edicionesmed/:id', component:InsertarmedComponent,
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
    },


    {
        path:'Cantidades', component:QuantityComponent,
        children:[
            {
                path: 'nuevoCanti', component: InsertarquanComponent,
            },
            {
              path:'editas/:id', component: InsertarquanComponent,
            },
        ],

      },


    {
    path: 'reportes', component: ReportesComponent,
    children:[
        {path: 'numberdietinityfinal', component: NumberdietinityfinComponent,

        },
        {
            path: 'edicionesrep/:id', component:InsertarComponent,
        },
    ],
},

    {
      path:'Hospitales', component:HospitalComponent,
    },

  {
    path:'Tratamientoss', component:TreatmentsComponent,
    children:[
        {
            path: 'nuevotr', component: InsertartrComponent,
        },
        {
            path:'edicionestr/:id', component:InsertartrComponent,
        },
    ],
},
];

