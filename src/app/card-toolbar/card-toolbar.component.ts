import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ListConfig } from './list.config';
import { ThemePalette } from '@angular/material';

@Component({
  selector: 'app-card-toolbar',
  templateUrl: './card-toolbar.component.html',
  styleUrls: ['./card-toolbar.component.css']
})
export class CardToolbarComponent  {

  @Input() buttonLabel: string;

  @Input() buttonColor: ThemePalette;

  @Input() itemList: ListConfig;

  @Output() sqClick = new EventEmitter();

  buttonClickHandler() {
    this.sqClick.emit();
  }
}


