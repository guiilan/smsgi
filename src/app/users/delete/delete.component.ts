import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  id: string;
  user: User;

  constructor(
    private userService: UserService, 
    private route: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.userService.getUser(this.id).subscribe(res => {
      this.user = res.data;
    })
  }

  delete() {
    this.userService.deleteUser(this.id).subscribe(res => {
      alert("Removido")
    })
  }

}
