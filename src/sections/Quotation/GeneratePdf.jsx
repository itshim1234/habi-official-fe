import { pdf } from "@react-pdf/renderer";
import { PDFDocument } from "pdf-lib";
import staticPdf from "../../assets/pdf/Essential.pdf"; // Adjust the path as needed
import Invoice from "./invoice";

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
}) => {
  console.log(
    name,
    phone,
    email,
    sumpCost,
    estimatedCost,
    floors,
    floorHeight,
    package1,
    landArea,
    landType
  );

  // Generate the Invoice1 PDF with all the passed props
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
    />
  ).toBlob();

  // Load the static PDF from the imported file
  const staticPdfArrayBuffer = await fetch(staticPdf).then((res) =>
    res.arrayBuffer()
  );

  // Load both PDFs using pdf-lib
  const invoicePdf = await PDFDocument.load(await invoiceBlob.arrayBuffer());
  const staticPdfDoc = await PDFDocument.load(staticPdfArrayBuffer);

  // Create a new PDF document
  const mergedPdf = await PDFDocument.create();

  // Copy pages from Invoice1 PDF
  const invoicePages = await mergedPdf.copyPages(
    invoicePdf,
    invoicePdf.getPageIndices()
  );
  invoicePages.forEach((page) => mergedPdf.addPage(page));

  // Copy pages from the static PDF
  const staticPages = await mergedPdf.copyPages(
    staticPdfDoc,
    staticPdfDoc.getPageIndices()
  );
  staticPages.forEach((page) => mergedPdf.addPage(page));

  // Save the merged PDF
  const mergedPdfBytes = await mergedPdf.save();

  // Convert the merged PDF to a Blob
  const mergedPdfBlob = new Blob([mergedPdfBytes], { type: "application/pdf" });

  // Open the merged PDF in a new tab
  const url = URL.createObjectURL(mergedPdfBlob);
  const newTab = window.open(url, "_blank");

  // Attempt to rename the document inside the new tab (browser-dependent)
  setTimeout(() => {
    if (newTab) {
      newTab.document.title = "Quotation.pdf";
    }
  }, 1000);
};
