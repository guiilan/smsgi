import { Component, OnInit } from '@angular/core';
import { Create, ResCreate } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  request: Create = {
    name: " ",
    job: " "
  }

  response: ResCreate

  constructor(private userService: UserService) { }

  ngOnInit(): void {

  }
  
  saved(){
    this.userService.createSingleUser(this.request).subscribe(res => {
      this.response = res;
    });
  }
  

}
