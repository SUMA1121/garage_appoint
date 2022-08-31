import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Garage_management';
  myimage:string = "https://www.familyhandyman.com/wp-content/uploads/2020/12/GettyImages-1175908367.jpg";
  myname(){
    return "suma";
  }
}
