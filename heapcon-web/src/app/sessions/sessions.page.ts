import {Component, OnInit} from "@angular/core";

@Component({
    selector: 'app-sessions',
    templateUrl: 'sessions.page.html',
    styleUrls: ['sessions.page.scss']
})
export class SessionsPage implements OnInit {
    public sessions: Array<{title: String; presenters: Array<String>; description: String; duration: String}> = [];

    constructor() {
        for (let i = 1; i < 20; i++) {
            this.sessions.push({
                title: `Session ${i}`,
                presenters: [`Presenter ${i}`],
                description: `Some fancy description ${i}`,
                duration: `1h ${i}min`
            })
        }
    }

    ngOnInit() {
    }
}

