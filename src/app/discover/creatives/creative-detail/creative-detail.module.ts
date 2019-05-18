import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { Routes, RouterModule } from '@angular/router'

import { IonicModule } from '@ionic/angular'

import { CreativeDetailPage } from './creative-detail.page'
import { MessageModalComponent } from '../../../modals/message-modal/message-modal.component'

const routes: Routes = [
    {
        path: '',
        component: CreativeDetailPage
    }
]

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
    declarations: [CreativeDetailPage, MessageModalComponent],
    entryComponents: [MessageModalComponent]
})
export class CreativeDetailPageModule {}
