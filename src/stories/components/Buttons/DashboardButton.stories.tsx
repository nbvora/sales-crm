import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { DashboardButton } from "./DashboardButton";

export default {
  title: "DashboardButton",
  component: DashboardButton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as unknown as ComponentMeta<typeof DashboardButton>;

const Template: ComponentStory<typeof DashboardButton> = (args) => (
  <DashboardButton {...args} />
);

export const Secondary = Template.bind({});
Secondary.args = {
  label: "DashboardButton",
  backgroundColor: "string",
};
