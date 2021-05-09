import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Participant } from '../model/Participant';
import { ParticipantService } from '../service/participant.service';



export interface DialogData {
  animal: string;
  participants: Participant[];
}

@Component({
  selector: 'app-dialog-participant-session',
  templateUrl: './dialog-participant-session.component.html',
  styleUrls: ['./dialog-participant-session.component.css']
})
export class DialogParticipantSessionComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogParticipantSessionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }


}
