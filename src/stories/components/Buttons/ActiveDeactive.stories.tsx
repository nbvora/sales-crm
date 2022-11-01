import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ActiveDeactive } from "./ActiveDeactive";

export default {
  title: "ActiveDeactiveButton",
  component: ActiveDeactive,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as unknown as ComponentMeta<typeof ActiveDeactive>;

const Template: ComponentStory<typeof ActiveDeactive> = (args) => (
  <ActiveDeactive {...args} />
);

export const ActiveDeactiveToggle = Template.bind({});
ActiveDeactiveToggle.args = {
  label: "Active-Deactive",
};
