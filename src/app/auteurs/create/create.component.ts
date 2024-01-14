import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuteurserviceService } from '../auteurservice.service';
import { Auteur } from '../auteur';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  @ViewChild('myModal') myModal!: ElementRef;
display = "none";
auteur:Auteur=new Auteur()

constructor(private auteurService:AuteurserviceService){}

ajoutAuteur=()=>{
this.auteurService.create(this.auteur).subscribe((data=>{
console.log(data)
this.closeModal() 
window.location.reload();
}))

}
openModal() { 
this.display = "block";
}

closeModal() {
this.display = "none";
}
 
}
