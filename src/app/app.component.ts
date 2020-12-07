import { Component } from '@angular/core';
import { IconsRegistryService } from './_services/icons-registry.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BlitzBowlers';
  
  constructor(
    private iconRegistryService: IconsRegistryService
  ){
    iconRegistryService.init();
  }
}
