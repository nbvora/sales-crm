import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PaginationButton } from "./PaginationButton";

export default {
  title: "PaginationComponent",
  component: PaginationButton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as unknown as ComponentMeta<typeof PaginationButton>;

const Template: ComponentStory<typeof PaginationButton> = (args) => (
  <PaginationButton {...args} />
);

export const Pagination = Template.bind({});
Pagination.args = {
  label: "PaginationButton",
};
