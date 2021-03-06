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
            './assets/img/creatives/c1.jpg',
            './assets/img/shots/s1.jpg',
            './assets/img/shots/s2.jpg',
            './assets/img/shots/s3.jpg',
            './assets/img/shots/s4.jpg',
            './assets/img/shots/s5.jpg',
            's1',
            's2',
            's3',
            's4',
            's5'
        ),
        new Creative(
            'c2',
            'Tomek Bilic',
            'Motion artist from Croatia',
            './assets/img/creatives/c2.jpg',
            './assets/img/shots/s6.jpg',
            './assets/img/shots/s7.jpg',
            './assets/img/shots/s8.jpg',
            './assets/img/shots/s9.jpg',
            './assets/img/shots/s10.jpg',
            's6',
            's7',
            's8',
            's9',
            's10'
        ),
        new Creative(
            'c3',
            'Anna Zhou',
            'Living in Bejing',
            './assets/img/creatives/c3.jpg',
            './assets/img/shots/s11.jpg',
            './assets/img/shots/s12.jpg',
            './assets/img/shots/s13.jpg',
            './assets/img/shots/s14.jpg',
            './assets/img/shots/s15.jpg',
            's11',
            's12',
            's13',
            's14',
            's15'
        ),
        new Creative(
            'c4',
            "Jacqueline L' herminez",
            'Illustrator',
            './assets/img/creatives/c4.jpg',
            './assets/img/shots/s16.jpg',
            './assets/img/shots/s17.jpg',
            './assets/img/shots/s18.jpg',
            './assets/img/shots/s19.jpg',
            './assets/img/shots/s20.jpg',
            's16',
            's17',
            's18',
            's19',
            's20'
        ),
        new Creative(
            'c5',
            'Viktor Vaughn',
            'Designer from Montreal',
            './assets/img/creatives/c5.jpg',
            './assets/img/shots/s21.jpg',
            './assets/img/shots/s22.jpg',
            './assets/img/shots/s23.jpg',
            './assets/img/shots/s24.jpg',
            './assets/img/shots/s25.jpg',
            's21',
            's22',
            's23',
            's24',
            's25'
        ),
        new Creative(
            'c6',
            'Nicholas Craven',
            'I love typography and copywriting',
            './assets/img/creatives/c6.jpg',
            './assets/img/shots/s26.jpg',
            './assets/img/shots/s27.jpg',
            './assets/img/shots/s28.jpg',
            './assets/img/shots/s29.jpg',
            './assets/img/shots/s30.jpg',
            's26',
            's27',
            's28',
            's29',
            's30'
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
