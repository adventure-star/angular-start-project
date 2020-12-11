import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  styles: [`
  div {
     margin: 0 auto;
     text-align: center;
     width:200px;
  }
  .rotate {
     width:100px;
     height:100px;
     border:solid 1px red;
  }
`],
  animations: [
    trigger('myanimation', [
      state('smaller', style({
        transform: 'translateY(100px)'
      })),
      state('larger', style({
        transform: 'translateY(0px)'
      })),
      transition('smaller <=> larger', animate('300ms ease-in'))
    ])
  ]
})
export class LoginComponent implements OnInit {

  formdata;
  emailid;

  state: string = "smaller";

  constructor() { }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      emailid: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ])),
      passwd: new FormControl("", this.passwordvalidation)
    });
  }
  passwordvalidation(formcontrol) {
    if (formcontrol.value.length < 5) {
      return { "passwd": true };
    }
  }
  onClickSubmit(data) {
    this.emailid = data.emailid;
    console.log(data);
  }

  animate() {
    this.state = this.state == 'larger' ? 'smaller' : 'larger';
  }

}
