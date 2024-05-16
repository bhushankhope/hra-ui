import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { VisualCard, VisualCardComponent } from '../../components/visual-card/visual-card.component';

/**
 * Landing Page Component
 */
@Component({
  selector: 'cde-landing-page',
  standalone: true,
  imports: [CommonModule, VisualCardComponent, MatIconModule, YouTubePlayerModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPageComponent {
  /** Input data for card */
  readonly data: VisualCard[] = [
    {
      image: 'assets/examples/intestine.svg',
      label: 'Explore 2D Intestine Data',
      route: 'visualize',
      alt: 'Image for Intestine',
    },
    {
      image: 'assets/examples/skin.svg',
      label: 'Explore 3D Skin Data',
      route: 'home',
      alt: 'Image for Skin',
    },
    {
      image: 'assets/examples/tonsil.svg',
      label: 'Create a Visualization',
      route: 'create',
      alt: 'Image for Tonsil',
    },
  ];
}
