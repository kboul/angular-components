import { Component, Input } from '@angular/core';

@Component({
    selector: 'like',
    templateUrl: './like.component.html',
    styleUrls: ['./like.component.sass']
})

export class LikeComponent {
    @Input() isActive: boolean;
    @Input() likesCount: number;

    toggle() {
        this.isActive = !this.isActive;
        this.likesCount += (this.isActive) ? 1 : -1;
    }
}