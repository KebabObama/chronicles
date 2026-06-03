import { type ClassValue, clsx } from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

export type TriggerElement = React.ReactElement<React.ComponentPropsWithRef<"button">>;

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const useDebounce = <T>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = React.useState<T>(value);

  React.useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
};
