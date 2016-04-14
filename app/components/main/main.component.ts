import {Component} from 'angular2/core';

//primeng components
import {InputText} from 'primeng/primeng';
import {Button}    from 'primeng/primeng';
import {Dialog}    from 'primeng/primeng';

@Component({
	selector: 'main',
	template: `
        <h1>My First 2 App</h1>
        <input type="text" pInputText [(ngModel)]="text"/>
        {{text}}
				<hr/>
				<button pButton type="button" (click)="showDialog()" icon="fa-check" iconPos="left" label="Saludar"></button>

				<p-dialog header="Title" [(visible)]="display" modal="modal">
				    Hola {{text}}
				</p-dialog>
    `,
    directives: [InputText, Button, Dialog]
})
export class MainComponent {
    text: string;
		display: boolean = false;

    showDialog() {
        this.display = true;
    }
}
