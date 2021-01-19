import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LayoutsModule } from './layouts';
import { CommonLayoutComponent } from './layouts/common-layout';
import { ComponentsComponent } from './pages/components';
import { DashboardComponent } from './pages/dashboard';
import { FormsComponent } from './pages/forms';
import { VehiculoComponent } from './pages/vehiculo/vehiculo.component';

// @ts-ignore
// @ts-ignore
// @ts-ignore
@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        { path: '', redirectTo: 'app/dashboard', pathMatch: 'full' },
        { path: 'app', component: CommonLayoutComponent, children: [
          { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
          { path: 'forms', component: FormsComponent, pathMatch: 'full' },
          { path: 'components', component: ComponentsComponent, pathMatch: 'full' },
          { path: '**', redirectTo: '/ypages/404' },
          { path: 'vehiculo', component: VehiculoComponent, pathMatch: 'full' },
        ] }, // add 'canActivate: AuthGuard' for catching unauth users
        { path: 'ui', loadChildren: () => import('./pages/ui/ui.module').then(m => m.UIModule) },
        { path: 'pages', loadChildren: () => import('./pages/pages/pages.module').then(m => m.PagesModule) },
        { path: '**', redirectTo: '/pages/404' },
        
      ],
      { useHash: true },
    ),
    LayoutsModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
