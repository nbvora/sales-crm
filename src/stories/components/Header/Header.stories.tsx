import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import NavBar from "./Header";
export default {
  title: "HeaderComponent",
  component: NavBar,
} as unknown as ComponentMeta<typeof NavBar>;
const Template: ComponentStory<typeof NavBar> = () => <NavBar />;
export const Header = Template.bind({});
Header.args = {};
