import { BrandmarkComponent } from './brandmark.component';

import type { Meta, StoryObj } from '@storybook/angular';

const meta: Meta<BrandmarkComponent> = {
  component: BrandmarkComponent,
  title: 'BrandmarkComponent',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/BCEJn9KCIbBJ5MzqnojKQp/Design-System-Components?node-id=82-776',
    },
  },
};
export default meta;
type Story = StoryObj<BrandmarkComponent>;

export const DefaultSmall: Story = {
  args: {
    small: true,
  },
};

export const DefaultLarge: Story = {
  args: {},
};

export const WhiteLarge: Story = {
  args: {
    color: 'white',
  },
};

export const BlackLarge: Story = {
  args: {
    color: 'black',
  },
};
