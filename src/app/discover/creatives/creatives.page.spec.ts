import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { CreativesPage } from './creatives.page'

describe('CreativesPage', () => {
    let component: CreativesPage
    let fixture: ComponentFixture<CreativesPage>

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CreativesPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents()
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(CreativesPage)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
