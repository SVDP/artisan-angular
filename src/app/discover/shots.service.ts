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
            'https://mir-s3-cdn-cf.behance.net/projects/404/d9a33d77819747.Y3JvcCwxMjUzLDk4MCwyMjYsMA.png',
            'c1'
        ),
        new Shot(
            's2',
            'Random shot',
            'motion',
            'This is a tag',
            'https://mir-s3-cdn-cf.behance.net/projects/max_808/ed9c7377439259.Y3JvcCw4MDgsNjMyLDAsMA.png',
            'c2'
        ),
        new Shot(
            's3',
            'Random shot',
            'motion',
            'This is a tag',
            'https://mir-s3-cdn-cf.behance.net/projects/404/a323f378619769.Y3JvcCwxNjA1LDEyNTYsMTUsMA.png',
            'c3'
        ),
        new Shot(
            's3',
            'Random shot',
            'motion',
            'This is a tag',
            'https://mir-s3-cdn-cf.behance.net/projects/404/875ad769275059.Y3JvcCwxNjA1LDEyNTYsMTUsMA.png',
            'c3'
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
