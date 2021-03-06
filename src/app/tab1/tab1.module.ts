import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {
   slideOpts={
    initialSlide:1,
    slidePerView:2,
    freemode:true,
    speed:400,
    coverflowEffect:{
      rotate:50,
      stretch:0,
      depth:100,
      modifier:1,
      slideShadows:true
    }
  }
  slidepostsOpts={
    initialSlide:1,
    speed:400,
    slidesPerView:2,
    freeMode:true,
    coverflowEffect:{
      rotate:50,
      stretch:0,
      depth:100,
      modifier:1,
      slideShadows:true
    }
    }
  
  constructor(){

  };
}
