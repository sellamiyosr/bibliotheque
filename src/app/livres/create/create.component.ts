import { Component, ElementRef, ViewChild } from '@angular/core';
import { Auteur } from 'src/app/auteurs/auteur';
import { Livre } from '../livre';
import { LivreserviceService } from '../livreservice.service';
import { Specialite } from 'src/app/specialites/specialite';
import { SepicialiteserviceService } from 'src/app/specialites/sepicialiteservice.service';
import { AuteurserviceService } from 'src/app/auteurs/auteurservice.service';
import { EditeurserviceService } from 'src/app/editeurs/editeurservice.service';
import { Editeur } from 'src/app/editeurs/editeur';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  @ViewChild('myModal') myModal!: ElementRef;
  display = "none";
  livre:Livre=new Livre()
  specialite!:Specialite[] ;
  auteur!:Auteur[] ;
  editeur!:Editeur[] ;
  
  constructor(private livreService:LivreserviceService, private specialiteService : SepicialiteserviceService,
    private auteurService : AuteurserviceService,private editeurService : EditeurserviceService,){}
  
  ngOnInit(){
    this.loadspecialite()
    this.loadauteur()
    this.loadediteur()
    }
    loadspecialite(){
    return this.specialiteService.getAll().subscribe(data=>
    this.specialite=data),
    (error:any)=>console.log(error)
    }

    loadauteur(){
      return this.auteurService.getAll().subscribe(data=>
      this.auteur=data),
      (error:any)=>console.log(error)
      }

      loadediteur(){
        return this.editeurService.getAll().subscribe(data=>
        this.editeur=data),
        (error:any)=>console.log(error)
        }

  ajoutLivre=()=>{
  this.livreService.create(this.livre).subscribe((data=>{
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
