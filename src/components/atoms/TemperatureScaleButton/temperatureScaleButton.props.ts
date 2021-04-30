import { ReactNode } from "react";

export interface TemperatureScaleButtonProps {
  onClick: () => void;
  isSelected: boolean;
  children: ReactNode;
}