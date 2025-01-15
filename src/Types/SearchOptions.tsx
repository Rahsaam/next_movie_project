export interface IInputOptions {
  value: string;
  label: string;
}

export interface IInputOptionsProps {
  items: Array<IInputOptions>;
  labelText: string;
}

export interface ISliderProps {
  min: number;
  max: number;
  step?: number;
  value?: number[];
  onChange?: (values: number[]) => void;
  onValueChange?: (values: number[]) => void;
  className?: string;
  formatLabel?: (value: number) => string;
}

export interface ITextInput {
    textLabel: string;
}
