import {Component, OnInit} from "@angular/core";
import { HttpClient } from '@angular/common/http';
import {Attendee} from "../models/attendee.model";

@Component({
    selector: 'app-attendees',
    templateUrl: 'attendees.page.html',
    styleUrls: ['attendees.page.scss']
})
export class AttendeesPage implements OnInit {
    public attendees: Array<Attendee> = [];

    constructor(private httpClient: HttpClient) {
        this.get_attendees();
    }

    get_attendees(){
        const currentLoc = window.location.href;
        let prefix = currentLoc.match(/https:\/\/(.*)-heapcon-web(.*)/)[1];
        let baseUrl = currentLoc.match(/web\.(.*).xip.io(.*)/)[1];

        this.httpClient.get<Attendee[]>(`https://${prefix}-heapcon-attendeeservice.${baseUrl}.xip.io/attendees`).subscribe((res) => {
            console.log(res);
            this.attendees = res;
        })
    }

    ngOnInit() {
    }
}

