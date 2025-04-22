import React from "react";
import { pdf } from "@react-pdf/renderer";
import Invoice from "./Invoice";

export const generatePDF = async ({
  name,
  phone,
  email,
  totalSump,
  consSump,
  sumpCost,
  estimatedCost,
  floors,
  floorHeight,
  package1,
  landArea,
  landType,
  length,
  breadth,
  builtUp,
}) => {
  // Generate the Invoice PDF with all the passed props
  const invoiceBlob = await pdf(
    <Invoice
      name={name}
      phone={phone}
      email={email}
      totalSump={totalSump}
      consSump={consSump}
      sumpCost={sumpCost}
      estimatedCost={estimatedCost}
      floors={floors}
      floorHeight={floorHeight}
      package1={package1}
      landArea={landArea}
      landType={landType}
      length={length}
      breadth={breadth}
      builtUp={builtUp}
    />
  ).toBlob();

  // Return the generated PDF Blob
  return invoiceBlob;
};
