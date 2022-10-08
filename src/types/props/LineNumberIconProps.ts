import { PropsWithChildren } from "react";
import { RouteAttributes } from "../RouteAttributes";

export const enum iconTextSizeValues {
  small = "SMALL",
  large = "LARGE",
}

export type LineNumberIconProps = PropsWithChildren<{
  isRatio1by1: boolean;
  iconTextSize: iconTextSizeValues;
  iconMaxHeight?: number;
  iconMaxWidth?: number;
  routeAttrs: RouteAttributes;
}>;
