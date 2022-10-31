import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Search from "./Search";
export default {
  title: "Searchelement",
  component: Search,
} as unknown as ComponentMeta<typeof Search>;
const Template: ComponentStory<typeof Search> = (args) => <Search {...args} />;
export const Secondary = Template.bind({});
Secondary.args = {};
