import { Component, OnInit } from '@angular/core';
import { CachupinService } from 'src/app/services/cachupin.service';
import {Article} from '../../interfaces/interfaces';

@Component({
  selector: 'app-cachupin',
  templateUrl: './cachupin.page.html',
  styleUrls: ['./cachupin.page.scss'],
})
export class CachupinPage implements OnInit {
  cachupin: Article[] = []

  constructor(private cachupinService: CachupinService) { }

  ngOnInit() {
    this.cachupinService.getTopHeadLines().subscribe(resp=>{
      console.log('cachupin', resp);
      this.cachupin.push(...resp.articles);
    });
  }

}
