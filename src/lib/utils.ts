import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export type TriggerElement = React.ReactElement<React.ComponentPropsWithRef<"button">>;

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
