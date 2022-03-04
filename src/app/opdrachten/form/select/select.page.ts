import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.page.html',
  styleUrls: ['./select.page.scss'],
})
export class SelectPage implements OnInit {
  countries = [
    {
      name: 'Netherlands',
      cities: ['Groningen', 'Amsterdam', 'Utrecht'],
    },
    {
      name: 'Germany',
      cities: ['Brlien', 'Hamburg'],
    },
    {
      name: 'Syrie',
      cities: ['Swida', 'Edleb'],
    },
  ];
  language: string;
  experiences: string;
  users: any[];
  selectedCountry;
  selectCity;
  getCities: string[];

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }
  getLangugeFromSelect() {
    console.log(this.language);
  }
  selectOptionDataUsingEvent($ev) {
    console.log($ev.detail.value);
  }
  selectUser($ev) {
    const user = this.users[$ev.detail.value];
    const address = user.address.street;
    console.log(address);
  }
  selectContries($ev) {
    const country = this.countries[$ev.detail.value];
    this.getCities = country.cities;
    this.selectedCountry = country.name;
  }
  // selectCity($ev) {
  //   const city = this.getCities[$ev.detail.value];
  //   console.log(city);
  // }
  saveAddres() {
    console.log('The selected Country is: ', this.selectedCountry);
    console.log('The selected  City is', this.selectCity);
  }
}
