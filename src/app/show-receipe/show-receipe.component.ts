import { Component, OnInit } from '@angular/core';
import {GetReceipeService} from './get-receipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-receipe',
  templateUrl: './show-receipe.component.html',
  styleUrls: ['./show-receipe.component.css']
})
export class ShowReceipeComponent implements OnInit {
  receipeId:string;

  constructor(private getReceipeService: GetReceipeService, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.receipeId = this.route.snapshot.paramMap.get('receipeId');
    console.log(this.receipeId);
    this.get_receipe();
  }

  get_receipe(){
    this.getReceipeService.getReceipe(this.receipeId).subscribe(
      data =>{
        console.log(data['ingrediant']);
      }
    );
  }

}
