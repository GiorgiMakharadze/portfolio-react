declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.svg" {
  import { ReactElement, SVGProps } from "react";
  const content: any;
  export default content;
}
