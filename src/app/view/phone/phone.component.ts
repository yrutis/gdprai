import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {StateService} from '../../service/state.service';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent implements OnInit {

  screenId = 1;

  single = [
    {
      name: '',
      value: 95
    },
    {
      name: '',
      value: 5
    }
  ];
  view: any[] = [500, 400];
  total = 100;
  label = 'Tonsillitis';

  colorScheme = {
    domain: ['#ff0000']
  };


  // @Output()
  // screenChanges = new EventEmitter<number>();

  constructor(private stateService: StateService) {}

  ngOnInit(): void {
  }

  changeScreen(screenId: number){
    this.screenId = screenId;
    // this.screenChanges.emit(this.screenId);
    this.stateService.setPhoneScreen(screenId);
  }

}
