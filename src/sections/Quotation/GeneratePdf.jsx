import { pdf } from "@react-pdf/renderer";
import { PDFDocument } from "pdf-lib";

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
  // Select the correct PDF based on package1

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

  // Load both PDFs using pdf-lib

  return invoiceBlob;
};
