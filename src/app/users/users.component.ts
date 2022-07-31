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

    this.activatedRoute.params.subscribe((urlParam: Params) => {
      this.user = {
        id: urlParam['id'],
        name: urlParam['name'],
      };
    });

    this.activatedRoute.queryParams.subscribe((urlParams: any) => {
      console.log(urlParams);
    })
    // console.log(this.activatedRoute.snapshot.queryParams);
    // console.log(this.activatedRoute.snapshot.fragment);

    this.activatedRoute.fragment.subscribe((urlFragments: any) => console.log(urlFragments))
  }

  ngOnInit(): void {}

  onGotoCategories() {
    this.router.navigateByUrl('/categories');
  }

  onGetAnotherUserDetails() {
    this.router.navigate(['/users', 2, 'Another User'], {
      queryParams: { page: 2, search: 'another user' },
      fragment: "loading"
    });
  }
}
