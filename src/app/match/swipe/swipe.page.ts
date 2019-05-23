import { Component, OnInit } from '@angular/core'

import { CreativesService } from '../../discover/creatives.service'
import { Creative } from '../../discover/creative.model'

@Component({
    selector: 'app-swipe',
    templateUrl: './swipe.page.html',
    styleUrls: ['./swipe.page.scss']
})
export class SwipePage implements OnInit {
    loadedCreatives: Creative[]

    constructor(private creativesService: CreativesService) {}

    ngOnInit() {
        this.loadedCreatives = this.creativesService.creatives
    }
}
