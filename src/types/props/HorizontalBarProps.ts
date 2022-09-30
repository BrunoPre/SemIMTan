import { PropsWithChildren } from "react";

export const enum PaddingTypeValues {
  paddingBottom = "paddingBottom",
  paddingTop = "paddingTop",
}

export interface paddingType {
  paddingType?: PaddingTypeValues;
}

export type HorizontalBarProps = PropsWithChildren<paddingType>;
