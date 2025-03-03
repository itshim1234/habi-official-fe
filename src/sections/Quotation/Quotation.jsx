import React, { useRef } from "react";
import { PDFDocument } from "pdf-lib";
import html2canvas from "html2canvas";
import pdf from "../../assets/pdf/Essential.pdf"; // Static PDF

const Quotation = () => {
  const costBreakdownData = [
    { item: "Design Fees", percentage: "1%", cost: "0.00" },
    { item: "Excavation", percentage: "3%", cost: "0.00" },
    { item: "Sand", percentage: "4%", cost: "0.00" },
    { item: "Steel Reinforcement", percentage: "14%", cost: "0.00" },
    { item: "Cement", percentage: "8%", cost: "0.00" },
    { item: "Solid Blocks", percentage: "9%", cost: "0.00" },
    { item: "Stones", percentage: "5%", cost: "0.00" },
    { item: "RMC", percentage: "9%", cost: "0.00" },
    { item: "Formwork", percentage: "3%", cost: "0.00" },
    { item: "Painting", percentage: "6%", cost: "0.00" },
    { item: "Plumbing", percentage: "7%", cost: "0.00" },
    { item: "Electrical work", percentage: "5%", cost: "0.00" },
    { item: "Exterior Flooring", percentage: "5%", cost: "0.00" },
    { item: "Compound wall", percentage: "4%", cost: "0.00" },
    { item: "Doors & Windows", percentage: "3%", cost: "0.00" },
    { item: "Miscellaneous", percentage: "7%", cost: "0.00" },
    { item: "Internal Flooring", percentage: "7%", cost: "0.00" },
    { item: "Floor Height Cost", percentage: "", cost: "0.00" },
    { item: "Sump Cost", percentage: "5000 Ltr", cost: "0.00" },
  ];

  const htmlRef1 = useRef();
  const htmlRef2 = useRef();
  const htmlRef3 = useRef();

  // Convert HTML to Image using html2canvas and add to PDF
  const generatePdf = async () => {
    const pdfDoc = await PDFDocument.create();

    // Capture images from the HTML content
    const html1Canvas = await html2canvas(htmlRef1.current);
    const html2Canvas = await html2canvas(htmlRef2.current);
    const html3Canvas = await html2canvas(htmlRef3.current);

    // Convert canvas to image data
    const img1Data = html1Canvas.toDataURL("image/png");
    const img2Data = html2Canvas.toDataURL("image/png");
    const img3Data = html3Canvas.toDataURL("image/png");

    // Add pages and draw images (representing HTML content) on them
    const page1 = pdfDoc.addPage([595, 842]); // A4 size in points
    page1.drawImage(img1Data, { x: 10, y: 800, width: 575, height: 800 });

    const page2 = pdfDoc.addPage([595, 842]); // A4 size in points
    page2.drawImage(img2Data, { x: 10, y: 800, width: 575, height: 800 });

    const page3 = pdfDoc.addPage([595, 842]); // A4 size in points
    page3.drawImage(img3Data, { x: 10, y: 800, width: 575, height: 800 });

    // Save the PDF document and return the array buffer
    const pdfBytes = await pdfDoc.save();
    return pdfBytes;
  };

  // Merge PDFs
  const mergePdfs = async (htmlPdf, staticPdfUrl) => {
    const pdfDoc = await PDFDocument.create();

    // Load HTML PDF
    const htmlBytes = new Uint8Array(htmlPdf);
    const htmlDoc = await PDFDocument.load(htmlBytes);

    // Load static PDF
    const staticPdfBytes = await fetch(staticPdfUrl).then((res) =>
      res.arrayBuffer()
    );
    const staticDoc = await PDFDocument.load(staticPdfBytes);

    // Merge pages from HTML PDF
    const htmlPagesCount = htmlDoc.getPages().length;
    for (let i = 0; i < htmlPagesCount; i++) {
      const [htmlPage] = await pdfDoc.copyPages(htmlDoc, [i]);
      pdfDoc.addPage(htmlPage);
    }

    // Merge pages from static PDF
    const staticPagesCount = staticDoc.getPages().length;
    for (let i = 0; i < staticPagesCount; i++) {
      const [staticPage] = await pdfDoc.copyPages(staticDoc, [i]);
      pdfDoc.addPage(staticPage);
    }

    return await pdfDoc.save();
  };

  // Handle button click to generate, merge, and download merged PDF
  const handleSubmit = async () => {
    const htmlPdf = await generatePdf(); // Generate HTML-based PDF
    const staticPdfUrl = pdf; // Path to your static PDF asset
    const mergedPdf = await mergePdfs(htmlPdf, staticPdfUrl); // Merge both PDFs

    // Create a Blob from the merged PDF and trigger download
    const file = new Blob([mergedPdf], { type: "application/pdf" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(file);
    link.download = "merged.pdf"; // The file to be downloaded
    link.click();
  };

  return (
    <div className="">
      <div ref={htmlRef1} style={{ width: "210mm", margin: "0 auto" }}>
        <div className="p-4 rounded-lg shadow-md">
          <div className="mt-4">
            <h2 className="text-xl font-bold">Package - Essential</h2>
            <p>Name - Balaji Naik</p>
            <p>Phone number - +91 9380032186</p>
            <p>Land type - Regular</p>
            <p>Land dimension - 30x40</p>
            <p>No. of Floors - 3</p>
            <p>Floor height - 10</p>
          </div>

          <div className="mt-4">
            <div className="flex items-center mb-2">
              <span>Site area - 1200 sq ft</span>
            </div>
            <div className="flex items-center mb-2">
              <span>Built-up area - 1080 sq ft</span>
            </div>
            <div className="flex items-center">
              <span>Sump capacity - 5000 liters</span>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold">Estimated Cost</h2>
            <p className="text-4xl font-semibold">26,83,800</p>
          </div>

          <div className="mt-6">
            <p className="text-center">Call us</p>
            <p className="text-center text-lg font-semibold">9606210818</p>
          </div>
        </div>
      </div>

      <div ref={htmlRef2} style={{ width: "210mm", margin: "0 auto" }}>
        <div className="p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Cost Breakdown Details</h2>

          <table className="table-auto w-full">
            <tbody>
              {costBreakdownData.map((item, index) => (
                <tr key={index}>
                  <td className="border p-2">{item.item}</td>
                  <td className="border p-2 text-center">{item.percentage}</td>
                  <td className="border p-2 text-right">{item.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-4">
            <p className="text-lg font-semibold">Total Estimated Cost*</p>
            <p className="text-2xl font-bold text-right"> 61,81,000</p>
          </div>
        </div>
      </div>

      <div ref={htmlRef3} style={{ width: "210mm", margin: "0 auto" }}>
        <h1>This is a sample HTML content for page 3</h1>
        <p>Page 3 content...</p>
      </div>

      <button onClick={handleSubmit}>Generate and Download PDF</button>
    </div>
  );
};

export default Quotation;
