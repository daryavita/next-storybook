import React, { Children } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Input from '../../UI/Input';

export default {
    title: 'UI-kit/Input',
    component: Input,
  } as ComponentMeta<typeof Input>;

  const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

  export const Base = Template.bind({});
  Base.args = { type:'text', placeholder:'Text'};

  export const Search = Template.bind({});
  Search.args = { icon:'search', placeholder:'Text'};