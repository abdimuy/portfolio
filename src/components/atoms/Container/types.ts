export interface ContainerProps {
  className?: string;
  children?: React.ReactNode;
  styles?: ContainerStyles;
  stylesLarge?: ContainerStyles;
  hoverStyles?: ContainerStyles;
  aditionalStyles?: string;
  id?: string;
  onClick?: () => void;
}

export interface ContainerStyles {
  display?: string;
  flexDirection?: string;
  flexWrap?: string;
  justifyContent?: string;
  alignItems?: string;
  alignContent?: string;
  alignSelf?: string;
  flex?: string;
  margin?: string;
  padding?: string;
  width?: string;
  height?: string;
  minWidth?: string;
  maxWidth?: string;
  minHeight?: string;
  maxHeight?: string;
  backgroundColor?: string;
  backdropFilter?: string;
  border?: string;
  borderRadius?: string;
  boxShadow?: string;
  overflow?: string;
  position?: string;
  zIndex?: string;
  top?: string;
  bottom?: string;
  rigth?: string;
  left?: string;
  background?: any;
  backgroundSize?: string;
  backgroundRepeat?: string;
  boxSizing?: string;
  gap?: string;
  transition?: string;
  cursor?: string;
}
