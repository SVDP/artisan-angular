import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { MessageModalComponent } from './message-modal.component'

describe('MessageModalComponent', () => {
    let component: MessageModalComponent
    let fixture: ComponentFixture<MessageModalComponent>

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MessageModalComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents()
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(MessageModalComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
