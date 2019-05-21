import { Component, OnInit } from '@angular/core'

import { ShotsService } from '../shots.service'
import { Shot } from '../shot.model'

@Component({
    selector: 'app-shots',
    templateUrl: './shots.page.html',
    styleUrls: ['./shots.page.scss']
})
export class ShotsPage implements OnInit {
    sliderConfig = {
        slidesPerView: 1.2,
        spaceBetween: -16,
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true
        }
    }

    loadedShots: Shot[]

    constructor(private shotsService: ShotsService) {}

    ngOnInit() {
        this.loadedShots = this.shotsService.shots
    }
}
