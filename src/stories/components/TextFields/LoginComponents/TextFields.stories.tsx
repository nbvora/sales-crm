import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TextFields from "./TextFields";
export default {
  title: "LoginComponent",
  component: TextFields,
} as unknown as ComponentMeta<typeof TextFields>;
interface TextFieldProps {
  placeholder: string;
  type: string;
  handleChange: () => void;
}
const Template: ComponentStory<typeof TextFields> = ({
  placeholder,
  type,
  handleChange,
}: TextFieldProps) => (
  <TextFields
    placeholder={placeholder}
    type={type}
    handleChange={handleChange}
  />
);

export const LoginFields = Template.bind({});
LoginFields.args = {
  placeholder: "Text",
  type: "text",
};
