import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CheckboxButton } from "./CheckboxButton";

export default {
  title: "CheckboxButton",
  component: CheckboxButton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as unknown as ComponentMeta<typeof CheckboxButton>;

const Template: ComponentStory<typeof CheckboxButton> = (args) => (
  <CheckboxButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: "CheckboxButton",
};
