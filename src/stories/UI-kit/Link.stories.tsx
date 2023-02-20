import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import LinkMod from '../../UI/Link';

export default {
    title: 'UI-kit/Link',
    component: LinkMod,
  } as ComponentMeta<typeof LinkMod>;

  const Template: ComponentStory<typeof LinkMod> = (args) => <LinkMod {...args} />;

  export const Base = Template.bind({});
  Base.args = {style:'large', color:'black', children:'Link' };

  export const Body = Template.bind({});
  Body.args = {style:'body-lg', color:'white', children:'Link' };