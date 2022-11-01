import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ConfirmationModal } from "./ConfirmationModal";

export default {
  title: "ConfirmationModal",
  component: ConfirmationModal,
} as unknown as ComponentMeta<typeof ConfirmationModal>;

const Template: ComponentStory<typeof ConfirmationModal> = (args) => (
  <ConfirmationModal {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  labelName: "ConfirmationModal",
  label: "string",
  labelYes: "string",
  labelNo: "string",
};
