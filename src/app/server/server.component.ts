import { Component } from '@angular/core';


@Component({

    selector:'app-server',
    templateUrl:'./server.component.html',
    styles : [`
            h4 {
                color:dodgerblue
                
            }
            .online{
                color:green
            }
    `]

})

export class ServerComponent {
        serverId:number = 4200;
        serverPortName :string = 'http://localhost:';
        serverStatus:string = 'offline';
        allowNewServer = false;
        isServerCreated = "No Servers Created."
        isEventbinding = "Created With Event binding."
        serverName = '';
        serverCreates = false;

        servers = ['TestServer' ,'TestServer2'];


    getServerStatus(){
        return this.serverStatus;
    }
    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline'
        setTimeout(()=>{
            this.allowNewServer = true;
        },2000)
    }
    onTextChange(){ 
        this.servers.push(this.serverName);
        this.serverCreates = true;
        this.isServerCreated = "Server Was created with " +this.getServerStatus()+ " " +this.isEventbinding + " with Name is : "+this.serverName  
    }
    onInputUpdate(event:Event){
        this.serverName = (<HTMLInputElement>event.target).value;
    }
    getColor() {
        return this.serverStatus === 'Online' ? 'green' : 'red';
    }
}