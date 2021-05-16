import { Component, ElementRef, ViewChild ,OnInit} from '@angular/core';
import {FormationService} from "src/app/service/formation.service";
import {Router} from "@angular/router";
import {Session} from "src/app//model/session";
import {SessionService} from "src/app//service/session.service";
import {Profil} from "src/app//model/profil";
import {Formation} from "src/app//model/Formation";
import {Organisme} from "src/app//model/organisme";
import {Formateur} from "src/app//model/formateur";
import {OrganismeService} from "src/app//service/organisme.service";
import {FormateurService} from "src/app//service/formateur.service";
import {Pays} from "src/app//model/pays";
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import {map, startWith} from 'rxjs/operators';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {Observable} from 'rxjs';
import { Participant } from 'src/app/model/Participant';
import { ParticipantService } from 'src/app/service/participant.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-session-add',
  templateUrl: './session-add.component.html',
  styleUrls: ['./session-add.component.css']
})
export class SessionAddComponent implements OnInit {
 isValidFormSubmitted = false;
     sessionForm = new FormGroup({
     date_deb: new FormControl('', [Validators.required]),
     date_fin: new FormControl('', [Validators.required]),
     nbparticipant: new FormControl('', [Validators.required]),
     lieu: new FormControl('', [Validators.required,Validators.minLength(2)]),
     participantss: new FormControl('', [Validators.required]),
     formationss: new FormControl('', [Validators.required]),
     organismeee: new FormControl('', [Validators.required]),
     formateurss: new FormControl('', [Validators.required])
     });





  //-----AutoCompleteexemple--------
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  pariticpantCtrl = new FormControl();
  filteredParticipants: Observable<Participant[]> | undefined;
  participants: Participant[]=[];
  allParticipants: Participant[] =[
    {id:1,mail:"fares@gmail.com",nom:"fares",organisme:null,pays:null,prenom:"rahmani",profil:null,tel:12,type:""},
    {id:2,mail:"aymen@gmail.com",nom:"aymen",organisme:null,pays:null,prenom:"rahmani",profil:null,tel:12,type:""},
    {id:3,mail:"hamdi@gmail.com",nom:"hamdi",organisme:null,pays:null,prenom:"rahmani",profil:null,tel:12,type:""}
  ]

  @ViewChild('participantInput')participantInput!: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete ;
  //-------------

session: Session = new Session();
  submitted = false;

  formations: any;
  currentFormation: Formation;

  organismes: any;
  currentOrganisme: Organisme;

  formateurs: any;
  currentFormateur: Formateur;

  constructor(private sessionService: SessionService,
              private formationService: FormationService,
              private organismeService: OrganismeService,
              private formateurService: FormateurService,
              private participantService: ParticipantService,
              private router: Router) {

                let resp = this.participantService.getParticipantsList()
       resp.subscribe(report =>this.allParticipants = report as Participant[])
       this.pariticpantCtrl.setValue(null);
                   }


  save() {
        this.session.participants = this.participants
        console.log(this.session.participants)
          this.sessionService.createSession(this.session).subscribe(data => {
        this.session = new Session();

        this.gotoList();
      },
      error => console.log(error));
  }

  setNewFormation(formation: Formation): void {
    console.log(formation);
    this.currentFormation = formation;
  }


  setNewOrganisme(organisme: Organisme): void {
    console.log(organisme);
    this.currentOrganisme = organisme;
  }


  setNewFormateur(formateur: Formateur): void {
    console.log(formateur);
    this.currentFormateur = formateur;
  }
  onSubmit() {
             this.isValidFormSubmitted = false;
    if (this.session.lieu.trim().length<2) {
                                return ;
                                }

                   this.isValidFormSubmitted = true;
                   this.submitted = true;
                   this.save();
                   this.gotoList();

  }

  gotoList() {
    this.router.navigate(['/sessionliste']);
  }
 onReset() {
               this.submitted = false;
               this.sessionForm.reset();
           }
  ngOnInit(): void {
    this.organismeService.getOrganismesList().subscribe(data => {
      this.organismes = data;
    });


    this.formateurService.getFormateursList().subscribe(data => {
      this.formateurs = data;
    });

    this.formationService.getFormationsList().subscribe(data => {
      this.formations = data;
    });

    this.filteredParticipants = this.pariticpantCtrl.valueChanges.pipe(
      map((participant: Participant ) => participant ? this._filter(participant) : this.allParticipants.slice()));

  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our Participant
    if ((value || '').trim()) {
      var par = this.allParticipants.find(elem => elem.mail==value)
      this.participants.push(par);
     }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.pariticpantCtrl.setValue(null);
  }

  remove(participant: Participant): void {
    const index = this.participants.indexOf(participant);

    if (index >= 0) {
      this.participants.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {

    var par = this.allParticipants.find(elem => elem.mail==event.option.viewValue)
    this.participants.push(par);
    this.participantInput.nativeElement.value = '';
    this.pariticpantCtrl.setValue(null);
  }

  private _filter(value: Participant): Participant[] {
    const filterValue = value.nom.toLowerCase();

    return this.allParticipants.filter(Participant => Participant.nom.toLowerCase().indexOf(filterValue) === 0);
  }
}
