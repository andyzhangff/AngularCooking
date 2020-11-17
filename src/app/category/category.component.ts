import { GetCategoryService } from './../myservice/category/get-category.service';
import { Component, OnInit, Input } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../myservice/guard/auth.service';
import { Genre } from '../myservice/category/genre';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  loggedInStatus: boolean;
  public genres: Genre;
  public totalPages: number;
  public firstPageLoad: boolean = true;
  public endOfPage: boolean = false;
  public currentPage: number = 1;

  faCoffee = faCoffee;

  constructor(private authService: AuthService,
    private genreService: GetCategoryService,) { }

  ngOnInit(): void {
    this.loadGenre();
  }

  loadGenre() {
    this.genreService.get_all_genre().subscribe(
      data => {
        this.genres = data.genre;
        this.totalPages = data.genreLength / 6;
      },
      error => console.log(error)
    );
  }

  togglePrevButton(targetPageNumber: number) {
    if (targetPageNumber > 0) {
      this.firstPageLoad = false;
      // console.log(this.firstPageLoad);
    } else {
      this.firstPageLoad = true;
      // console.log(this.firstPageLoad);
    }
  }

  toggleNextButton(nextPageNumber: number) {
    if (nextPageNumber == this.totalPages) {
      this.endOfPage = true;
    } else {
      this.endOfPage = false;
    }
  }

  onPageNumberClick(targetPageNumber: number) {
    this.currentPage = targetPageNumber + 1
    this.togglePrevButton(targetPageNumber);
    this.toggleNextButton(targetPageNumber + 1);
    this.genreService.get_current_genre(targetPageNumber).subscribe(
      data => {
        this.genres = data.genre;
        this.totalPages = data.genreLength / 6;
      },
      error => console.log(error)
    )
  }

  goPrev(){
    if(this.currentPage != 1){
      this.currentPage--;
      this.togglePrevButton(this.currentPage-1);
      this.toggleNextButton(this.currentPage);
      this.genreService.get_current_genre(this.currentPage-1).subscribe(
        data => {
          this.genres = data.genre;
          this.totalPages = data.genreLength / 6;
        },
        error => console.log(error)
      )
    }
  }

  goNext(){
    if(this.currentPage != this.totalPages){
      this.currentPage++;
      this.togglePrevButton(this.currentPage-1);
      this.toggleNextButton(this.currentPage);
      this.genreService.get_current_genre(this.currentPage-1).subscribe(
        data => {
          this.genres = data.genre;
          this.totalPages = data.genreLength / 6;
        },
        error => console.log(error)
      )
    }
  }


}
