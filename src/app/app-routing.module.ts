import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomeModule)
  },

  {
    path: 'signin',
    loadChildren: () =>
      import('./signin/signin.module').then((m) => m.SigninModule)
  },
  {
		path: 'signup',
		loadChildren: () =>
			import('./signup/signup.module').then((m) => m.SignupModule)
	},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
