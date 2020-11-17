import { SearchContentService } from './search-content.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  searchForm:FormGroup;
  content:string;

  constructor(private _fb: FormBuilder,
    private _searchService: SearchContentService,) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.searchForm = this._fb.group({
      search_content: [null],
    });
  }

  get search_content() { return this.searchForm.get('search_content'); }

  onSubmit(): void{
    let params = new HttpParams().set("content",this.content);
    this._searchService.search(params).subscribe(
      data=>{
        },
      error=>console.log(error)
    );
}

}
