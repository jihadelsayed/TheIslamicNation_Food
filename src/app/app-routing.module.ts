import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { homeRoutes } from './pages/home/home-routing.module';


const routes: Routes = [

];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes), // home routes
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy',useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
