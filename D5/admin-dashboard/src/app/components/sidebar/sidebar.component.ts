import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-sidebar',
  imports: [RouterOutlet, FooterComponent, RouterLink, RouterLinkActive, UserComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
