import React from "react";
import { Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import rupee from "../../assets/images/rupee1.png";

const styles = StyleSheet.create({
  page: { padding: 40 },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  table: { display: "table", width: "100%" },
  tableRow: { flexDirection: "row", paddingVertical: 6 },
  tableCol: { width: "30%" },
  tableCell: { fontSize: 16 },
  rightAlignedCell: {
    textAlign: "right",
    fontSize: 16,
    borderBottom: "1px dashed black",
  },
  leftAlignedCell: {
    textAlign: "left",
    fontSize: 16,
    borderBottom: "1px dashed black",
  },
});

const costBreakdown = [
  { name: "Design Fees", percentage: 1 },
  { name: "Excavation", percentage: 3 },
  { name: "Sand", percentage: 4 },
  { name: "Steel Reinforcement", percentage: 14 },
  { name: "Cement", percentage: 8 },
  { name: "Solid Blocks", percentage: 9 },
  { name: "Stones", percentage: 5 },
  { name: "RMC", percentage: 9 },
  { name: "Formwork", percentage: 3 },
  { name: "Pointing", percentage: 6 },
  { name: "Plumbing", percentage: 7 },
  { name: "Electrical work", percentage: 5 },
  { name: "Exterior Flooring", percentage: 5 },
  { name: "Compound wall", percentage: 4 },
  { name: "Doors & Windows", percentage: 3 },
  { name: "Miscellaneous", percentage: 7 },
  { name: "Internal Flooring", percentage: 7 },
];

const Page2 = ({
  estimatedCost,
  sump,
  sumpCost,
  cost = estimatedCost - sumpCost,
}) => (
  <Page size="A4" style={styles.page}>
    <View style={{ padding: 20, border: "1.5px dashed #c0c0c0" }}>
      <Text style={styles.header}>Cost Breakdown Details</Text>
      <View style={styles.table}>
        {costBreakdown.map((item, index) => (
          <View key={index} style={styles.tableRow}>
            <View style={[styles.tableCol, { width: "50%" }]}>
              <Text style={styles.tableCell}>{item.name}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.leftAlignedCell}>{item.percentage}%</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.rightAlignedCell}>
                <Image src={rupee} style={{ width: 10, height: 10 }} />
                {(cost * (item.percentage / 100)).toFixed(2)}
              </Text>
            </View>
          </View>
        ))}
        <View style={styles.tableRow}>
          <View style={[styles.tableCol, { width: "50%" }]}>
            <Text style={styles.tableCell}>Sump Cost</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.leftAlignedCell}>{sump} Ltr</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.rightAlignedCell}>
              <Image src={rupee} style={{ width: 10, height: 10 }} />
              {sumpCost.toFixed(2)}
            </Text>
          </View>
        </View>
        <View style={[styles.tableRow, { marginTop: 10 }]}>
          <View style={[styles.tableCol, { width: "50%" }]}>
            <Text
              style={[styles.tableCell, { fontSize: 17, fontWeight: "bold" }]}
            >
              Total Estimated Cost*
            </Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}></Text>
          </View>
          <View style={styles.tableCol}>
            <Text
              style={[
                styles.tableCell,
                { fontSize: 18, fontWeight: "bold", textAlign: "right" },
              ]}
            >
              <Image
                src={rupee}
                style={{ width: 14, height: 14, paddingTop: 2 }}
              />
              {estimatedCost.toLocaleString("en-IN")}
            </Text>
          </View>
        </View>
      </View>
    </View>
  </Page>
);

export default Page2;
