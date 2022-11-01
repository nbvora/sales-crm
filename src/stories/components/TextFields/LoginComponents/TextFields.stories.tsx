import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TextFields from "./TextFields";
export default {
  title: "LoginComponent",
  component: TextFields,
} as unknown as ComponentMeta<typeof TextFields>;
interface TextFieldprops {
  placeholder: string;
  type: string;
  HandleChange: () => void;
}
const Template: ComponentStory<typeof TextFields> = ({
  placeholder,
  type,
  HandleChange,
}: TextFieldprops) => (
  <TextFields
    placeholder={placeholder}
    type={type}
    HandleChange={HandleChange}
  />
);

export const LoginFields = Template.bind({});
LoginFields.args = {
  placeholder: "Text",
  type: "text",
};
