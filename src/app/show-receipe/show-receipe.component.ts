import { Component, OnInit } from '@angular/core';
import {GetReceipeService} from './get-receipe.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

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
  receipePicUrl;
  receipeFeature:string;

  constructor(private getReceipeService: GetReceipeService, 
    private route: ActivatedRoute,
    private sanitizer : DomSanitizer) { }

  ngOnInit(): void {
    this.receipeId = this.route.snapshot.paramMap.get('receipeId');
    console.log(this.receipeId);
    this.getReceipe();
  }

  getReceipe (){
    // this.getReceipeService.getReceipe(this.receipeId).pipe(
    //   map((result:HttpResponse<Blob>) => {
    //     console.log(result);
    //     FileSaver.saveAs(result.text(), "Quotation.pdf");
    //     return result;
    //   }));
    this.getReceipeService.getReceipe(this.receipeId).subscribe(
      data =>{
        
        // const picUrl = URL.createObjectURL(data);
        const picUrl = window.URL.createObjectURL(data); 
        
        this.receipePicUrl = this.sanitizer.bypassSecurityTrustUrl(picUrl );
        
        // this.ingrediants = data['ingrediant'];
        // this.steps = data['step'];
        // this.receipeName = data['name']['receipe_name'];
        // this.receipePicPath = this.redirectPath + data['name']['receipe_path'];
        // this.receipeFeature = data['name']['receipeFeature'];
        console.log(data);
        // FileSaver.saveAs(data, "test.jpg");
      },
      err => {
        console.log(err);
      }
    );
  }

}
