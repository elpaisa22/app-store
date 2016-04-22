import {Component} from 'angular2/core';

import {MdButton} from '@angular2-material/button/button';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav/sidenav';
import {MdToolbar} from '@angular2-material/toolbar/toolbar';
import {MdCheckbox} from '@angular2-material/checkbox/checkbox';
import {MdRadioButton} from '@angular2-material/radio/radio';
import {MdRadioDispatcher} from '@angular2-material/radio/radio_dispatcher';
import {MdSpinner} from '@angular2-material/progress-circle/progress-circle';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card/card';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input/input';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list/list';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
	selector: 'main',
	templateUrl : 'app/components/main/main.html',
	providers: [MdRadioDispatcher],
  directives: [
			          MdButton,
								MD_SIDENAV_DIRECTIVES,
							  MdToolbar,
								MdCheckbox,
								MdRadioButton,
								MdSpinner,
								MD_CARD_DIRECTIVES,
								MD_INPUT_DIRECTIVES,
								MD_LIST_DIRECTIVES,
								ROUTER_DIRECTIVES
							]
})
export class MainComponent {
    text: string;
		display: boolean = false;

    showDialog() {
        this.display = true;
    }
}
