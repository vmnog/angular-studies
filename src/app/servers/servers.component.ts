import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = "No server was created.";
  serverName: string = "";
  serverCreated: boolean = false;
  servers: Array<string> = [
    '1 - Server',
    '2 - Server'
  ];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 1000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    if (!this.serverName) return;

    this.serverCreationStatus = "Server was created. Name is " + this.serverName;
    this.serverCreated = true;
    this.servers.push(`${this.servers.length + 1} - ${this.serverName}`);
  }

  // onUpdateServerName(event: Event) {
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }
}
