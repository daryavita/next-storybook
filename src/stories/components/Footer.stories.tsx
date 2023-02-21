import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import {Footer} from '../../components/Footer';

export default {
    title: 'components/Footer',
    component: Footer,
  } as ComponentMeta<typeof Footer>;

  const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

  export const Base = Template.bind({});
  Base.args = { };