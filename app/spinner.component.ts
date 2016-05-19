import {Component, Input} from 'angular2/core'

@Component({
    selector: 'spinner',
    templateUrl: './app/spinner.component.html'
})


export class SpinnerComponent {
    @Input() visible = true;
}