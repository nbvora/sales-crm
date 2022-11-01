import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { RadioButton } from "./RadioButton";

export default {
  title: "RadioButton",
  component: RadioButton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as unknown as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args) => (
  <RadioButton {...args} />
);

export const Radio = Template.bind({});
Radio.args = {
  label: "RadioButton",
  label1: "RadioButton",
};
