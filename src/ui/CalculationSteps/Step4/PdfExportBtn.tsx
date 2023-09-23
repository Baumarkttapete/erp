import React, { useState } from "react";
import {
  PDFViewer,
  PDFDownloadLink,
  Document,
  Page,
  View,
  Image,
} from "@react-pdf/renderer";
import { useTheme } from "../../../theme/ThemeProvider";
import logoDark from "../../../img/logoDark.png";
import { UserData } from "../../../models/UserData";
import PdfInfoCard from "./PdfInfoCard";
import { Box, LinearProgress } from "@mui/material";
import SnackbarInfo from "../SnackbarInfo";
import { useIntl } from "react-intl";
import PdfRiskCard from "./PdfRiskCard";

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
  const intl = useIntl();
  const [showSnackbar, setShowSnackbar] = useState(false);

  const costSum =
    userData.hardwareCost + userData.softwareCost + userData.serviceCost;
  const timeSum = userData.time.prework + userData.time.implementation;
  const personalSum = userData.personal.intern + userData.personal.extern;

  const handleShowSnackbar = () => {
    setTimeout(() => {
      setShowSnackbar(true);
    }, 1500);
  };

  const MyDocument = () => (
    <Document>
      {isCheckedCost && (
        <Page size="A5" orientation="landscape">
          <View>
            <Image src={logoDark} style={{ width: 200, margin: "0 auto" }} />
          </View>

          <View style={{ margin: "20px" }}>
            <PdfInfoCard
              data={[
                {
                  name: intl.formatMessage({ id: "software" }),
                  amount: userData.softwareCost.toFixed(2),
                  unit: " €",
                  percent:
                    ((userData.softwareCost / costSum) * 100).toFixed(0) + "%",
                  color: theme.pie3,
                },
                {
                  name: intl.formatMessage({ id: "service" }),
                  amount: userData.serviceCost.toFixed(2),
                  unit: " €",
                  percent:
                    ((userData.serviceCost / costSum) * 100).toFixed(0) + "%",
                  color: theme.pie2,
                },
                {
                  name: intl.formatMessage({ id: "hardware" }),
                  amount: userData.hardwareCost.toFixed(2),
                  unit: " €",
                  percent:
                    ((userData.hardwareCost / costSum) * 100).toFixed(0) + "%",
                  color: theme.pie1,
                },
                {
                  name: intl.formatMessage({ id: "sum" }),
                  amount: (
                    userData.softwareCost +
                    userData.serviceCost +
                    userData.hardwareCost
                  ).toFixed(2),
                  unit: " €",
                  percent: "100%",
                  color: theme.font,
                },
              ]}
              title={intl.formatMessage({ id: "cost" })}
              infoText={intl.formatMessage({ id: "cost_infotext" })}
            />
          </View>
        </Page>
      )}
      {isCheckedTime && (
        <Page size="A5" orientation="landscape">
          <View>
            <Image src={logoDark} style={{ width: 200, margin: "0 auto" }} />
          </View>
          <View style={{ margin: "20px" }}>
            <PdfInfoCard
              data={[
                {
                  name: intl.formatMessage({ id: "prework" }),
                  amount: userData.time.prework.toFixed(1),
                  unit: intl.formatMessage({ id: "months" }),
                  percent:
                    ((userData.time.prework / timeSum) * 100).toFixed(0) + "%",
                  color: theme.pie4,
                },
                {
                  name: intl.formatMessage({ id: "implementation" }),
                  amount: userData.time.implementation.toFixed(1),
                  unit: intl.formatMessage({ id: "months" }),
                  percent:
                    ((userData.time.implementation / timeSum) * 100).toFixed(
                      0
                    ) + "%",
                  color: theme.pie2,
                },
                {
                  name: intl.formatMessage({ id: "sum" }),
                  amount: (
                    userData.time.implementation + userData.time.prework
                  ).toFixed(1),
                  unit: intl.formatMessage({ id: "months" }),
                  percent: "100%",
                  color: theme.font,
                },
              ]}
              title={intl.formatMessage({ id: "time" })}
              infoText={intl.formatMessage({ id: "time_infotext" })}
            />
          </View>
        </Page>
      )}
      {isCheckedPersonal && (
        <Page size="A5" orientation="landscape">
          <View>
            <Image src={logoDark} style={{ width: 200, margin: "0 auto" }} />
          </View>
          <View style={{ margin: "20px" }}>
            <PdfInfoCard
              data={[
                {
                  name: intl.formatMessage({ id: "intern" }),
                  amount: userData.personal.intern.toFixed(1),
                  unit: intl.formatMessage({ id: "employees" }),
                  percent:
                    ((userData.personal.intern / personalSum) * 100).toFixed(
                      0
                    ) + "%",
                  color: theme.pie1,
                },
                {
                  name: intl.formatMessage({ id: "extern" }),
                  amount: userData.personal.extern.toFixed(1),
                  unit: intl.formatMessage({ id: "consultants" }),
                  percent:
                    ((userData.personal.extern / personalSum) * 100).toFixed(
                      0
                    ) + "%",
                  color: theme.pie2,
                },
                {
                  name: intl.formatMessage({ id: "sum" }),
                  amount: (
                    userData.time.implementation + userData.time.prework
                  ).toFixed(1),
                  unit: intl.formatMessage({ id: "persons" }),
                  percent: "100%",
                  color: theme.font,
                },
              ]}
              title={intl.formatMessage({ id: "personal" })}
              infoText={intl.formatMessage({ id: "personal_infotext" })}
            />
          </View>
        </Page>
      )}

      {isCheckedRisk && (
        <Page size="A4">
          <View>
            <Image src={logoDark} style={{ width: 200, margin: "0 auto" }} />
          </View>
          <View style={{ margin: "20px" }}>
            <PdfRiskCard
              data={[
                {
                  name: intl.formatMessage({ id: "risk_datenmigration" }),
                  amount: userData.risk.datenmigration + "%",
                  infoText: intl.formatMessage({
                    id: "risk_datenmigration_info",
                  }),
                },
                {
                  name: intl.formatMessage({ id: "risk_zeitplan" }),
                  amount: userData.risk.zeitplan + "%",
                  infoText: intl.formatMessage({
                    id: "risk_zeitplan_info",
                  }),
                },
                {
                  name: intl.formatMessage({ id: "risk_anpassungen" }),
                  amount: userData.risk.anpassungen + "%",
                  infoText: intl.formatMessage({
                    id: "risk_anpassungen_info",
                  }),
                },
                {
                  name: intl.formatMessage({ id: "risk_ressourcen" }),
                  amount: userData.risk.ressourcen + "%",
                  infoText: intl.formatMessage({
                    id: "risk_ressourcen_info",
                  }),
                },
                {
                  name: intl.formatMessage({ id: "risk_unternehmensprozesse" }),
                  amount: userData.risk.abbildungProzesse + "%",
                  infoText: intl.formatMessage({
                    id: "risk_unternehmensprozesse_info",
                  }),
                },
                {
                  name: intl.formatMessage({ id: "risk_schnittstellen" }),
                  amount: userData.risk.schnittstellen + "%",
                  infoText: intl.formatMessage({
                    id: "risk_schnittstellen_info",
                  }),
                },
                {
                  name: intl.formatMessage({ id: "risk_anforderungen" }),
                  amount: userData.risk.anforderungenUnklar + "%",
                  infoText: intl.formatMessage({
                    id: "risk_anforderungen_info",
                  }),
                },
                {
                  name: intl.formatMessage({ id: "risk_schulungsaufwand" }),
                  amount: userData.risk.schulungsaufwand + "%",
                  infoText: intl.formatMessage({
                    id: "risk_schulungsaufwand_info",
                  }),
                },
              ]}
              title={intl.formatMessage({ id: "risks" })}
            />
          </View>
        </Page>
      )}
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
          height: "24.5px",
          padding: "6px",
          color: theme.font2,
          fontWeight: "bold",
          textDecoration: "none",
          textAlign: "center",
          margin: "0px auto",
          justifyContent: "center",
        }}
        document={<MyDocument />}
        fileName="erp_project.pdf"
        onClick={handleShowSnackbar}
      >
        {({ blob, url, loading, error }) =>
          loading ? (
            <Box sx={{ width: "100%", margin: "auto 0" }}>
              <LinearProgress
                color="success"
                style={{
                  height: "5px",
                }}
              />
            </Box>
          ) : (
            "PDF herunterladen"
          )
        }
      </PDFDownloadLink>
      <SnackbarInfo
        text={"PDF heruntergeladen"}
        alert={"success"}
        open={showSnackbar}
        onClose={() => {
          setShowSnackbar(false);
        }}
      />
    </>
  );
};

export default PdfExportBtn;
