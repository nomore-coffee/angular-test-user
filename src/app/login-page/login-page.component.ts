import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public loginForm !:FormGroup
  constructor(private formbuilder : FormBuilder , private http:HttpClient , private router:Router) { }
  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      emailid:[''],
      password:['']
  })
  }
  login(){
    this.http.post<any>("http://localhost:8000/user/login", this.loginForm.value).subscribe(res=>{
      if(res.statusCode==200){
        alert("Login successfull");
        this.loginForm.reset();
        this.router.navigate(['user-list'])
      }else{
        alert("Chek Cred!!");
      }
    },err=>{
      alert("SOmething went worng")
    })
  }
}
