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
  public formGroup!:FormGroup;
  default :boolean = true;
  constructor(private fb:FormBuilder) {
   
   }

  ngOnInit(): void {
    this.userDetails=this.fb.group({
      name:['',[Validators.required]],
      email:['',[Validators.email]],
      password:['',[Validators.required]],
      areacode:[''],
      mobile:[''],
      default:[''],
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
      console.log(this.userDetails.value)
      
      localStorage.setItem('userdetail', JSON.stringify(this.userDetails.value))
      
  }
  onFormSubmit(){
    if(this.default == true){
      this.listAddress;['',Validators.required];

    }
  }
  getErrorMessage(){
    if(this.userDetails.controls.value.hasError('required')){
        return 'please enter value';
    }
    return this.userDetails.controls.value.hasError('email') ? 'Not a valid email' : '' ;
    
  }

}
