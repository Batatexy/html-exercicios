import { Component } from '@angular/core';
import { NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { SideNavComponent } from '../../components/side-nav/side-nav.component';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, SideNavComponent, HeaderComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
