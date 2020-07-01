import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm, NgModelGroup} from '@angular/forms';
import {stringify} from 'querystring';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    @ViewChild('formData', {static: true}) formData: NgForm;
    @ViewChild('formGroup', {static: true}) groupData: NgModelGroup;

    userInfo = {
        username: '',
        email: '',
        secret: '',
        gender: ''
    };
    isSubmitted = false;

    genders: string[] = [
        'Male',
        'Female'
    ];

    suggestUserName() {
        // user setValue only when u wanna update all the field,
        // the structure must be the same as that of the table

        // this.formData.setValue({
        //     formGroup: {
        //         username: 'Fahad',
        //         email: 'fahadq@developer.com',
        //         secret: 'teacher',
        //         gender: 'Male'
        //     }
        // });

        // user patchValue if you dont wanna update all the fields
        this.formData.form.patchValue({
            formGroup: {
                username: 'Fahad'
            }
        });

    }

    onFormSubmit(formData: NgForm) {
        this.isSubmitted = true;
        console.log(formData);

        // to print the value in the formData
        console.log(this.groupData.value.email);
        console.log('is form data valid: ' + formData.valid);


        this.userInfo.username = this.formData.value.formGroup.username;
        this.userInfo.email = this.formData.value.formGroup.email;
        this.userInfo.secret = this.formData.value.secret;
        this.userInfo.gender = this.formData.value.gender;
        this.formData.reset();
    }
}
