import React from "react";

import { SelectBox } from "components";

export default {
  title: "aditya_s_application3/SelectBox",
  component: SelectBox,
  argTypes: {
    options: {
      table: {
        disable: true,
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
  },
};

export const SampleSelectbox = (args) => <SelectBox {...args} />;

SampleSelectbox.args = { placeholder: "Select", className: "w-[300px]" };
