import { Component } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  showSpan(e:any,span:string){
    if (e.target.value) {
       document.getElementById(span)?.classList.remove("d-none")
 document.getElementById(span)?.classList.replace("animate__fadeOutDown","animate__fadeInUp")
    }else{

document.getElementById(span)?.classList.replace("animate__fadeInUp","animate__fadeOutDown")
      setTimeout(function () {
document.getElementById(span)?.classList.add("d-none")
      },1000)
    }



  }
}
