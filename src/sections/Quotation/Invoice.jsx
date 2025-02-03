import React from "react";
import { Document } from "@react-pdf/renderer";
import Page1 from "./Page1"; // Assuming Page1 handles the name, phone, email, and sump
import Page2 from "./Page2"; // Assuming Page2 handles estimatedCost
import Page3 from "./Page3"; // Assuming Page3 handles floors and floorHeight
import Page4 from "./Page4"; // Assuming Page4 handles package1, landArea, and landType

// The Invoice component now accepts all the props and passes them down to the page components
const Invoice = ({
  name,
  phone,
  email,
  sump,
  estimatedCost,
  floors,
  floorHeight,
  package1,
  landArea,
  landType,
}) => (
  <Document>
    {/* Each Page component receives the relevant props */}
    <Page1
      name={name}
      phone={phone}
      email={email}
      sump={sump}
      estimatedCost={estimatedCost}
      package1={package1}
      landArea={landArea}
      landType={landType}
      floors={floors}
      floorHeight={floorHeight}
    />
    <Page2 estimatedCost={estimatedCost} />
    <Page3 floors={floors} floorHeight={floorHeight} />
    <Page4 package1={package1} landArea={landArea} landType={landType} />
  </Document>
);

export default Invoice;
