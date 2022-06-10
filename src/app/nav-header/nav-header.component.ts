import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})
export class NavHeaderComponent implements OnInit {
  @Input() titulo: string= '';
  constructor() { }

  ngOnInit(): void {
  }

}
