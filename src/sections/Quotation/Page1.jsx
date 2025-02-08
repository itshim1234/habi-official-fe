import React from "react";
import { Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import logo from "../../assets/images/Logo123.png"; // Ensure you have the logo image in your project
import rupee from "../../assets/images/rupee1.png";

// Define styles
const styles = StyleSheet.create({
  page: {
    padding: 40,
    paddingTop: 80,
  },
  section: {
    marginBottom: 20,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  logo: {
    width: 140, // Adjust size as needed
    height: 50,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "right",
  },
  subHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    marginBottom: 5,
  },

  footer: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 20,
  },
});

// Create Document Component
const Page1 = ({
  name,
  phone,
  email,
  sump,
  estimatedCost,
  package1,
  landArea,
  landType,
  floors,
  floorHeight,
  length,
  breadth,
  builtUp,
}) => (
  <Page size="A4" style={styles.page}>
    <View style={[styles.headerContainer]}>
      <View
        style={[
          { width: "65%" },
          { paddingBottom: 20, paddingLeft: 15 },
          {
            borderLeft: "1.5px dashed #c0c0c0",
            borderBottom: "1.5px solid #c0c0c0",
            borderRight: "1.5px dashed #c0c0c0",
            borderDashArray: "10,10",
          },
        ]}
      >
        <Image src={logo} style={styles.logo} />
      </View>
      <View
        style={[
          { width: "35%" },
          {
            borderBottom: "1.5px dashed #c0c0c0",
          },
        ]}
      >
        <Text style={styles.header}>QUOTATION</Text>
      </View>
    </View>

    <View style={[styles.headerContainer]}>
      <View
        style={[
          { width: "65%" },
          { paddingBottom: 40, paddingLeft: 15, paddingTop: 40 },
          {
            borderLeft: "1.5px solid #c0c0c0",
            borderBottom: "1.5px solid #c0c0c0",
            borderRight: "1.5px dashed #c0c0c0",
          },
        ]}
      >
        <Text style={styles.subHeader}>Package - {package1}</Text>
        <Text style={styles.text}>Name - {name}</Text>
        <Text style={styles.text}>Phone number - +91 {phone}</Text>
        <Text style={styles.text}>Land type - {landType}</Text>
        <Text style={styles.text}>
          Land dimension - {length}X{breadth}
        </Text>
        <Text style={styles.text}>No. of Floors - {floors}</Text>
        <Text style={styles.text}>Floor height - {floorHeight}</Text>
      </View>
      <View
        style={[
          { width: "35%" },
          {
            borderBottom: "1.5px dashed #c0c0c0",
          },
        ]}
      ></View>
    </View>

    <View style={[styles.headerContainer]}>
      <View
        style={[
          { width: "65%" },
          { paddingBottom: 40, paddingLeft: 15, paddingTop: 40 },
          {
            borderLeft: "1.5px dashed #c0c0c0",
            borderBottom: "1.5px solid #c0c0c0",
            borderRight: "1.5px solid #c0c0c0",
          },
        ]}
      >
        {[
          { text: `Site area - ${landArea} sq ft` },
          { text: `Built-up area - ${builtUp} sq ft` },
          { text: `Sump capacity - ${sump} liters` },
        ].map((item, index) => (
          <View
            key={index}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 5,
            }}
          >
            <Text style={styles.text}>{item.text}</Text>
          </View>
        ))}
      </View>

      <View
        style={[
          { width: "35%" },
          {
            borderBottom: "1.5px dashed #c0c0c0",
          },
        ]}
      ></View>
    </View>

    <View style={[styles.headerContainer]}>
      <View
        style={[
          { width: "65%" },
          { paddingBottom: 40, paddingLeft: 15, paddingTop: 40 },
          {
            borderLeft: "1.5px solid #c0c0c0",
            borderBottom: "1.5px solid #c0c0c0",
            borderRight: "1.5px dashed #c0c0c0",
          },
        ]}
      >
        <Text style={styles.subHeader}>Estimated Cost</Text>
        <Text style={[styles.text, { fontSize: 22 }]}>
          <Image src={rupee} style={{ width: 15, height: 15 }} />
          {estimatedCost.toLocaleString("en-IN")}
        </Text>
      </View>
      <View
        style={[
          { width: "35%" },
          {
            borderBottom: "1.5px dashed #c0c0c0",
          },
        ]}
      ></View>
    </View>

    <View style={[styles.headerContainer]}>
      <View
        style={[
          { width: "65%" },
          { paddingBottom: 25, paddingLeft: 15, paddingTop: 25 },
          {
            borderLeft: "1.5px dashed #c0c0c0",
            borderRight: "1.5px dashed #c0c0c0",
          },
        ]}
      >
        <Text>Call us</Text>
        <Text>9606210818</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 40,
        }}
      >
        <Text style={styles.text}>NEXT PAGE</Text>
      </View>
    </View>
  </Page>
);

export default Page1;
