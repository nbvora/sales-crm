import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import NavBarr from "./Header";
export default {
  title: "HeaderComponent",
  component: NavBarr,
} as unknown as ComponentMeta<typeof NavBarr>;
const Template: ComponentStory<typeof NavBarr> = () => <NavBarr />;
export const Header = Template.bind({});
Header.args = {};
