import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import UserInfoDropdown from "./UserInfoDropdown";
export default {
  title: "Dropdown",
  component: UserInfoDropdown,
} as unknown as ComponentMeta<typeof UserInfoDropdown>;
const Template: ComponentStory<typeof UserInfoDropdown> = () => (
  <UserInfoDropdown />
);
export const UserInfo = Template.bind({});
UserInfo.args = {};
