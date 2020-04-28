import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent implements OnInit {
  single = [
    {
      "name": "Tonsillitis",
      "value": 95
    }
  ];
  view: any[] = [500, 400];
  total: number = 100
  label: string = 'Tonsillitis'

  colorScheme = {
    domain: ['#ff0000']
  };



  ngOnInit(): void {
  }

}
