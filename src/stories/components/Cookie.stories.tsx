import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import {Cookie} from '../../components/Cookie';

export default {
    title: 'components/Cookie',
    component: Cookie,
  } as ComponentMeta<typeof Cookie>;

  const Template: ComponentStory<typeof Cookie> = (args) => <Cookie {...args} />;

  export const Base = Template.bind({});
  Base.args = { };