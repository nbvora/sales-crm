import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Modal } from "./Modal";

export default {
  title: "Modal",
  component: Modal,
} as unknown as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "string",
  labelYes: "string",
  labelNo: "string",
};
