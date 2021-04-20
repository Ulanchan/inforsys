import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CrudService } from 'src/app/service/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, public crudserv: CrudService, private router: Router) { }

  ngOnInit(): void {
    // this.checkLogin();
  }
  menu = [
    {
      name: 'Artikel',
      icon: 'post_add',
      url: '/admin/artikel'
    },
    {
      name: 'Pesan',
      icon: 'forum',
      url: '/admin/pesanc'
    },
  ];
}
