import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserApp } from 'src/app/models/user';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public user: UserApp | undefined;
  public ediUsuario: UserApp | undefined;

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.getUser();
  }

  public getUser():void {
    this.headerService.getUser().subscribe({
      next: (response: UserApp) => {
        this.user = response;
      },
      error:(error:HttpErrorResponse) => {
        alert(error.message)
      }
    })
  }

}
