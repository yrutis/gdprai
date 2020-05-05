import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.scss']
})
export class AnimationsComponent implements OnInit, OnChanges {

  @Input()
  applicationType: string;

  @Input()
  registrationType: string;

  @Input()
  sellingDataType: string;

  image: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
  }

  setImageName() {
    const name = `assets/animations/${this.applicationType}_${this.registrationType}_${this.sellingDataType}.gif`;
    this.image = this.sanitizer.bypassSecurityTrustResourceUrl(name);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setImageName();
  }

}
