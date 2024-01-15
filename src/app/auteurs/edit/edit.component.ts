import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Auteur } from '../auteur';
import { AuteurserviceService } from '../auteurservice.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  @Input() auteurId: object;

  @ViewChild('myModal') myModal!: ElementRef;

  display = 'none';
  auteur: Auteur = new Auteur();

  constructor(private auteurService: AuteurserviceService) {}
  ngOnInit(): void {
    this.auteurService.findById(this.auteurId).subscribe(auteur => {
      this.auteur=auteur;
    })
  }

  ajoutAuteur = () => {
    this.auteurService.update(this.auteurId,this.auteur).subscribe((data) => {
      console.log(data);
      this.closeModal();
      window.location.reload();
    });
  };
  openModal() {
    this.display = 'block';
    console.log(this.auteurId);
  }

  closeModal() {
    this.display = 'none';
  }
}
