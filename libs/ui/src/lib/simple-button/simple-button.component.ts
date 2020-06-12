import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'todos-simple-button',
  templateUrl: './simple-button.component.html',
  styleUrls: ['./simple-button.component.scss'],
})
export class SimpleButtonComponent implements OnInit {
  @Input() class: string;
  @Input() text: string;

  constructor() {}
  ngOnInit(): void {}
}
