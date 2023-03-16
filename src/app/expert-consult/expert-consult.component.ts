import { Component, OnInit } from '@angular/core';
import { MOCK_DATA } from '../mockdata/data';
import { MOCK_EXPERTS } from '../mockdata/experts';
import { Expert } from '../model/Expert';

@Component({
  selector: 'app-expert-consult',
  templateUrl: './expert-consult.component.html',
  styleUrls: ['./expert-consult.component.css']
})
export class ExpertConsultComponent implements OnInit {

  mockData = MOCK_DATA;
  countrys: string[] = ['SelectCountry'];
  states: string[] = ['Select State'];
  citys: string[] = ['Select City'];
  selectedCountry: string = '';
  selectedState: string = '';
  selectedCity: string = '';


  mockExperts = MOCK_EXPERTS;
  listOfSelectedExperts: Expert[] = [];

  constructor() {
    for (const e of this.mockData) {
      this.countrys.push(e.name)
    }
    this.selectedCountry = this.countrys[0];
    this.selectedCity = this.citys[0];
    this.selectedState = this.states[0];
  }

  ngOnInit(): void {
  }

  countrySelect() {
    let filteredCountry = this.mockData.filter(country => country.name == this.selectedCountry);
    this.states = filteredCountry[0].states.map(state => state.name);
    this.citys = []
  }

  stateSelect() {
    let filteredState = this.mockData.filter(country => country.name == this.selectedCountry)[0].states.filter(state => state.name == this.selectedState);
    this.citys = filteredState[0].city;
  }

  citySelect() {
  }

  submit() {
    this.listOfSelectedExperts = this.mockExperts.filter(expert => this.filterExperts(expert));
    console.log(this.listOfSelectedExperts)
  }

  filterExperts(expert: Expert): boolean {
    return (expert.country.toLowerCase() == this.selectedCountry.toLowerCase() && expert.city.toLowerCase() == this.selectedCity.toLowerCase() && expert.state.toLowerCase() == this.selectedState.toLowerCase());
  }

}
