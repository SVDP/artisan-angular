import { Component, OnInit, Input } from '@angular/core'
import { ModalController } from '@ionic/angular'

import { Shot } from '../../discover/shot.model'

@Component({
    selector: 'app-comment-modal',
    templateUrl: './comment-modal.component.html',
    styleUrls: ['./comment-modal.component.scss']
})
export class CommentModalComponent implements OnInit {
    @Input() selectedShot: Shot

    constructor(private modalCtrl: ModalController) {}

    ngOnInit() {}

    onCancel() {
        this.modalCtrl.dismiss(null, 'cancel')
    }

    onSendComment() {
        this.modalCtrl.dismiss(
            {
                message: 'This is a dummy comment!'
            },
            'confirm'
        )
    }
}
