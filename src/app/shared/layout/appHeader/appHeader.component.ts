import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthenticatedUser } from '../../../core/models/AuthenticatedUser';
import { AppHeaderService } from '../../../core/services/appHeader.service';


@Component({
  selector: 'app-header',
  templateUrl: './appHeader.component.html',
  styleUrls: ['./appHeader.component.scss'],
})
export class AppHeaderComponent implements OnInit, OnDestroy {
  public authenticatedUser: AuthenticatedUser;
  public pageTitle: string;

  constructor(
    private appHeaderService: AppHeaderService,
  ) {
    this.authenticatedUser = new AuthenticatedUser();
  }

  public ngOnInit(): void {
    this.authenticatedUser = {
      userId: 1,
      login: 'test_login',
      firstName: 'Firstname',
      lastName: 'Lastname',
      email: 'test@email.com'
    };

    this.appHeaderService.pageTitleSubscriber
      .subscribe(title => {
        this.pageTitle = title;
      });
  }

  public ngOnDestroy(): void {
  }
}
