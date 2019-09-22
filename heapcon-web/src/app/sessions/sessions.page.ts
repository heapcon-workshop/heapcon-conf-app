import {Component, OnInit} from "@angular/core";
import {HttpClient} from '@angular/common/http';
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

    get_sessions() {
        const currentLoc = window.location.href;
        let prefix = currentLoc.match(/https:\/\/(.*)-heapcon-web(.*)/)[1];
        let baseUrl = currentLoc.match(/web\.(.*).xip.io(.*)/)[1];

        this.httpClient.get<Session[]>(
            `https://${prefix}-heapcon-scheduleservice.${baseUrl}.xip.io/schedules`).subscribe((res) => {
            this.sessions = res;
        })
    }

    ngOnInit() {
    }
}