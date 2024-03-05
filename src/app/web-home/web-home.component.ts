import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  Component,
  Inject,
  OnInit,
  Renderer2,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-web-home',
  templateUrl: './web-home.component.html',
  styleUrls: ['./web-home.component.scss'],
})
export class WebHomeComponent implements OnInit, AfterViewInit {
  // document : Document;
  title = 'eldhosekjoy-website';
  fragment: any;
  last_scroll_top: number = 0;
  //navbar_height:number=50;
  el_autohide: any;
  //@ViewChild('about') linkAbout: ElementRef;

  constructor(
    @Inject(DOCUMENT) _document: Document,
    private route: ActivatedRoute,
    private renderer: Renderer2
  ) {
    //this.document=_document;
  }
  ngAfterViewInit(): void {
    try {
      //document.querySelector('#' + this.fragment).scrollIntoView();Not Working
      //Enable Below if need to scroll o section when page loading
      //document.getElementsByClassName('about')[0].scrollIntoView();
    } catch (e) {}
  }

  ngOnInit(): void {
    this.route.fragment.subscribe((fragment) => {
      this.fragment = fragment;
    });

    window.addEventListener('scroll', function () {
      navbarScroll();
    });
  }

  scrollSection(sectionName: any) {
    document.getElementsByClassName(sectionName)[0].scrollIntoView();
    //this.renderer.addClass(this.linkAbout.nativeElement, 'active' );
  }
}

function navbarScroll() {
  var y = window.scrollY;
  if (y >= 50) {
    var header = document.getElementsByClassName('navbar')[0];
    header.classList.add('compressed');
  } else {
    var header = document.getElementsByClassName('navbar')[0];
    header.classList.remove('compressed');
  }
}
