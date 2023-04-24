import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registteration-page',
  templateUrl: './registteration-page.component.html',
  styleUrls: ['./registteration-page.component.css']
})
export class RegistterationPageComponent implements OnInit {
  public registerForm!: FormGroup;
  constructor(private formbuilder: FormBuilder , private http:HttpClient , private router:Router) {}
  ngOnInit(): void {
    this.registerForm = this.formbuilder.group({
      name: [''],
      emailid: [''],
      username: [''],
      address: [''],
      qulification: [''],
      password: [''],
    });  }
    register(){
      this.http.post<any>("http://localhost:8000/user/signup",this.registerForm.value).subscribe(res=>{
        console.log("????????/",this.registerForm.value)
        if(res.statusCode==200){
          alert("Register Successfull");
          this.registerForm.reset();
          this.router.navigate(['login'])
        }else{
          alert("Check Form Properly");
        }
      },err=>{
        alert("SOmething went wrong")
      })
    }
}
