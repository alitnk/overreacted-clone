import { PropsWithChildren } from "react";

export const DefaultLayout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <div className="max-w-[42rem] py-[2.625rem] px-[1.3125rem] mx-auto min-h-screen">
      {children}
    </div>
  );
};
