import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../../../../core/services/auth.service';
import {CurrentUserService} from '../../../../core/services/current-user.service';
import {switchMap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

interface LoginForm {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  @ViewChild('form', {read: NgForm, static: false}) form!: NgForm;

  constructor(
    private authService: AuthService,
    private currentUserService: CurrentUserService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  handleLoginSubmit(value: LoginForm) {
    this.authService.login({
      username: value.username,
      password: value.password
    }).pipe(
      switchMap(() =>
        this.authService.loadProfile()
      )).subscribe(profile => {
        this.currentUserService.user$.next(profile);
        this.router.navigateByUrl('/');
      },
      error => {
        this.form.control.setErrors({
          server: true
        });
        this.form.controls.username.setErrors({
          server: true
        });
        this.form.controls.password.setErrors({
          server: true
        });

      }
    );
  }
}
