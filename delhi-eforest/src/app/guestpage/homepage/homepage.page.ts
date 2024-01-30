import { Component, OnInit, AfterViewInit, ViewChild, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SwiperOptions } from 'swiper/types';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';
import {Swiper} from 'swiper'
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
  standalone:true,
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports:[IonicModule,CommonModule],
})

 export class HomepagePage implements AfterViewInit{
  swiper_images=['../../../../assets/img/tree.jpg','../../../../assets/img/image1.jpg','../../../../assets/img/tree2.jpg']
  ngAfterViewInit(): void {
      register();
  }
 }



