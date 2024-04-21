import { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
}

export default function Title({ children }: TitleProps): JSX.Element {
  return (
    <h1 className="text-white text-center ml-12 mb-4 text-3xl font-bold">
      {children}
    </h1>
  );
}
