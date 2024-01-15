import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { EditeurserviceService } from '../editeurservice.service';
import { Editeur } from '../editeur';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  @Input() editeurId: object;

  @ViewChild('myModal') myModal!: ElementRef;

  display = 'none';
  editeur: Editeur = new Editeur();

  constructor(private editeurService: EditeurserviceService) {}
  ngOnInit(): void {
    this.editeurService.findById(this.editeurId).subscribe(editeur => {
      this.editeur=editeur;
    })
  }

  ajoutEditeur = () => {
    this.editeurService.update(this.editeurId,this.editeur).subscribe((data) => {
      console.log(data);
      this.closeModal();
      window.location.reload();
    });
  };
  openModal() {
    this.display = 'block';
    console.log(this.editeurId);
  }

  closeModal() {
    this.display = 'none';
  }
}
