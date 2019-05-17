import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ShotModalComponent } from './shot-modal.component'

describe('ShotModalComponent', () => {
    let component: ShotModalComponent
    let fixture: ComponentFixture<ShotModalComponent>

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ShotModalComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents()
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(ShotModalComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
