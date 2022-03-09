import { PropsWithChildren } from "react";

export const DefaultLayout = ({ children }: PropsWithChildren<unknown>) => {
  return <div className="max-w-2xl mx-auto py-12 min-h-screen">{children}</div>;
};
