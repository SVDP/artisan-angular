import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { Routes, RouterModule } from '@angular/router'

import { IonicModule } from '@ionic/angular'

import { CreativesPage } from './creatives.page'

const routes: Routes = [
    {
        path: '',
        component: CreativesPage
    }
]

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [CreativesPage]
})
export class CreativesPageModule {}
