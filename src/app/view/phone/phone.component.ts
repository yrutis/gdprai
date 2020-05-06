import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {StateService} from '../../service/state.service';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent implements OnInit, OnChanges {

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
  displayAgb = false;
  qrScanned = false;
  qrScanning = false;


  constructor(private stateService: StateService) {
  }

  ngOnInit(): void {
    this.init();
  }

  private init() {
    if (this.registrationType === 'withoutRegistration') {
      this.screenId = 'upload';
      this.resetPage = 'upload';
    } else {
      this.screenId = 'login';
      this.resetPage = 'login';
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
    this.qrScanned = false;
  }

  scanQr() {
    this.qrScanning = true;
    this.qrScanned = false;
    const int = setInterval(() => {
      this.qrScanning = false;
      this.qrScanned = true;
      clearInterval(int);
    }, 1500);
  }

  startAnalyzing() {
    this.isAnalyzing = true;
    const int = setInterval(() => {
      this.isAnalyzing = false;
      this.screenId = 'result';
      clearInterval(int);
    }, 2000);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.init();
  }
}
