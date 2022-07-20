import { ContainerProps } from "../Container/types";

export interface ItemListUlProps extends Omit<ContainerProps, "children"> {
  children?: JSX.Element | JSX.Element[];
}
