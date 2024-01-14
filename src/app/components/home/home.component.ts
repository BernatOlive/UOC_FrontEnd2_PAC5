import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/models/image.interface';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images: Image[] = [];
  imagesLoaded = false;

  constructor(private imagesService: ImagesService) {}

  ngOnInit(): void {
    this.imagesService
      .getAllImages()
      .subscribe(
        (images) => {
          this.images = images;
          this.stopSpinner();
        });
  }

  stopSpinner(): void {
    this.imagesLoaded = true;
  }

}
