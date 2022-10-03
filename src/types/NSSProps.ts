import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./RootStackParamList";

export type NSSProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type NSSNavigationProp<T extends keyof RootStackParamList> =
  NSSProps<T>["navigation"];

export type NSSRouteProp<T extends keyof RootStackParamList> =
  NSSProps<T>["route"];
