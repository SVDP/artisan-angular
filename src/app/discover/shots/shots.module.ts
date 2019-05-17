import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { Routes, RouterModule } from '@angular/router'

import { IonicModule } from '@ionic/angular'

import { ShotsPage } from './shots.page'
import { ShotModalComponent } from './shot-modal/shot-modal.component'

const routes: Routes = [
    {
        path: '',
        component: ShotsPage
    }
]

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
    declarations: [ShotsPage, ShotModalComponent],
    entryComponents: [ShotModalComponent]
})
export class ShotsPageModule {}
