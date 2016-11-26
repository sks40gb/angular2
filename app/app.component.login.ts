import { Component } from '@angular/core';

@Component({
    selector: 'my-login',
    templateUrl: `./app/views/login.html`
})
export class LoginComponent { 
    todaysDate =  new Date();
    employees = [
        {name:"AAAA", phone:1234},
        {name:"BBBB", phone:57657},
        {name:"CCCC", phone:57667},        
    ];
    
    addEmployee = function(){
        this.employees.push({name:"x_"+this.employees.length, phone:"e"+this.employees.length});
    }
    
    removeEmployee = function(index){
        console.log("removeEmployee", index, this);
        this.employees.splice(index,1);
    }
}