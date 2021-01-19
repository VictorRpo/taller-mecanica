import { Component, Input } from '@angular/core';

import { SidebarComponent as BaseSidebarComponent } from 'theme/components/sidebar';

@Component({
  selector: 'app-sidebar',
  styleUrls: ['../../../theme/components/sidebar/sidebar.component.scss', './sidebar.component.scss'],
  templateUrl: '../../../theme/components/sidebar/sidebar.component.html',
})
export class SidebarComponent extends BaseSidebarComponent {
  public title = 'RAISE';
  public menu = [
    { name: 'Inicio', link: '/app/dashboard', icon: 'dashboard' },
    { name: 'Vehículos', link: '/app/pages/vehiculo', icon: 'pages' },
    { name: 'Propietarios', link: '/app/pages/propietario', icon: 'pages' },
    { name: 'Detalle De Reparación', link: '/app/pages/detalleReparacion', icon: 'pages' },
    { name: 'Usuarios', link: '/app/forms', icon: 'person' },
    {
      name: 'UI',
      children: [
        ...[
          'buttons',
          'cards',
          'colors',
          'forms',
          'icons',
          'typography',
          'tables',
        ].map(ui => ({
          name: ui[0].toUpperCase() + ui.slice(1),
          link: `/ui/${ui}`,
        })),
        {
          name: 'Right sidebar',
          link: '/ui/right-sidebar',
        },
      ],
      icon: 'view_comfy',
    },
    { name: 'Components', link: '/app/components', icon: 'developer_board' },
    {
      name: 'Pages', children: [
      { name: 'Sign in', link: '/pages/login' },
      { name: 'Sign up', link: '/pages/sign-up' },
      { name: 'Forgot password', link: '/pages/forgot-password' },
      { name: '404', link: '/pages/error' },
      ],
      icon: 'pages',
    },
  ];
}
