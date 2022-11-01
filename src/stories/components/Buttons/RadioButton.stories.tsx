import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { RadioButton } from "./RadioButton";

export default {
  title: "RadioComponent",
  component: RadioButton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as unknown as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args) => (
  <RadioButton {...args} />
);

export const RadioButtons = Template.bind({});
RadioButtons.args = {
  label: "RadioButton",
  label1: "RadioButton",
};
