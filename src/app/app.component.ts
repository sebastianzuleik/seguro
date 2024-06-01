import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Clientes Asegurados', url: '/cliente-list', icon: 'pizza' },
  ];
  public labels = [];
  constructor() {}
}
