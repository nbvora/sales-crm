import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Search from "./Search";
export default {
  title: "SearchComponents",
  component: Search,
} as unknown as ComponentMeta<typeof Search>;
const Template: ComponentStory<typeof Search> = (args) => <Search {...args} />;
export const SearchFields = Template.bind({});
SearchFields.args = {};
