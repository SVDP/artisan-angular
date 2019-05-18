import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { CommentModalComponent } from './comment-modal.component'

describe('CommentModalComponent', () => {
    let component: CommentModalComponent
    let fixture: ComponentFixture<CommentModalComponent>

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CommentModalComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents()
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(CommentModalComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
