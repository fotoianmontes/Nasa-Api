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

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private libraryService: LibraryService
  ) {}

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.search = params['search'];
    });
  }

  onSearch() {
    if (this.searchValue != undefined && this.searchValue != '') {
      console.log(encodeURI(this.searchValue));
      this.libraryService.getSearch(this.searchValue).subscribe(
        (response) => {
          this.result = response;
        },
        (error) => {}
      );
    }
  }
}
