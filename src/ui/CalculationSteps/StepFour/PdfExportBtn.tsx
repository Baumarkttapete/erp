import React, { useEffect, useState } from "react";
import {
  PDFViewer,
  PDFDownloadLink,
  Document,
  Page,
  View,
  Image,
  Text,
} from "@react-pdf/renderer";
import { useTheme } from "../../../theme/ThemeProvider";
import logoDark from "../../../img/logoDark.png";
import { UserData } from "../../../models/UserData";
import PdfInfoCard from "./PdfInfoCard";
import { Box, LinearProgress } from "@mui/material";
import SnackbarInfo from "../SnackbarInfo";
import { useIntl } from "react-intl";

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

  const handleShowSnackbar = () => {
    setTimeout(() => {
      setShowSnackbar(true);
    }, 1500);
  };

  const MyDocument = () => (
    <Document>
      <Page size="A4">
        <View>
          <Image src={logoDark} style={{ width: 300, margin: "0 auto" }} />
        </View>

        {isCheckedCost && (
          <View style={{ margin: "20px" }}>
            <PdfInfoCard
              data={[
                {
                  name: intl.formatMessage({ id: "software" }),
                  amount: userData.softwareCost.toFixed(2),
                  unit: " €",
                },
                {
                  name: intl.formatMessage({ id: "service" }),
                  amount: userData.serviceCost.toFixed(2),
                  unit: " €",
                },
                {
                  name: intl.formatMessage({ id: "hardware" }),
                  amount: userData.hardwareCost.toFixed(2),
                  unit: " €",
                },
                {
                  name: intl.formatMessage({ id: "sum" }),
                  amount: (
                    userData.softwareCost +
                    userData.serviceCost +
                    userData.hardwareCost
                  ).toFixed(2),
                  unit: " €",
                },
              ]}
              title={intl.formatMessage({ id: "cost" })}
              infoText={intl.formatMessage({ id: "cost_infotext" })}
            />
          </View>
        )}
        {isCheckedTime && (
          <View style={{ margin: "20px" }}>
            <PdfInfoCard
              data={[
                {
                  name: intl.formatMessage({ id: "prework" }),
                  amount: userData.time.prework.toFixed(1),
                  unit: intl.formatMessage({ id: "months" }),
                },
                {
                  name: intl.formatMessage({ id: "implementation" }),
                  amount: userData.time.implementation.toFixed(1),
                  unit: intl.formatMessage({ id: "months" }),
                },
                {
                  name: intl.formatMessage({ id: "sum" }),
                  amount: (
                    userData.time.implementation + userData.time.prework
                  ).toFixed(1),
                  unit: intl.formatMessage({ id: "months" }),
                },
              ]}
              title={intl.formatMessage({ id: "time" })}
              infoText={intl.formatMessage({ id: "time_infotext" })}
            />
          </View>
        )}
        {isCheckedPersonal && (
          <View style={{ margin: "20px" }}>
            <PdfInfoCard
              data={[
                {
                  name: intl.formatMessage({ id: "intern" }),
                  amount: userData.personal.intern.toFixed(1),
                  unit: intl.formatMessage({ id: "employees" }),
                },
                {
                  name: intl.formatMessage({ id: "extern" }),
                  amount: userData.personal.extern.toFixed(1),
                  unit: intl.formatMessage({ id: "consultants" }),
                },
                {
                  name: intl.formatMessage({ id: "sum" }),
                  amount: (
                    userData.time.implementation + userData.time.prework
                  ).toFixed(1),
                  unit: intl.formatMessage({ id: "persons" }),
                },
              ]}
              title={intl.formatMessage({ id: "personal" })}
              infoText={intl.formatMessage({ id: "personal_infotext" })}
            />
          </View>
        )}

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
