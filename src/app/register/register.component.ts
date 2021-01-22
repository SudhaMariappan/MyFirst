import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public userDetails!:FormGroup;
  public listAddress!:FormArray;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.userDetails=this.fb.group({
      name:['',[Validators.required]],
      email:['',[Validators.email]],
      password:['',[Validators.required]],
      areacode:[''],
      mobile:[''],
      listAddress:this.fb.array([this.getAddress(0)])
      })
  }
  getAddress(j:number): FormGroup {
    return this.fb.group({
      addressline:[''],
      country:[''],
      state:[''],
      district:['']
    })
  }
  getControls(){
    return (this.userDetails.get('listAddress') as FormArray).controls;
  }
  addAddress(index:number){
      this.listAddress=this.userDetails.get('listAddress') as FormArray;
      this.listAddress.push(this.getAddress(index));
  }
  onDelete(index: number):void{
    this.listAddress.removeAt(index)
  }
  onSubmit(){
      localStorage.setItem('name',this.userDetails.controls.name.value);
      localStorage.setItem('password',this.userDetails.controls.password.value);
  }

}
