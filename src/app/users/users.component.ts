import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  
  user: { id: string; name: string };

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.user = {
      id: this.activatedRoute.snapshot.params["id"],
      name: this.activatedRoute.snapshot.params["name"]
    };
  }

  ngOnInit(): void {}

  onGotoCategories() {
    // this.router.navigate(["/categories"]); // it receives a second parameter
    this.router.navigateByUrl('/categories');
  }
}
