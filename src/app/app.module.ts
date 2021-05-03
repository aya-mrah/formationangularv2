import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { ProfileComponent } from './profile/profile.component';
import { authInterceptorProviders } from './_helpers/auth.service';
import { DomaineListeComponent } from './domaine/domaine-liste/domaine-liste.component';
import { DomaineAddComponent } from './domaine/domaine-add/domaine-add.component';
import { DomaineUpdateComponent } from './domaine/domaine-update/domaine-update.component';
import { DomaineDetailsComponent } from './domaine/domaine-details/domaine-details.component';
//*---------

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCardModule} from '@angular/material/card'
import {MatChipsModule} from '@angular/material/chips'

import { MatTableModule } from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIcon,MatIconModule} from '@angular/material/icon'

import {A11yModule} from '@angular/cdk/a11y';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {OverlayModule} from '@angular/cdk/overlay';

//------


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


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    DomaineListeComponent,
    DomaineAddComponent,
    DomaineUpdateComponent,
    DomaineDetailsComponent,
    OrganismeUpdateComponent,
    OrganismeListeComponent,
    OrganismeAddComponent,
    OrganismeDetailsComponent,
    PaysListeComponent,
    PaysAddComponent,
    PaysUpdateComponent,
    PaysDetailsComponent,
    UserListeComponent,
    UserAddComponent,
    UserUpdateComponent,
    UserDetailsComponent,
    ProfilDetailsComponent,
    ProfilListeComponent,
    ProfilUpdateComponent,
    ProfilAddComponent,
    FormateurListeComponent,
    FormateurAddComponent,
    FormateurUpdateComponent,
    FormateurDetailsComponent,
    FormationListeComponent,
    FormationAddComponent,
    FormationUpdateComponent,
    FormationDetailsComponent,
    ParticipantListeComponent,
    ParticipantAddComponent,
    ParticipantDetailsComponent,
    ParticipantUpdateComponent,
    SessionListeComponent,
    SessionAddComponent,
    SessionUpdateComponent,
    SessionDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatIconModule,
    BrowserAnimationsModule,
    A11yModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    PortalModule,
    ScrollingModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
