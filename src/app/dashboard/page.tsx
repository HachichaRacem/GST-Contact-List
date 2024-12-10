"use client";
import { fetchRegions } from "../../models/regionsModels";

async function onClick() {
  await fetchRegions();
}

export default function DashboardContent() {
  return (
    <div>
      <center>
        <button onClick={onClick}>Welcome</button>
      </center>
    </div>
  );
}
