import { Component, OnInit } from '@angular/core';
import{CrudService} from '../myservice/CRUD/crud.service'
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styles: [
  ],
  providers:[CrudService]
})
export class FindComponent implements OnInit {

  findForm:FormGroup

  constructor(private _fb: FormBuilder,
    private _crudService: CrudService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.findForm = this._fb.group({
      username: [null,Validators.required],
    });
  }

  get username() { return this.findForm.get('username'); }

  onSubmit(): void{
      this._crudService.findOne({"username":this.username.value }).subscribe(
        data=>console.log(data),
        error=>console.log('post is fail',error)
      );
 }

}
