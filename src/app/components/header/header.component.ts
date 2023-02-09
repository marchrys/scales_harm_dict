import { Component, OnInit, Input } from '@angular/core';
import { TextsService } from 'src/app/services/texts.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() navbarText: string = '';
  @Input() hasBackArrow: boolean = false;

  constructor(public textsService: TextsService) { }

  ngOnInit(): void {
  }

}
