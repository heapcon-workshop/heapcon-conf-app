import {Component, OnInit} from "@angular/core";

@Component({
    selector: 'app-delegates',
    templateUrl: 'delegates.page.html',
    styleUrls: ['delegates.page.scss']
})
export class DelegatesPage implements OnInit {
    public delegates: Array<{ firstName: String; lastName: String; position: String }> = [];

    constructor() {
        for (let i = 1; i < 20; i++) {
            this.delegates.push({
                firstName: `First name ${i}`,
                lastName: ` with Last name ${i}`,
                position: `Software Developer`
            })
        }
    }

    ngOnInit() {
    }
}

