import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ToastMessage from "./ToastMessage";

export default {
  title: "ToastModalComponent",
  component: ToastMessage,
} as unknown as ComponentMeta<typeof ToastMessage>;
const Template: ComponentStory<typeof ToastMessage> = () => <ToastMessage />;
export const ToastModal = Template.bind({});
ToastModal.args = {};
