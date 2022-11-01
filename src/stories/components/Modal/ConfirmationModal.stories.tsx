import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ConfirmationModal } from "./ConfirmationModal";

export default {
  title: "ConfirmationModalComponent",
  component: ConfirmationModal,
} as unknown as ComponentMeta<typeof ConfirmationModal>;

const Template: ComponentStory<typeof ConfirmationModal> = (args) => (
  <ConfirmationModal {...args} />
);

export const ConfirmModal = Template.bind({});
ConfirmModal.args = {
  labelName: "ConfirmationModal",
  label: "string",
  labelYes: "string",
  labelNo: "string",
};
