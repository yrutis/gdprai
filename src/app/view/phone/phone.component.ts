import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StateService} from '../../service/state.service';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent implements OnInit {

  @Input()
  applicationType: string;

  @Input()
  registrationType: string;

  @Input()
  sellingDataType: string;

  screenId = 'login';
  resetPage = 'login';
  imageUploaded = false;
  isAnalyzing = false;
  displayAgb =  false;


  constructor(private stateService: StateService) {
  }

  ngOnInit(): void {
    if (this.applicationType === 'offline') {
      this.screenId = 'upload';
      this.resetPage = 'upload';
    }
  }

  changeScreen(screenId: string) {
    this.screenId = screenId;
    // this.screenChanges.emit(this.screenId);
    this.stateService.setPhoneScreen(screenId);
  }

  reset() {
    this.screenId = this.resetPage;
    this.imageUploaded = false;
  }

  startAnalyzing() {
    this.isAnalyzing = true;
    const int  = setInterval(() => {
      this.isAnalyzing = false;
      this.screenId = 'result';
      clearInterval(int);
    }, 2000);
  }
}
