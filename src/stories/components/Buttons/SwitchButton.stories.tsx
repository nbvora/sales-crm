import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SwitchButton } from "./SwitchButton";

export default {
  title: "SwitchButton",
  component: SwitchButton,
  argTypes: {
    backgroundColor: { control: "color" },
    hover: { control: "color" },
  },
} as unknown as ComponentMeta<typeof SwitchButton>;

const Template: ComponentStory<typeof SwitchButton> = (args) => (
  <SwitchButton {...args} />
);

export const Switch = Template.bind({});
Switch.args = {
  label: "Switch",
};
