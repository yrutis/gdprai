import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {StateService} from '../../service/state.service';
import {Page, Paragraph} from '../../model/model';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {Title} from '@angular/platform-browser';
import {HighlightService} from '../../service/highlight.service';

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

  highlightIds: number[] = [];


  page: Page;
  private componentDestroyed$ = new Subject<void>();

  constructor(private stateService: StateService, private highlightService: HighlightService) {
  }


  ngOnInit(): void {
    switch (this.type) {
      case 'law':
        this.highlightService.highlightLaw$.pipe(takeUntil(this.componentDestroyed$)).subscribe(value => {
          this.highlightIds = value;
        });
        break;
      case 'it':
        this.highlightService.highlightIt$.pipe(takeUntil(this.componentDestroyed$)).subscribe(value => {
          this.highlightIds = value;
        });
        break;
      case 'economy':
        this.highlightService.highlightEconomy$.pipe(takeUntil(this.componentDestroyed$)).subscribe(value => {
          this.highlightIds = value;
        });
        break;
    }
    this.loadData();
  }

  private loadData() {
    this.stateService.getJSON(this.type, this.applicationType, this.registrationType, this.sellingDataType)
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe(value => {
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

  highlight(p: Paragraph) {
    this.highlightService.highlightInLaw(p.highlightLaw);
    this.highlightService.highlightInIt(p.highlightIT);
    this.highlightService.highlightInEconomy(p.highlightEconomy);
    this.highlightService.highlightInApp(p.highlightApp);
  }

  unhighlight() {
    this.highlightService.highlightInLaw([]);
    this.highlightService.highlightInIt([]);
    this.highlightService.highlightInEconomy([]);
    this.highlightService.highlightInApp([]);
  }
}
