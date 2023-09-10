import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
openImg(e:any){

let imgId:string =e.target.getAttribute("img-id")
let imgUrl = document.getElementById(imgId)?.getAttribute("src")


if (imgUrl) {
document.getElementById("imgDisplay")?.setAttribute("src",imgUrl)
document.getElementById("displayArea")?.classList.remove("d-none")
document.getElementById("displayArea")?.classList.add("d-flex")
}
}
cancel(){
document.getElementById("displayArea")?.classList.replace("d-flex","d-none")
}





}
