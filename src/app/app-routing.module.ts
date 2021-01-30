import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SessionsComponent } from './sessions/sessions.component';
import { DashboardComponent } from './DashBoard/dashboard.component';
import { ParticipantsComponent } from './Part/participants.component';
import { FormateursComponent } from './Forma/formateurs.component';
import { RechercherComponent } from './rechercher/rechercher.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'sessions', component: SessionsComponent },
  { path: 'formateurs', component: FormateursComponent },
  { path: 'participants', component: ParticipantsComponent },
  { path: 'rechercher_session', component: RechercherComponent}

];

@NgModule({

  imports: [RouterModule.forRoot(routes, {enableTracing: true}),
  RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
