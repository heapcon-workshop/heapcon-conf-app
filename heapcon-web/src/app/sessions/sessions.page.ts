import {Component, OnInit} from "@angular/core";
import { HttpClient } from '@angular/common/http';
import {Session} from "../models/session.model";

@Component({
    selector: 'app-sessions',
    templateUrl: 'sessions.page.html',
    styleUrls: ['sessions.page.scss']
})
export class SessionsPage implements OnInit {
    public sessions: Array<Session> = [];

    constructor(private httpClient: HttpClient) {
        this.get_sessions();
    }

    get_sessions(){
        this.httpClient.get<Session[]>("http://localhost:3000/schedules").subscribe((res) => {
            this.sessions = res;
        })
    }

    ngOnInit() {
    }
}

