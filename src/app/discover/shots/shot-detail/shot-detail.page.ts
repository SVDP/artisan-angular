import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { NavController, ModalController } from '@ionic/angular'

import { Shot } from '../../shot.model'
import { ShotsService } from '../../shots.service'
import { CommentModalComponent } from '../../../modals/comment-modal/comment-modal.component'

@Component({
    selector: 'app-shot-detail',
    templateUrl: './shot-detail.page.html',
    styleUrls: ['./shot-detail.page.scss']
})
export class ShotDetailPage implements OnInit {
    shot: Shot

    constructor(
        private route: ActivatedRoute,
        private navCtrl: NavController,
        private shotsService: ShotsService,
        private modalCtrl: ModalController
    ) {}

    ngOnInit() {
        this.route.paramMap.subscribe(paramMap => {
            if (!paramMap.has('shotId')) {
                this.navCtrl.navigateBack('/discover/tabs/shots')
                return
            }
            this.shot = this.shotsService.getShot(paramMap.get('shotId'))
        })
    }

    openModalComment() {
        this.modalCtrl
            .create({
                component: CommentModalComponent,
                componentProps: {
                    selectedShot: this.shot
                },
                cssClass: 'modal'
            })
            .then(modalEl => {
                modalEl.present()
            })
    }
}
