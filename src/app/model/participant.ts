import { Profil } from 'src/app/model/profil';
import { Pays } from 'src/app/model/pays';
import {Organisme} from "src/app/model/organisme";

export class Participant {

id: number;
nom: string;
prenom: string;
tel: number;
mail: string;
profil: Profil;
pays: Pays;
organisme: Organisme;
type:string
}
