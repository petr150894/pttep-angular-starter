import { Component, OnInit } from '@angular/core';
import { AppHeaderService } from 'src/app/core/services/appHeader.service';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  private pageTitle = 'Home page';

  constructor(
    private appHeaderService: AppHeaderService,
  ){}

  public ngOnInit(): void {
    this.appHeaderService.setPageTitle(this.pageTitle);
  }
}
