import { Component, OnInit, Input } from '@angular/core';
import { RegistrationServiceService } from './registration-service.service';
import { User } from './User'
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.sass'],
  providers:[RegistrationServiceService]
})
export class RegistrationComponent implements OnInit {

  constructor(private _registrationService: RegistrationServiceService,private router: Router) { }
  @Input() user: User;
  responseStatus:Object= [];
  status:boolean ;
 
  public location = '' ;
  ngOnInit() {
    this.user = new User();
  }

  register()
  {
        this._registrationService.registerUser(this.user).subscribe(
           data => { console.log(this.responseStatus = data)
             this.router.navigate(["/thankyou"]);
             }
           ,
           err => console.log(err),
           () => console.log('Request Completed')
        ); 
        
        this.status = true; 
  }
}