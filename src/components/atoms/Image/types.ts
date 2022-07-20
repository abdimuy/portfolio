export interface ImageProps {
  src: string;
  alt?: string;
  className?: string;
  styles?: ImageStyles;
  stylesLarge?: ImageStyles;
}

export interface ImageStyles {
  width?: string;
  height?: string;
  objectFit?: string;
  objectPosition?: string;
  borderRadius?: string;
  border?: string;
  zindex?: number;
  margin?: string;
}
