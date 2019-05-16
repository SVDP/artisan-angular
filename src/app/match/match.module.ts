import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { IonicModule } from '@ionic/angular'

import { MatchPage } from './match.page'
import { MatchRoutingModule } from './match-routing.module'

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, MatchRoutingModule],
    declarations: [MatchPage]
})
export class MatchPageModule {}
