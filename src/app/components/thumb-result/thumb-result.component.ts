import { Component, Input } from '@angular/core';
import { LibraryService } from 'src/app/service/library.service';

@Component({
  selector: 'app-thumb-result',
  templateUrl: './thumb-result.component.html',
  styleUrls: ['./thumb-result.component.css'],
})
export class ThumbResultComponent {
  @Input() visible: boolean = false;
  @Input()
  collection!: string;
  public result: any;
  public type!: boolean;
  public dataDetail!: string;

  constructor(private libraryService: LibraryService) {}

  ngOnInit() {
    this.libraryService.getDeepSearch(this.collection).subscribe(
      (response) => {
        response.forEach((element: string) => {
          if (element.endsWith('orig.jpg')) {
            this.dataDetail = element;
            this.type = true;
            console.log(this.dataDetail);
          } else if (element.endsWith('orig.mp4')) {
            this.dataDetail = element;
            this.type = false;
            console.log(this.dataDetail);
          }
        });

        this.result = response;
      },
      (error) => {}
    );
  }
}
