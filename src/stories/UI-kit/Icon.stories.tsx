import React, { Children } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Icon, { IconProps } from '../../UI/Icon';


const iconComponents = [
    'search',
    'map-pin',
    'arrow',
];
  

export default {
    title: 'UI-kit/Icon',
    component: Icon,
  } as ComponentMeta<typeof Icon>;

  const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

  export const Icons = Template.bind({});
  Icons.args = { type:'search'};
  Icons.args = { type:'map-pin'};

//   export const MapPin = Template.bind({});
//   MapPin.args = { type:'map-pin'};

// export const BaseStory = (args: IconProps) => (
//     <>
//       <Search {...args} />
//     </>
//   );