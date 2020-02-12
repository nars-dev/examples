import { InputProp, localCallback } from "nars-common";

/*
 * Define Routes and the props
 */
const title = InputProp.string;
export const config = {
  Menu: {
    onMenuItemSelected: localCallback(InputProp.void, title)
  },
};
