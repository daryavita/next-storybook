import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Header from '../../components/Header';

export default {
    title: 'components/Header',
    component: Header,
  } as ComponentMeta<typeof Header>;

  const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

  export const LoggedIn = Template.bind({});
  LoggedIn.args = { isLogin: true };

  export const LoggedOut = Template.bind({});
  LoggedOut.args = { isLogin: false };