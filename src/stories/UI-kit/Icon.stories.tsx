import React, { Children } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Icon, { IconProps } from '../../UI/icons/Icon';

export default {
    title: 'UI-kit/icons/Icon',
    component: Icon,
  } as ComponentMeta<typeof Icon>;

  const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

  export const Icons = Template.bind({});
  Icons.args = { type:'search'};