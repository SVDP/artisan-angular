import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { CreativeDetailPage } from './creative-detail.page'

describe('CreativeDetailPage', () => {
    let component: CreativeDetailPage
    let fixture: ComponentFixture<CreativeDetailPage>

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CreativeDetailPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents()
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(CreativeDetailPage)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
