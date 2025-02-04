import { pdf } from "@react-pdf/renderer";
import { PDFDocument } from "pdf-lib";
import essential from "../../assets/pdf/Essential.pdf";
import premium from "../../assets/pdf/Premium.pdf";
import luxury from "../../assets/pdf/Luxury.pdf";
import essentialPlus from "../../assets/pdf/EssentialPlus.pdf";
import premiumPlus from "../../assets/pdf/PremiumPlus.pdf";
import luxuryPlus from "../../assets/pdf/LuxuryPlus.pdf";
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
  // Package-to-PDF mapping
  const packageMap = {
    Essential: essential,
    Premium: premium,
    Luxury: luxury,
    EssentialPlus: essentialPlus,
    PremiumPlus: premiumPlus,
    LuxuryPlus: luxuryPlus,
  };

  // Select the correct PDF based on package1
  const selectedPdf = packageMap[package1];

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
    />
  ).toBlob();

  // Load the selected static PDF
  const staticPdfArrayBuffer = await fetch(selectedPdf).then((res) =>
    res.arrayBuffer()
  );

  // Load both PDFs using pdf-lib
  const invoicePdf = await PDFDocument.load(await invoiceBlob.arrayBuffer());
  const staticPdfDoc = await PDFDocument.load(staticPdfArrayBuffer);

  // Create a new PDF document
  const mergedPdf = await PDFDocument.create();

  // Copy pages from Invoice PDF
  const invoicePages = await mergedPdf.copyPages(
    invoicePdf,
    invoicePdf.getPageIndices()
  );
  invoicePages.forEach((page) => mergedPdf.addPage(page));

  // Copy pages from the selected package PDF
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
