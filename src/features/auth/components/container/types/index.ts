export type Focused = 'name' |'email' | 'password' | null;

export interface InputContainerProps {
  focused?: Focused;
  handleFocused?: (val: Focused) => void;
  handleBlur?: () => void;
}

export interface AuthFormState {
  name?:string
  email?: string
  password?: string
}
