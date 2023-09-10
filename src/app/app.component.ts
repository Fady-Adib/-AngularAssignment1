import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularAssignment1';

scrollY:number=window.scrollY
  constructor(){
 console.log( window.scrollY);
window.addEventListener("scroll",function (e:any){
let navBarElement=document.getElementById("navBarElement")?.classList
 console.log(window.scrollY);
scrollY==0?navBarElement?.add("pb-4") :navBarElement?.remove("pb-4")
})

}




}





