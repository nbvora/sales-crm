import React from "react";
import EmployeeDetail from "./EmployeeDetail";
import { ComponentStory, ComponentMeta } from "@storybook/react";
export default {
  title: "EmployeeDetailComponent",
  component: EmployeeDetail,
} as unknown as ComponentMeta<typeof EmployeeDetail>;
interface TextFieldProps {
  title?: string;
  handleChange?: () => void;
}
const Template: ComponentStory<typeof EmployeeDetail> = ({
  title,
  handleChange,
}: TextFieldProps) => (
  <EmployeeDetail title={title} handleChange={handleChange} />
);

export const EmployeeFields = Template.bind({});
EmployeeFields.args = {
  title: "string",
};
