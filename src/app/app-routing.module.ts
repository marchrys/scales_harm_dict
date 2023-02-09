import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { DictComponent } from './pages/dict/dict.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'dict', component: DictComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
