import { Injectable } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from "@angular/material/icon";

@Injectable({
  providedIn: 'root'
})
export class IconsRegistryService {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {}

  init() {
    this.matIconRegistry.addSvgIcon(
      `homebrew`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/_img/_icons/anvil-impact.svg")
    );
    this.matIconRegistry.addSvgIcon( 
      `ball`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/_img/_icons/american-football-ball.svg")
    );
    this.matIconRegistry.addSvgIcon(
      `helmet`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/_img/_icons/american-football-helmet.svg")
    );
    this.matIconRegistry.addSvgIcon(
      `danger`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/_img/_icons/biohazard.svg")
    );
    this.matIconRegistry.addSvgIcon(
      `hands`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/_img/_icons/gloves.svg")
    );
    this.matIconRegistry.addSvgIcon(
      `podium`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/_img/_icons/podium.svg")
    );
    this.matIconRegistry.addSvgIcon(
      `team`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/_img/_icons/three-friends.svg")
    );
    this.matIconRegistry.addSvgIcon(
      `oficial`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/_img/_icons/tied-scroll.svg")
    );
    this.matIconRegistry.addSvgIcon(
      `trophy`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/_img/_icons/trophy-cup.svg")
    );
    this.matIconRegistry.addSvgIcon(
      `whistle`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/_img/_icons/whistle.svg")
    );
  }
}
