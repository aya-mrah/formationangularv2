import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';

import { DomaineListeComponent } from './domaine/domaine-liste/domaine-liste.component';
import { DomaineAddComponent } from './domaine/domaine-add/domaine-add.component';
import { DomaineUpdateComponent } from './domaine/domaine-update/domaine-update.component';
import { DomaineDetailsComponent } from './domaine/domaine-details/domaine-details.component';

import { OrganismeUpdateComponent } from './organisme/organisme-update/organisme-update.component';
import { OrganismeListeComponent } from './organisme/organisme-liste/organisme-liste.component';
import { OrganismeAddComponent } from './organisme/organisme-add/organisme-add.component';
import { OrganismeDetailsComponent } from './organisme/organisme-details/organisme-details.component';

import { PaysListeComponent } from './pays/pays-liste/pays-liste.component';
import { PaysAddComponent } from './pays/pays-add/pays-add.component';
import { PaysUpdateComponent } from './pays/pays-update/pays-update.component';
import { PaysDetailsComponent } from './pays/pays-details/pays-details.component';

import { UserListeComponent } from './user/user-liste/user-liste.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { UserUpdateComponent } from './user/user-update/user-update.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';

import { ProfilDetailsComponent } from './profil/profil-details/profil-details.component';
import { ProfilListeComponent } from './profil/profil-liste/profil-liste.component';
import { ProfilUpdateComponent } from './profil/profil-update/profil-update.component';
import { ProfilAddComponent } from './profil/profil-add/profil-add.component';

import { FormateurListeComponent } from './formateur/formateur-liste/formateur-liste.component';
import { FormateurAddComponent } from './formateur/formateur-add/formateur-add.component';
import { FormateurUpdateComponent } from './formateur/formateur-update/formateur-update.component';
import { FormateurDetailsComponent } from './formateur/formateur-details/formateur-details.component';

import { FormationListeComponent } from './formation/formation-liste/formation-liste.component';
import { FormationAddComponent } from './formation/formation-add/formation-add.component';
import { FormationUpdateComponent } from './formation/formation-update/formation-update.component';
import { FormationDetailsComponent } from './formation/formation-details/formation-details.component';

import { ParticipantListeComponent } from './participant/participant-liste/participant-liste.component';
import { ParticipantAddComponent } from './participant/participant-add/participant-add.component';
import { ParticipantDetailsComponent } from './participant/participant-details/participant-details.component';
import { ParticipantUpdateComponent } from './participant/participant-update/participant-update.component';


import { SessionListeComponent } from './session/session-liste/session-liste.component';
import { SessionAddComponent } from './session/session-add/session-add.component';
import { SessionUpdateComponent } from './session/session-update/session-update.component';
import { SessionDetailsComponent } from './session/session-details/session-details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'domaineliste', component: DomaineListeComponent },
  { path: 'domaine/:id', component: DomaineDetailsComponent },
  { path: 'adddomaine', component: DomaineAddComponent },
  { path: 'updateDomaine/:id', component: DomaineUpdateComponent },

  { path: 'organismeliste', component: OrganismeListeComponent },
  { path: 'organisme/:id', component: OrganismeDetailsComponent },
  { path: 'addorganisme', component: OrganismeAddComponent },
  { path: 'updateorganisme/:id', component: OrganismeUpdateComponent },

  { path: 'paysliste', component: PaysListeComponent },
  { path: 'pays/:id', component: PaysDetailsComponent },
  { path: 'addpays', component: PaysAddComponent },
  { path: 'updatepays/:id', component: PaysUpdateComponent },

  { path: 'userliste', component: UserListeComponent },
  { path: 'user/:id', component: UserDetailsComponent },
  { path: 'addUser', component: UserAddComponent },
  { path: 'updateuser/:id', component: UserUpdateComponent },

  { path: 'profileliste', component: ProfilListeComponent },
  { path: 'profile/:id', component: ProfilDetailsComponent },
  { path: 'addprofile', component: ProfilAddComponent },
  { path: 'updateprofile/:id', component: ProfilUpdateComponent },

  { path: 'formateurliste', component: FormateurListeComponent },
  { path: 'formateur/:id', component: FormateurDetailsComponent },
  { path: 'addformateur', component: FormateurAddComponent },
  { path: 'updateformateur/:id', component: FormateurUpdateComponent },

  { path: 'formationliste', component: FormationListeComponent },
  { path: 'formation/:id', component: FormationDetailsComponent },
  { path: 'addformation', component: FormationAddComponent },
  { path: 'updateformation/:id', component: FormationUpdateComponent },

  { path: 'participantliste', component: ParticipantListeComponent },
  { path: 'participant/:id', component: ParticipantDetailsComponent },
  { path: 'addparticipant', component: ParticipantAddComponent },
  { path: 'updateparticipant/:id', component: ParticipantUpdateComponent },

  { path: 'sessionliste', component: SessionListeComponent },
  { path: 'session/:id', component: SessionDetailsComponent },
  { path: 'addsession', component: SessionAddComponent },
  { path: 'updatesession/:id', component: SessionUpdateComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


