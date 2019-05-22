import { Injectable } from '@angular/core'

import { Creative } from './creative.model'

@Injectable({
    providedIn: 'root'
})
export class CreativesService {
    private _creatives: Creative[] = [
        new Creative(
            'c1',
            'Milica Tucakovic',
            'Student of Faculty of Fine Arts',
            ['branding', 'graphic design', 'illustration'],
            './assets/img/creatives/c1.jpg',
            ['project1', 'project2', 'project3']
        ),
        new Creative(
            'c2',
            'Random name',
            'Description of the user',
            ['motion', 'photography'],
            './assets/img/creatives/c2.jpg',
            ['project1', 'project2', 'project3', 'project4', 'project5']
        )
    ]

    get creatives() {
        return [...this._creatives]
    }

    constructor() {}

    getCreative(id: string) {
        return { ...this._creatives.find(c => c.id === id) }
    }
}
