import { Component } from '@angular/core';
import {FaConfig, FaIconLibrary} from "@fortawesome/angular-fontawesome";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {far} from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gdpr-ai-app';

  constructor(library: FaIconLibrary, faConfig: FaConfig) {
    library.addIconPacks(fas, far);
    faConfig.defaultPrefix = 'far';
  }
}
