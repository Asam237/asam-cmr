import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }

  social(): any {
    return [
      {
        img: '/assets/pictures/twitter.png',
        link: 'https://twitter.com/asam_237'
      },
      {
        img: '/assets/pictures/github.png',
        link: 'https://github.com/Asam237'
      },
      {
        img: '/assets/pictures/gitlab.png',
        link: 'https://gitlab.com/asam654'
      },
    ]
  }

  approved(): any {
    return [
        '/assets/pictures/ldt.png',
        '/assets/pictures/mokine.jpg',
        '/assets/pictures/vetch.png',

    ]
  }

}
