import { Component, OnInit, Input } from '@angular/core'
import { ModalController } from '@ionic/angular'

import { Creative } from '../../discover/creative.model'

@Component({
    selector: 'app-message-modal',
    templateUrl: './message-modal.component.html',
    styleUrls: ['./message-modal.component.scss']
})
export class MessageModalComponent implements OnInit {
    @Input() selectedCreative: Creative

    constructor(private modalCtrl: ModalController) {}

    ngOnInit() {}

    onCancel() {
        this.modalCtrl.dismiss(null, 'cancel')
    }

    onSendMessage() {
        this.modalCtrl.dismiss(
            {
                message: 'This is a dummy message!'
            },
            'confirm'
        )
    }
}
