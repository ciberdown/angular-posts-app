import { Component, Input } from '@angular/core';

@Component({
  selector: 'flexbox',
  templateUrl: './flexbox.component.html',
  styleUrls: ['./flexbox.component.scss'],
})
export class FlexboxComponent {
  @Input() flexDirection: Direction = 'row';
  @Input() justifyContent: Justify = 'space-between';
  @Input() alignItems: Align = 'stretch';
  @Input() gap: string = '0';
}

type Direction = 'column' | 'row';
type Justify =
  | 'center'
  | 'start'
  | 'end'
  | 'stretch'
  | 'space-between'
  | 'space-around';
type Align = 'center' | 'start' | 'end' | 'stretch';
