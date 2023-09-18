import React from "react";
import {
  PDFViewer,
  PDFDownloadLink,
  Document,
  Page,
  View,
  Image,
  Text,
} from "@react-pdf/renderer";
import { Button, Typography } from "@mui/material";
import { useTheme } from "../../../theme/ThemeProvider";
import logoDark from "../../../img/logoDark.png";
import { UserData } from "../../../models/UserData";
import { fontSize } from "../../../theme/Sizes";
import PdfInfoCard from "./PdfInfoCard";

const PdfExportBtn: React.FC<{
  userData: UserData;
  isCheckedCost: boolean;
  isCheckedTime: boolean;
  isCheckedPersonal: boolean;
  isCheckedRisk: boolean;
}> = ({
  userData,
  isCheckedCost,
  isCheckedTime,
  isCheckedPersonal,
  isCheckedRisk,
}) => {
  const { theme } = useTheme();

  const MyDocument = () => (
    <Document>
      <Page size="A4">
        <View>
          <Image src={logoDark} style={{ width: 300, margin: "0 auto" }} />
        </View>
        <View style={{ margin: "20px" }}>
          {isCheckedCost && (
            <PdfInfoCard
              data={[
                {
                  name: "Softwarekosten",
                  amount: userData.softwareCost.toFixed(2),
                  unit: " €",
                },
                {
                  name: "Servicekosten",
                  amount: userData.serviceCost.toFixed(2),
                  unit: " €",
                },
                {
                  name: "HardwareKosten",
                  amount: userData.hardwareCost.toFixed(2),
                  unit: " €",
                },
                {
                  name: "Gesamt",
                  amount: (
                    userData.softwareCost +
                    userData.serviceCost +
                    userData.hardwareCost
                  ).toFixed(2),
                  unit: " €",
                },
              ]}
              title={"Kosten"}
              infoText={"infotext"}
            />
          )}
          {isCheckedTime && (
            <PdfInfoCard
              data={[
                {
                  name: "Vorarbeit",
                  amount: userData.time.prework.toFixed(1),
                  unit: " Monate",
                },
                {
                  name: "Implementierung",
                  amount: userData.time.implementation.toFixed(1),
                  unit: " Monate",
                },
                {
                  name: "Gesamt",
                  amount: (
                    userData.time.implementation + userData.time.prework
                  ).toFixed(1),
                  unit: " Monate",
                },
              ]}
              title={"Dauer des Projekts"}
              infoText={"infotext"}
            />
          )}
          {isCheckedPersonal && (
            <PdfInfoCard
              data={[
                {
                  name: "Intern",
                  amount: userData.personal.intern.toFixed(1),
                  unit: " Mitarbeiter",
                },
                {
                  name: "Extern",
                  amount: userData.personal.extern.toFixed(1),
                  unit: " Berater",
                },
                {
                  name: "Gesamt",
                  amount: (
                    userData.time.implementation + userData.time.prework
                  ).toFixed(1),
                  unit: " Personen",
                },
              ]}
              title={"Mitarbeiter im Kernteam"}
              infoText={"infotext"}
            />
          )}
        </View>
        {isCheckedRisk && (
          <View>
            <Text></Text>
          </View>
        )}
      </Page>
    </Document>
  );

  return (
    <>
      <PDFViewer width={"90%"} height={600} style={{ margin: "20px auto" }}>
        <MyDocument />
      </PDFViewer>
      <PDFDownloadLink
        style={{
          backgroundColor: theme.primary,
          borderRadius: "4px",
          width: "500px",
          color: theme.font2,
          fontWeight: "bold",
          textDecoration: "none",
          textAlign: "center",
          padding: "11px",
          margin: "0px auto",
        }}
        document={<MyDocument />}
        fileName="exported.pdf"
      >
        {({ blob, url, loading, error }) =>
          loading ? "Lade das PDF herunter..." : "PDF herunterladen"
        }
      </PDFDownloadLink>
    </>
  );
};

export default PdfExportBtn;
