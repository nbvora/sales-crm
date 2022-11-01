import React from "react";
import EmployeeDetail from "./EmployeeDetail";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { title } from "process";
export default {
  title: "EmployeeDetailComponent",
  component: EmployeeDetail,
} as unknown as ComponentMeta<typeof EmployeeDetail>;
interface TextFieldprops {
  title?: string;
  HandleChange?: () => void;
}
const Template: ComponentStory<typeof EmployeeDetail> = ({
  title,
  HandleChange,
}: TextFieldprops) => (
  <EmployeeDetail title={title} HandleChange={HandleChange} />
);

export const EmployeeFeilds = Template.bind({});
EmployeeFeilds.args = {
  title: "string",
};
