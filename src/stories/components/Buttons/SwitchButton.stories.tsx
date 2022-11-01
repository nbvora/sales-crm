import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SwitchButton } from "./SwitchButton";

export default {
  title: "SwitchComponent",
  component: SwitchButton,
  argTypes: {
    backgroundColor: { control: "color" },
    hover: { control: "color" },
  },
} as unknown as ComponentMeta<typeof SwitchButton>;

const Template: ComponentStory<typeof SwitchButton> = (args) => (
  <SwitchButton {...args} />
);

export const SwitchButtons = Template.bind({});
SwitchButtons.args = {
  label: "Switch",
};
