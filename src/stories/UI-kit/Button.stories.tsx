import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import {Button} from '../../UI/buttons/Button';

export default {
    title: 'UI-kit/Button',
    component: Button,
  } as ComponentMeta<typeof Button>;

  const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

  export const Base = Template.bind({});
  Base.args = { variant:'primary', children:'Label', type:'button', size:'large' };

  export const ButtonIcon = Template.bind({});
  Base.args = { variant:'primary', children:'Label', type:'button', size:'large' };