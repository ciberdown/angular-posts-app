import { Component, Input } from '@angular/core';

@Component({
  selector: 'grid-system',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent {
  @Input() gap: string = '0';
  @Input() gridTemplateColumns: string = '1fr';
  @Input() gridTemplateRows: string = '';
}
