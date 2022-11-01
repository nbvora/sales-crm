import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ResetPassword from "./ResetPassword";
export default {
  title: "ResetPasswordComponent",
  component: ResetPassword,
} as unknown as ComponentMeta<typeof ResetPassword>;
interface TextFieldprops {
  placeholder: string;
  type: string;
  HandleChange: () => void;
}
const Template: ComponentStory<typeof ResetPassword> = ({
  placeholder,
  type,
  HandleChange,
}: TextFieldprops) => (
  <ResetPassword
    placeholder={placeholder}
    type={type}
    HandleChange={HandleChange}
  />
);

export const ResetPasswordField = Template.bind({});
ResetPasswordField.args = {
  placeholder: "Text",
  type: "text",
};
