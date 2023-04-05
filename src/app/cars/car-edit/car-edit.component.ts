import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'cms-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class carEditComponent implements OnInit {
  // @ViewChild('nameInput') nameInputRef: ElementRef;
  
  id: number;
  editMode = false;

  constructor(private route: ActivatedRoute){

  }

  ngOnInit(){
    this.route.params
    .subscribe(
      (params:Params) => {
        this.id = +params['id'];
        this.editMode = params['id']  !=null;
      }
    );
  }

  // onAddcar(){
  //   const docName = this.nameInputRef.nativeElement.value;
  //   const docDescription = this.descriptionInputRef.nativeElement.value;
  //   const docUrl = this.UrlInputRef.nativeElement.value;
  //   const newcar = new car(docName, docDescription,docUrl);
  //   this.carAdded.emit(newcar);
  // }

}
