import { Component, OnInit } from '@angular/core'

import { CreativesService } from '../creatives.service'
import { Creative } from '../creative.model'

@Component({
    selector: 'app-creatives',
    templateUrl: './creatives.page.html',
    styleUrls: ['./creatives.page.scss']
})
export class CreativesPage implements OnInit {
    loadedCreatives: Creative[]

    constructor(private creativesService: CreativesService) {}

    ngOnInit() {
        this.loadedCreatives = this.creativesService.creatives
    }
}
