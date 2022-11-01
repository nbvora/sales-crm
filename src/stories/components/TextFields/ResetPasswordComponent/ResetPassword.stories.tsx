import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ResetPassword from "./ResetPassword";
export default {
  title: "ResetPasswordComponent",
  component: ResetPassword,
} as unknown as ComponentMeta<typeof ResetPassword>;
interface TextFieldProps {
  placeholder: string;
  type: string;
  handleChange: () => void;
}
const Template: ComponentStory<typeof ResetPassword> = ({
  placeholder,
  type,
  handleChange,
}: TextFieldProps) => (
  <ResetPassword
    placeholder={placeholder}
    type={type}
    handleChange={handleChange}
  />
);

export const ResetPasswordField = Template.bind({});
ResetPasswordField.args = {
  placeholder: "Text",
  type: "text",
};
