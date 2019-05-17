import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ShotDetailPage } from './shot-detail.page'

describe('ShotDetailPage', () => {
    let component: ShotDetailPage
    let fixture: ComponentFixture<ShotDetailPage>

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ShotDetailPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents()
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(ShotDetailPage)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
