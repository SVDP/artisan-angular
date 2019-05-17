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
            'branding',
            //['branding', 'graphic design', 'illustration'],
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
            //['project1', 'project2', 'project3']
            'Project01'
        ),
        new Creative(
            'c2',
            'Random name',
            'Description of the user',
            //['motion', 'photography'],
            'motion',
            'https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
            //['project1', 'project2', 'project3', 'project4', 'project5']
            'project01'
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
