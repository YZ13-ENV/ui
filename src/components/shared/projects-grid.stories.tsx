import type { Meta, StoryObj } from '@storybook/react';

import ProjectsGrid from './projects-grid';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof ProjectsGrid> = {
  component: ProjectsGrid,
};

export default meta;
type Story = StoryObj<typeof ProjectsGrid>;

export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};