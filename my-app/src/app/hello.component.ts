import { Component } from "@angular/core";

@Component({
    selector: 'hello-world',
    template: '<h2>{{title}}</h2> <br /> <h1>Angular is very cool</h1>'
})

export class HelloWorldComponent {
    title: string = "Hello world, from Angular"
}