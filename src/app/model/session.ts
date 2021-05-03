import { Formation } from 'src/app/model/Formation';
import { Formateur } from 'src/app/model/formateur';
import { Participant } from 'src/app/model/Participant';
import { Organisme } from 'src/app/model/organisme';
export class Session {

  id: number;
  date_deb: Date;
  date_fin: Date;
  nbparticipant: number;
  lieu: string;

  formation: Formation;
  organisme: Organisme;
  formateur: Formateur;
}
