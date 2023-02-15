import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface GradientPoint {
  percentage: number;
  color: string;
  value: string;
}

@Component({
  selector: 'hra-gradient-legend',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gradient-legend.component.html',
  styleUrls: ['./gradient-legend.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GradientLegendComponent {
  @Input()
  gradient: GradientPoint[];
}
