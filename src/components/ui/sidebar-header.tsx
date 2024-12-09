import * as React from "react";

export function SideBarHeader(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      <h3
        style={{
          color: "#037EF2",
          paddingLeft: "12px",
          paddingTop: "12px",
          paddingBottom: "12px",
          fontWeight: "500",
        }}
      >
        Contact List
      </h3>
    </div>
  );
}
