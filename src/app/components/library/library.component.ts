import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { LibraryService } from 'src/app/service/library.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css'],
  providers: [LibraryService],
})
export class LibraryComponent {
  search: any;
  searchValue: string = '';
  public result: any;
  public showResults: boolean = false;
  modalVisible: { [key: string]: boolean } = {};

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private libraryService: LibraryService
  ) {}

  ngOnInit() {
    if (this.result && this.result.collection && this.result.collection.items) {
      this.result.collection.items.forEach(
        (item: any, index: string | number) => {
          this.modalVisible[index] = false;
        }
      );
    }
  }

  onSearch() {
    if (this.searchValue != undefined && this.searchValue != '') {
      this.showResults = false;
      this.libraryService.getSearch(this.searchValue).subscribe(
        (response) => {
          this.result = response;
          this.showResults = true;
        },
        (error) => {}
      );
    }
  }

  toggleModalVisible(index: number) {
    this.modalVisible[index] = !this.modalVisible[index];
  }
}
