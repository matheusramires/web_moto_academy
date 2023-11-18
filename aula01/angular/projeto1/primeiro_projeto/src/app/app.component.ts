import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
//  standalone: true,
//  imports: [CommonModule, RouterOutlet, HeroesComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primeiro_projeto';
  helloWorld = 'Olá Mundo';
}
