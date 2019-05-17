import { Component, OnInit } from '@angular/core'
import { ModalController } from '@ionic/angular'

import { ShotsService } from '../shots.service'
import { Shot } from '../shot.model'
import { ShotModalComponent } from './shot-modal/shot-modal.component'

@Component({
    selector: 'app-shots',
    templateUrl: './shots.page.html',
    styleUrls: ['./shots.page.scss']
})
export class ShotsPage implements OnInit {
    loadedShots: Shot[]

    constructor(private shotsService: ShotsService, private modalCtrl: ModalController) {}

    ngOnInit() {
        this.loadedShots = this.shotsService.shots
    }

    onShowModal() {
        console.log('Modal opened!')
        this.modalCtrl.create({ component: ShotModalComponent }).then(modalEl => {
            modalEl.present()
        })
    }
}
