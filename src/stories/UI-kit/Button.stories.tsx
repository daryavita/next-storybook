import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import {Button} from '../../UI/buttons/Button';

export default {
    title: 'UI-kit/Button',
    component: Button,
  } as ComponentMeta<typeof Button>;

  const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

  export const Primary = Template.bind({});
  Primary.args = { variant:'primary', children:'Label', type:'button', size:'large' };