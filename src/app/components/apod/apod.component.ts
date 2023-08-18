import { Component } from '@angular/core';
import { Picture } from '../../models/picture';
import { ApodService } from 'src/app/service/apod.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.css'],
  providers: [ApodService],
})
export class ApodComponent {
  public result!: Picture;
  public isLoaded: boolean = false;
  constructor(private _apodService: ApodService) {}

  ngOnInit() {
    this._apodService.getApod().subscribe(
      (reply) => {
        this.result = reply;
        this.isLoaded = true;
        console.log(reply);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
