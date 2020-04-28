import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {StateService} from '../../service/state.service';
import {Page} from '../../model/model';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-aspects',
  templateUrl: './aspects.component.html',
  styleUrls: ['./aspects.component.scss']
})
export class AspectsComponent implements OnInit, OnDestroy, OnChanges {

  @Input()
  title: string;

  @Input()
  type: string;

  @Input()
  applicationType: string;

  @Input()
  registrationType: string;

  @Input()
  sellingDataType: string;

  @Input()
  contentFidelity: string;


  page: Page;
  private componentDestroyed$ = new Subject<void>();

  constructor(private stateService: StateService) {
  }


  ngOnInit(): void {
    this.loadData();
  }

  private loadData() {
    this.stateService.getJSON(this.type, this.applicationType, this.registrationType, this.sellingDataType).pipe(takeUntil(this.componentDestroyed$)).subscribe(value => {
      this.page = value;
      console.log(this.page);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.loadData();
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }

}
