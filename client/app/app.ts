import { Component } from '@angular/core';
import {DropDownlist} from './customControls/dropdownlist'


@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './templates/app.tpl.html',
  directives :[DropDownlist]
})
export class AppComponent {
  title = 'Tour of Heroes';
  myHero = 'Windstofffrm';
  pagetitle = 'Fuck all this shit';
}
