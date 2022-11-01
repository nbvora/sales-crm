import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import UserInfoDrodown from "./UserInfoDrodown";
export default {
  title: "Drodown",
  component: UserInfoDrodown,
} as unknown as ComponentMeta<typeof UserInfoDrodown>;
const Template: ComponentStory<typeof UserInfoDrodown> = () => (
  <UserInfoDrodown />
);
export const Userinfo = Template.bind({});
Userinfo.args = {};
