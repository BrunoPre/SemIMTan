import { PropsWithChildren } from "react";
import { Stop } from "../Stop";

/* we'd like to inject a Stop (interface object)
    and a LineNumberIcon component to every new StopCard component */
export type StopCardPropsType = [Stop, Array<JSX.Element>];

export type StopCardProps = PropsWithChildren<StopCardPropsType>;
