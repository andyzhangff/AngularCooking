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
  ingrediants:string[];
  steps:Array<string[]>;
  receipeName:string;
  receipePicPath:string;
  receipeFeature:string;

  constructor(private getReceipeService: GetReceipeService, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.receipeId = this.route.snapshot.paramMap.get('receipeId');
    console.log(this.receipeId);
    this.getReceipe();
  }

  getReceipe(){
    this.getReceipeService.getReceipe(this.receipeId).subscribe(
      data =>{
        this.ingrediants = data['ingrediant'];
        this.steps = data['step'];
        this.receipeName = data['name']['receipe_name'];
        this.receipePicPath = data['name']['receipe_path'];
        this.receipeFeature = data['name']['receipeFeature'];
      },
      err => {
        console.log(err);
      }
    );
  }

}
