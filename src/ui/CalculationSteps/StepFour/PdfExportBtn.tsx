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
  isCheckedDaten: boolean;
  isCheckedSubDaten1: boolean;
  isCheckedSubDaten2: boolean;
  isCheckedSubDaten3: boolean;
  isCheckedRisiken: boolean;
  isCheckedSubRisiken1: boolean;
  isCheckedSubRisiken2: boolean;
}> = ({
  userData,
  isCheckedDaten,
  isCheckedSubDaten1,
  isCheckedSubDaten2,
  isCheckedSubDaten3,
  isCheckedRisiken,
  isCheckedSubRisiken1,
  isCheckedSubRisiken2,
}) => {
  const { theme } = useTheme();

  const MyDocument = () => (
    <Document>
      <Page size="A4">
        <View>
          <Image src={logoDark} style={{ width: 300, margin: "0 auto" }} />
        </View>
        <View style={{ margin: "20px" }}>
          {isCheckedDaten && (
            <div>
              <Text
                style={{
                  fontSize: fontSize.title,
                  color: theme.font,
                  margin: "10px",
                }}
              >
                Daten
              </Text>
              {isCheckedSubDaten1 && (
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
              {isCheckedSubDaten2 && (
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
              {isCheckedSubDaten3 && (
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
            </div>
          )}
        </View>
        {isCheckedRisiken && (
          <View>
            <Text></Text>
          </View>
        )}
      </Page>
    </Document>
  );

  return (
    <>
      <Button>export PDF</Button>
      <PDFViewer width={400} height={800}>
        <MyDocument />
      </PDFViewer>
      <PDFDownloadLink document={<MyDocument />} fileName="exported.pdf">
        {({ blob, url, loading, error }) =>
          loading ? "Lade das PDF herunter..." : "PDF herunterladen"
        }
      </PDFDownloadLink>
    </>
  );
};

export default PdfExportBtn;
