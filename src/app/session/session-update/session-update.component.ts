import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {Session} from "src/app/model/session";
import {ActivatedRoute, Router} from "@angular/router";
import {SessionService} from "src/app/service/session.service";
import {Formation} from "src/app/model/Formation";
import {Organisme} from "src/app/model/organisme";
import {Formateur} from "src/app/model/formateur";
import {FormationService} from "src/app/service/formation.service";
import {OrganismeService} from "src/app/service/organisme.service";
import {FormateurService} from "src/app/service/formateur.service";
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { Participant } from 'src/app/model/Participant';
import { ParticipantService } from 'src/app/service/participant.service';
import { map } from 'rxjs/operators';
import { MatChipInputEvent } from '@angular/material/chips';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-session-update',
  templateUrl: './session-update.component.html',
  styleUrls: ['./session-update.component.css']
})
export class SessionUpdateComponent implements OnInit {

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
  submitted = false;

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

@ViewChild('participantInput')
participantInput!: ElementRef<HTMLInputElement>;
@ViewChild('auto') matAutocomplete: MatAutocomplete | undefined;




//



 id: number;
  session: Session;

  formations: any;

  organismes: any;

  formateurs: any;

  constructor(private route: ActivatedRoute,private router: Router,
              private sessionService: SessionService,
              private formationService: FormationService,
              private organismeService: OrganismeService,
              private participantService: ParticipantService,
              private formateurService: FormateurService) {
                let resp = this.participantService.getParticipantsList()
       resp.subscribe(report =>this.allParticipants = report as Participant[])

                this.filteredParticipants = this.pariticpantCtrl.valueChanges.pipe(
                  map((participant: Participant | null) => participant ? this._filter(participant) : this.allParticipants.slice()));


               }

  ngOnInit(): void {
    this.session = new Session();

    this.id = this.route.snapshot.params['id'];

    this.sessionService.getSession(this.id)
      .subscribe(data => {
        console.log(data)
        this.session = data;
        this.participants = this.session.participants
      }, error => console.log(error));

      this.participants = this.session.participants

    this.organismeService.getOrganismesList().subscribe(data => {
      this.organismes = data;
    });


    this.formateurService.getFormateursList().subscribe(data => {
      this.formateurs = data;
    });

    this.formationService.getFormationsList().subscribe(data => {
      this.formations = data;
    });

  }


  parseDate(dateString: string): Date {
    if (dateString) {
      return new Date(dateString);
    }
    return null;
  }

  updateSession() {
    this.sessionService.updateSession(this.id, this.session)
      .subscribe(data => {
        console.log(data);
        this.session = new Session();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.isValidFormSubmitted = true;
    this.updateSession();
  }
    onReset() {
                       this.submitted = false;
                       this.sessionForm.reset();
                   }

  gotoList() {
    this.router.navigate(['/sessionliste']);

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
