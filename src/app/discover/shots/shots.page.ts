import { Component, OnInit } from '@angular/core'

import { ShotsService } from '../shots.service'
import { Shot } from '../shot.model'

@Component({
    selector: 'app-shots',
    templateUrl: './shots.page.html',
    styleUrls: ['./shots.page.scss']
})
export class ShotsPage implements OnInit {
    loadedShots: Shot[]

    constructor(private shotsService: ShotsService) {}

    ngOnInit() {
        this.loadedShots = this.shotsService.shots
    }
}
