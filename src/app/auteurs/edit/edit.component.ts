import { Component, ElementRef, ViewChild } from '@angular/core';
import { Auteur } from '../auteur';
import { AuteurserviceService } from '../auteurservice.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

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
