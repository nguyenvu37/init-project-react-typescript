export interface IButtonProps {
  handleClick: () => void;
  text: string;
}

export interface IUserState {
  user: boolean;
}

export interface IUserAction {
  type: string;
  payload: boolean;
}
