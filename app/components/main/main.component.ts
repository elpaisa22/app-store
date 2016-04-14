import {Component} from 'angular2/core';

//primeng components
import {InputText} from 'primeng/primeng';
import {Button}    from 'primeng/primeng';
import {Dialog}    from 'primeng/primeng';

@Component({
	selector: 'main',
	templateUrl: 'app/components/main/main.html',
    directives: [InputText, Button, Dialog]
})
export class MainComponent {
    text: string;
		display: boolean = false;

    showDialog() {
        this.display = true;
    }
}
