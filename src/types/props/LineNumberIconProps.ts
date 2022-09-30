import { PropsWithChildren } from "react";

export const enum iconTextSizeValues {
  small = "SMALL",
  large = "LARGE",
}

export type LineNumberIconProps = PropsWithChildren<{
  lineNumber: string;
  isRatio1by1: boolean;
  iconTextSize: iconTextSizeValues;
  iconMaxHeight?: number;
  iconMaxWidth?: number;
}>;
