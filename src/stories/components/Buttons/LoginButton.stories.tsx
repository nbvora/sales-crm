import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { LoginButton } from "./LoginButton";

export default {
  title: "button",
  component: LoginButton,
  argTypes: {
    backgroundColor: { control: "color" },
    hover: { control: "color" },
  },
} as unknown as ComponentMeta<typeof LoginButton>;

const Template: ComponentStory<typeof LoginButton> = (args) => (
  <LoginButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: "Login",
};
