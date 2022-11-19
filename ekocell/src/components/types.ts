/* eslint-disable import/no-relative-packages */
// overload slate types
import "slate";

import type {
  FormattedElement,
  FormattedText,
} from "../../../payload/src/rich-text-export";

declare module "slate" {
  interface CustomTypes {
    Element: FormattedElement;
    Text: FormattedText;
  }
}
