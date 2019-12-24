import React from "react";
import { storiesOf } from "@storybook/react";
import CustomButton from "./custom-button.component";

storiesOf("CustomButton", module)
    .add("curved",
        () => <CustomButton curved>Button</CustomButton>
    )
    .add("margined",
        () =>
            <div>
                <CustomButton margined>Button </CustomButton>
                <CustomButton margined>Button </CustomButton>
            </div>
    )
    .add("curved & margined",
        () =>
            <div>
                <CustomButton margined curved>Button </CustomButton>
                <CustomButton margined curved>Button </CustomButton>
            </div>
    )
    .add("squared & non-margined",
        () =>
            <div>
                <CustomButton >Button </CustomButton>
                <CustomButton >Button </CustomButton>
            </div>
    )