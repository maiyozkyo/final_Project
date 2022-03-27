import { Injectable } from '@nestjs/common';



@Injectable()
export class UserProductService {

    renderRating(stars = 0): string{
        let rating_inner_html = ``
        for (let i = 0; i < stars; i++){
            rating_inner_html += `<i class="fa fa-star" aria-hidden="true"></i>`
        }
        return rating_inner_html;
    }
}
