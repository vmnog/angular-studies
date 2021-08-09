import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = "No server was created.";
  serverName: string = "Unknown";
  serverList: Array<string> = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 1000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverList.push(this.serverName);
    this.serverCreationStatus = 'Server was created!'

    this.allowNewServer = false;

    setTimeout(() => {
      this.allowNewServer = true;
      this.serverCreationStatus = 'No server was created!'
    }, 2000);
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
