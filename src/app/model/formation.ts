import { Domaine } from 'src/app/model/domaine';
export class Formation {
  id: number;
  titre: string;
  type_formation: string;
  nbSession: number;
  annee:number;
  duree: number;
  budget: number;
  domaine: Domaine;

}
