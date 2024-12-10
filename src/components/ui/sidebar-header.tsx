import * as React from "react";
import { Lato } from "next/font/google";

const lato = Lato({ weight: "700", subsets: ["latin"] });
export function SideBarHeader(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      <h3
        style={{
          color: "#037EF2",
          paddingLeft: "16px",
          paddingTop: "8px",
          paddingBottom: "12px",
          fontSize: "24px",
        }}
        className={lato.className}
      >
        Contact List
      </h3>
    </div>
  );
}
