import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImagesService } from 'src/app/services/images.service';
import { Image } from 'src/app/models/image.interface';

@Component({
  selector: 'app-component-detail',
  templateUrl: './component-detail.component.html',
  styleUrls: ['./component-detail.component.css']
})
export class ComponentDetailComponent implements OnInit {
  image!: Image;
  panelOpenState = false;

  constructor(
    private imagesService: ImagesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id')
    console.log('Identifier --> ', identifier);

    this.imagesService.getImageById(identifier!).subscribe((image) => {
      this.image = image;
      console.log('Image --> ', this.image);

      if(!image){
        this.router.navigateByUrl('/');
      }
    });
  }

}
