import React from "react";
import Alert from "./Alert";


export default {
  title: "Alert",
  component: Alert,
};

const Template = (args) => <Alert {...args} />;

export const Default = Template.bind({});
Default.args = {
    type: "success",
    message: "Default text",
    dismissable: true
};