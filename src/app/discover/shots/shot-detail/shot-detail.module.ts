import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { Routes, RouterModule } from '@angular/router'

import { IonicModule } from '@ionic/angular'

import { ShotDetailPage } from './shot-detail.page'

const routes: Routes = [
    {
        path: '',
        component: ShotDetailPage
    }
]

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
    declarations: [ShotDetailPage]
})
export class ShotDetailPageModule {}
