import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    suggestUserName() {
        const suggestedName = 'Superuser';
    }

    onFormSubmit(formData: NgForm) {
        console.log(formData);
    }

}
