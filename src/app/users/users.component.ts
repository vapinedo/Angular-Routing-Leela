import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  user: { id: string; name: string };

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.user = {
      id: this.activatedRoute.snapshot.params['id'],
      name: this.activatedRoute.snapshot.params['name'],
    };
    
    this.activatedRoute.params.subscribe((data: Params) => {
      this.user = {
        id: data['id'],
        name: data['name'],
      };
    });
  }

  ngOnInit(): void {}

  onGotoCategories() {
    this.router.navigateByUrl('/categories');
  }
}
