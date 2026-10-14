"use client";

import { PrinterIcon } from "./icons";
import { buttonClass } from "./ui";

export function PrintButton() {
  return (
    <button type="button" onClick={() => window.print()} className={buttonClass("secondary")}>
      <PrinterIcon size={16} /> Print
    </button>
  );
}
