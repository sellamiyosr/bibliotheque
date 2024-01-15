import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Livre } from '../livre';
import { LivreserviceService } from '../livreservice.service';
import { SepicialiteserviceService } from 'src/app/specialites/sepicialiteservice.service';
import { EditeurserviceService } from 'src/app/editeurs/editeurservice.service';
import { AuteurserviceService } from 'src/app/auteurs/auteurservice.service';
import { Specialite } from 'src/app/specialites/specialite';
import { Auteur } from 'src/app/auteurs/auteur';
import { Editeur } from 'src/app/editeurs/editeur';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  @Input() livreId: object;

  @ViewChild('myModal') myModal!: ElementRef;

  display = 'none';
  livre: Livre = new Livre();
  specialite!:Specialite[] ;
  auteur!:Auteur[] ;
  editeur!:Editeur[] ;
  constructor( private livreService:LivreserviceService, private specialiteService : SepicialiteserviceService,
    private auteurService : AuteurserviceService,private editeurService : EditeurserviceService) {}
  ngOnInit(): void {
    this.livreService.findById(this.livreId).subscribe(livre => {
      this.livre=livre;
    })
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

  editLivre = () => {
    this.livreService.update(this.livreId,this.livre).subscribe((data) => {
      console.log(data);
      this.closeModal();
      window.location.reload();
    });
  };
  openModal() {
    this.display = 'block';
    console.log(this.livreId);
  }

  closeModal() {
    this.display = 'none';
  }
}
