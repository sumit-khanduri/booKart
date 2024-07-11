import { Component } from '@angular/core';
import {HeaderNavComponent} from "../header-nav/header-nav.component";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderNavComponent, MatButtonModule, MatInputModule, MatFormFieldModule, MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
