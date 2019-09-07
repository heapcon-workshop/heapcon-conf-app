import {Component, OnInit} from "@angular/core";
import { HttpClient } from '@angular/common/http';
import {Delegate} from "../models/delegate.model";

@Component({
    selector: 'app-delegates',
    templateUrl: 'delegates.page.html',
    styleUrls: ['delegates.page.scss']
})
export class DelegatesPage implements OnInit {
    public delegates: Array<Delegate> = [];

    constructor(private httpClient: HttpClient) {
        this.get_products();
    }

    get_products(){
        this.httpClient.get<Delegate[]>("http://localhost:8080/attendees").subscribe((res) => {
            console.log(res);
            this.delegates = res;
        })
    }

    ngOnInit() {
    }
}

