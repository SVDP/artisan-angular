import { Injectable } from '@angular/core'

import { Shot } from './shot.model'

@Injectable({
    providedIn: 'root'
})
export class ShotsService {
    private _shots: Shot[] = [
        new Shot(
            's1',
            'Columbico Bird Food',
            'branding',
            'This is a tag',
            'https://mir-s3-cdn-cf.behance.net/projects/404/521fb580054395.Y3JvcCwyODc3LDIyNTEsNTYyLDA.png',
            'c1'
        ),
        new Shot(
            's2',
            'Random shot',
            'motion',
            'This is a tag',
            'https://mir-s3-cdn-cf.behance.net/projects/404/97720079403215.Y3JvcCw4MDgsNjMyLDAsMA.png',
            'c2'
        )
    ]

    get shots() {
        return [...this._shots]
    }

    constructor() {}

    getShot(id: string) {
        return { ...this._shots.find(s => s.id === id) }
    }
}
