import { Shallow } from 'shallow-render';

import { LandingPageIntroComponent } from './landing-page-intro.component';

describe('LandingPageIntroComponent', () => {
  let shallow: Shallow<LandingPageIntroComponent>;

  beforeEach(() => {
    shallow = new Shallow(LandingPageIntroComponent);
  });

  it('should create LandingPageIntroComponent', async () => {
    expect(await shallow.render()).toBeDefined();
  });
});
