import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ToastMessage from "./ToastMessage";

export default {
  title: "toastmessage",
  component: ToastMessage,
} as unknown as ComponentMeta<typeof ToastMessage>;
const Template: ComponentStory<typeof ToastMessage> = () => <ToastMessage />;
export const ToastModel = Template.bind({});
ToastModel.args = {};
