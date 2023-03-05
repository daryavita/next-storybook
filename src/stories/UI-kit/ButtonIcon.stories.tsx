import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ButtonIcon } from "../../UI/buttons/ButtonIcon";

export default {
  title: "UI-kit/ButtonIcon",
  component: ButtonIcon,
} as ComponentMeta<typeof ButtonIcon>;

const Template: ComponentStory<typeof ButtonIcon> = (args) => (
  <ButtonIcon {...args} />
);

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  type: "button",
  size: "large",
  icon: "edit",
};
