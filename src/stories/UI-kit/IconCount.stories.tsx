import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { IconCount } from "../../UI/icons/IconCount";

export default {
  title: "UI-kit/icons/IconCount",
  component: IconCount,
} as ComponentMeta<typeof IconCount>;

const Template: ComponentStory<typeof IconCount> = (args) => (
  <IconCount {...args} />
);

export const ShoppingCart = Template.bind({});
ShoppingCart.args = { type: "shopping-cart", count:101, height:"24px", width:"24px" };
