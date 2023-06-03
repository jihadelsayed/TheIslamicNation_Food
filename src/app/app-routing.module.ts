import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { homeRoutes } from './pages/home/home-routing.module';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes), // home routes
    RouterModule.forRoot(routes, {
      relativeLinkResolution: 'legacy',
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
