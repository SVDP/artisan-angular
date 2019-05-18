import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { NavController, ModalController } from '@ionic/angular'

import { Creative } from '../../creative.model'
import { CreativesService } from '../../creatives.service'
import { MessageModalComponent } from '../../../modals/message-modal/message-modal.component'

@Component({
    selector: 'app-creative-detail',
    templateUrl: './creative-detail.page.html',
    styleUrls: ['./creative-detail.page.scss']
})
export class CreativeDetailPage implements OnInit {
    creative: Creative

    constructor(
        private route: ActivatedRoute,
        private navCtrl: NavController,
        private creativesService: CreativesService,
        private modalCtrl: ModalController
    ) {}

    ngOnInit() {
        this.route.paramMap.subscribe(paramMap => {
            if (!paramMap.has('creativeId')) {
                this.navCtrl.navigateBack('/discover/tabs/creatives')
                return
            }
            this.creative = this.creativesService.getCreative(paramMap.get('creativeId'))
        })
    }

    openModalMessage() {
        this.modalCtrl
            .create({
                component: MessageModalComponent,
                componentProps: {
                    selectedCreative: this.creative
                }
            })
            .then(modalEl => {
                modalEl.present()
            })
    }
}
