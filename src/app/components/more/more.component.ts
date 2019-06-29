import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from '../../models/favorite-changed-event-args';
import { Tweet } from '../../models/tweet';

@Component({
    selector: 'app-more',
    templateUrl: './more.component.html',
    styleUrls: ['./more.component.sass']
})

export class MoreComponent {
    star = {
        isFavorite: true
    }

    onFavoriteChanged(stateOfIsFavorite: FavoriteChangedEventArgs) {
        console.log("clicked status is currently", stateOfIsFavorite);
    }

    tweet: Tweet = {
        isLiked: false,
        likesCount: 10
    }

    courses: Array<Number> = [1, 2];

    viewMode: string = 'else';

    canSave: boolean = false;
}