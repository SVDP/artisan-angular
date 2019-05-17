import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { NavController } from '@ionic/angular'

import { Shot } from '../../shot.model'
import { ShotsService } from '../../shots.service'

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
        private shotsService: ShotsService
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
}
