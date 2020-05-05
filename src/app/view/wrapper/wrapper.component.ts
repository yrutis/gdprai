import {Component, OnDestroy, OnInit} from '@angular/core';
import {StateService} from '../../service/state.service';
import {Subject} from 'rxjs';
import {take, takeUntil} from 'rxjs/operators';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit, OnDestroy {

  currentPhoneScreen = 'login';
  applicationType = 'online';
  registrationType = 'withRegistration';
  sellingDataType = 'sellingData';
  contentFidelity = 'hifi';

  settingsGroup: FormGroup;
  settingsVisible = true;
  private componentDestroyed$ = new Subject<void>();

  constructor(private stateService: StateService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.settingsGroup = this.fb.group({
      type: ['online'],
      registration: ['withRegistration'],
      sellData: ['sellingData'],
      contentFidelity: ['hifi']
    });

    this.settingsGroup.get('type').valueChanges.pipe(takeUntil(this.componentDestroyed$)).subscribe(value => {
      if (value === 'offline') {
        this.settingsGroup.get('registration').setValue('withoutRegistration');
        this.settingsGroup.get('sellData').setValue('notSellingData');
      }
    });


    this.stateService.phoneScreen$.pipe(takeUntil(this.componentDestroyed$))
      .subscribe(value => {
        console.log(value);
        this.currentPhoneScreen = value;
      });
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }


  showSettings() {
    this.settingsVisible = !this.settingsVisible;
  }

  applySettings() {
    this.applicationType = this.settingsGroup.get('type').value;
    this.registrationType = this.settingsGroup.get('registration').value;
    this.sellingDataType = this.settingsGroup.get('sellData').value;
    this.contentFidelity = this.settingsGroup.get('contentFidelity').value;
    this.settingsVisible = false;

  }
}
