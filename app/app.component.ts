import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1 style="color:green">Hello Angular {{name}} - {{todaysDate}}
    </h1> <input [value]="name" (click)="changeName()">`
})
export class AppComponent { 
    name = "From ziletech"
	todaysDate =  new Date();
    changeName = function(){
        console.log("Changename method");
        this.name = "XLS Tech";
    };
}