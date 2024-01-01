import type { Meta, StoryObj } from '@storybook/react';

import { UserCircle } from './index';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof UserCircle> = {
  component: UserCircle,
};

export default meta;
type Story = StoryObj<typeof UserCircle>;

export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};