import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RestapiService } from '../restapi.service.spec';

@Component({
  selector: 'app-country-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
   templateUrl: './home.component.html',   
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  name = '';
  region = '';
  capital = '';

  countries: any[] = [];
  searched = false;
  selected: any = null;

  constructor(private api: RestapiService) {}

  search() {
      if (
    !this.name.trim() &&
    !this.region.trim() &&
    !this.capital.trim()
  ) {
    alert("Enter at least one field");
    return;
  }
    this.countries = [];
    this.selected = null;

    if (this.name) {
      this.api.getByName(this.name).subscribe(res => {
        this.countries = res;
        this.searched = true;
      });
    }
    else if (this.region) {
      this.api.getByRegion(this.region).subscribe(res => {
        this.countries = res;
        this.searched = true;
      });
    }
    else if (this.capital) {
      this.api.getByCapital(this.capital).subscribe(res => {
        this.countries = res;
        this.searched = true;
      });
    }
    else {
      this.searched = true;
    }
  }

  open(c: any) {
    this.selected = c;
  }

  reset() {
    this.name = '';
    this.region = '';
    this.capital = '';
    this.countries = [];
    this.selected = null;
    this.searched = false;
  }
  getLanguages(languages: any): string {
  return languages ? Object.values(languages).join(', ') : 'N/A';
}

}
