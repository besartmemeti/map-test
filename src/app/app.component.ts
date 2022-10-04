import { Component } from '@angular/core';

import {
  SbbUIOptions,
  SbbInteractionOptions,
  SbbStyleOptions
} from '@sbb-esta/journey-maps/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'map-test';

  styleOptions: SbbStyleOptions = {
    brightId: 'base_bright_v2_ki_eboard'
  }

  uiOptions: SbbUIOptions = {
    showSmallButtons: false,
    levelSwitch: false,
    zoomControls: false,
    basemapSwitch: false,
    homeButton: false,
  };

  interactionOptions: SbbInteractionOptions = {
    disableInteractions: true,
  };
}
