import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { DomSanitizer } from '@angular/platform-browser';
import { ReceipeUploadService } from "./receipe-upload.service";

@Component({
  selector: 'app-create-receipe',
  templateUrl: './create-receipe.component.html',
  styleUrls: ['./create-receipe.component.css']
})
export class CreateReceipeComponent implements OnInit {

  dynamicForm: FormGroup;
  ingrediantsForm: FormGroup;
  submitted = false;
  receipe_preview: string;
  percentDone: number = 0;
  steps_preview = [];
  fileArr = [];
  imgArr = [];
  fileObj = [];
  msg: string;

  constructor(private formBuilder: FormBuilder,
    private elementRef: ElementRef,
    private sanitizer: DomSanitizer,
    private receipeUploadService: ReceipeUploadService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.dynamicForm = this.formBuilder.group({
      receipe_name: ['', Validators.required],
      receipe_feature: ['', Validators.required],
      receipe_picture: ['', Validators.required],
      receipe_picture_source: ['', Validators.required],
      step_picture_source:[''],
      ingrediants: new FormArray([this.formBuilder.group({
        ingrediant: ['']
      })]),
      steps: new FormArray([]),
    });
  }

  // convenience getters for easy access to form fields
  get thisForm() { return this.dynamicForm.controls; }
  get ingrediantsArray() { return this.thisForm.ingrediants as FormArray; }
  get stepsArray() { return this.thisForm.steps as FormArray; }
  get ingrediantsFormGroups() { return this.ingrediantsArray.controls as FormGroup[]; }
  get stepsFormGroups() { return this.stepsArray.controls as FormGroup[]; }
  get receipe_name() { return this.dynamicForm.get('receipe_name'); }
  get receipe_feature() { return this.dynamicForm.get('receipe_feature'); }
  get receipe_picture() { return this.dynamicForm.get('receipe_picture'); }
  get receipe_picture_source() { return this.dynamicForm.get('receipe_picture_source'); }
  get step_picture_source() { return this.dynamicForm.get('step_picture_source'); }
  get ingrediants() { return this.dynamicForm.get('ingrediants'); }
  get steps() { return this.dynamicForm.get('steps'); }

  addIngrediant() {
    this.ingrediantsArray.push(this.formBuilder.group({
      ingrediant: ['']
    }));
  }

  addStep() {
    this.stepsArray.push(this.formBuilder.group({
      step_name: [''],
      step_picture: ['']
    }));
    this.fileArr.push({ item:null, url:null });
    console.log(this.fileArr);
  }

  uploadReceipeFile(event: any) {
    const file = (event.target as HTMLInputElement).files[0];
    this.percentDone = Math.round(event.loaded / event.total * 100);
    this.dynamicForm.patchValue({
      receipe_picture_source: file
    });
    this.dynamicForm.get('receipe_picture_source').updateValueAndValidity()

    const reader = new FileReader();
    reader.onload = () => {
      this.receipe_preview = reader.result as string;
    }
    reader.readAsDataURL(file);
  }

  onNotifyIngrediantRemove(index: number) {
    this.ingrediantsArray.removeAt(index);
  }

  onNotifyStepRemove(index: number) {
    this.stepsArray.removeAt(index);
    this.fileArr.splice(index,1);
    console.log(this.fileArr);
  }

  uploadBatchStepFile(e: any) {
    const fileListAsArray = Array.from(e);
    fileListAsArray.forEach((item, i) => {
      const file = (e as HTMLInputElement);
      const url = URL.createObjectURL(file[i]);
      this.imgArr.push(url);
      this.fileArr.push({ item, url: url });
      this.stepsArray.push(this.formBuilder.group({
        step_name: [''],
        step_picture: ['']
      }));
      console.log(this.fileArr);
    })
  }

  uploadStepFile(file: any,i:number){
      const url = URL.createObjectURL(file[0]);
      this.fileArr[i]['url']=url;
      this.fileArr[i]['item']=file[0];
      console.log(this.fileArr);
  }

  // Clean Url
  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  onSubmit() {
    // this.fileObj= [];
    // this.fileArr.forEach(element => {
    //   this.fileObj.push(element['item']);
    // });
    this.submitted = true;
    var formData: any = new FormData();
    formData.append("receipeName", this.receipe_name.value);
    formData.append("receipeFeature", this.receipe_feature.value);
    formData.append("receipePicture", this.receipe_picture.value);
    for (let i = 0; i < this.ingrediants.value.length; i++) {
      formData.append("ingrediants[]", this.ingrediants.value[i]['ingrediant']);
    }
        for (let i = 0; i < this.steps.value.length; i++) {
      formData.append("steps[]", this.steps.value[i]['step_name']);
    }
    formData.append("receipePictureSource", this.dynamicForm.get('receipe_picture_source').value );

    for (let i = 0; i < this.fileArr.length; i++) {
      formData.append("stepPictureSource[]", this.fileArr[i]['item']);
      formData.append("stepPicturePath[]", this.sanitize(this.fileArr[i]['url']));
    }
    this.receipeUploadService.addFiles(formData).subscribe(
      data=>{console.log(data['result'])},
      error=>{console.log(error)}
    )
  }

   // Upload to server
    // this.dragdropService.addFiles(this.form.value.avatar)
    //   .subscribe((event: HttpEvent<any>) => {
    //     switch (event.type) {
    //       case HttpEventType.Sent:
    //         console.log('Request has been made!');
    //         break;
    //       case HttpEventType.ResponseHeader:
    //         console.log('Response header has been received!');
    //         break;
    //       case HttpEventType.UploadProgress:
    //         this.progress = Math.round(event.loaded / event.total * 100);
    //         console.log(`Uploaded! ${this.progress}%`);
    //         break;
    //       case HttpEventType.Response:
    //         console.log('File uploaded successfully!', event.body);
    //         setTimeout(() => {
    //           this.fileArr = [];
    //           this.fileObj = [];
    //           this.msg = "File uploaded successfully!"
    //         }, 3000);
    //     }
    //   })

}

