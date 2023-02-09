import { Component, OnInit } from '@angular/core';
import { TextsService } from 'src/app/services/texts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public textsService: TextsService) { }

  ngOnInit(): void {
  }

}
