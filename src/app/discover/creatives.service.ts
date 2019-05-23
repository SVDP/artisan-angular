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
            '',
            '',
            '',
            './assets/img/creatives/c1.jpg',
            'https://mir-s3-cdn-cf.behance.net/projects/404/d9a33d77819747.Y3JvcCwxMjUzLDk4MCwyMjYsMA.png',
            'https://mir-s3-cdn-cf.behance.net/projects/404/d9a33d77819747.Y3JvcCwxMjUzLDk4MCwyMjYsMA.png',
            'https://mir-s3-cdn-cf.behance.net/projects/404/d9a33d77819747.Y3JvcCwxMjUzLDk4MCwyMjYsMA.png',
            'https://mir-s3-cdn-cf.behance.net/projects/404/d9a33d77819747.Y3JvcCwxMjUzLDk4MCwyMjYsMA.png',
            'https://mir-s3-cdn-cf.behance.net/projects/404/d9a33d77819747.Y3JvcCwxMjUzLDk4MCwyMjYsMA.png'
        ),
        new Creative(
            'c2',
            'Random name',
            'Description of the user',
            '',
            '',
            '',
            './assets/img/creatives/c2.jpg',
            '',
            '',
            '',
            '',
            ''
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
