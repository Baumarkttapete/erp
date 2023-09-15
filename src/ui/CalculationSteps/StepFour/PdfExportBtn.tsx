import React from "react";
import { PDFDocument, rgb } from "pdf-lib";
import { Button } from "@mui/material";
import { useTheme } from "../../../theme/ThemeProvider";
import logoDark from "../../../img/logoDark.png";

const PdfExportBtn: React.FC<{ data: string }> = ({ data }) => {
  const { theme, setTheme, fontSize, setFontSize } = useTheme();

  async function createPdf() {
    // Erstellen eines neuen leeren PDF-Dokuments
    const pdfDoc = await PDFDocument.create();

    // Hinzufügen einer neuen Seite zum PDF-Dokument
    const page = pdfDoc.addPage([400, 800]);

    const logoImageBytes = await fetch(logoDark).then((res) =>
      res.arrayBuffer()
    );
    const logoImageXObject = await pdfDoc.embedPng(logoImageBytes);
    page.drawImage(logoImageXObject, {
      x: 100, // X-Koordinate für die Position des Logos
      y: 730, // Y-Koordinate für die Position des Logos
      width: 200, // Breite des Logos
      height: 70,
    });

    // Zeichnen von Text auf der Seite
    page.drawText(data, {
      x: 50,
      y: 150,
      size: 30,
      color: rgb(0, 0, 0),
    });

    // Exportieren des PDF-Dokuments als Uint8Array
    const pdfBytes = await pdfDoc.save();

    // Zum Herunterladen des PDFs können Sie eine geeignete Methode verwenden, z. B.
    // window.URL.createObjectURL und <a> Element oder Bibliotheken wie file-saver
    // Hier ein einfaches Beispiel mit window.URL.createObjectURL:
    const pdfBlob = new Blob([pdfBytes], { type: "application/pdf" });
    const pdfUrl = URL.createObjectURL(pdfBlob);

    // Hier wird das PDF geöffnet, kann jedoch in einer Download- oder Druckaktion verwendet werden
    window.open(pdfUrl, "_blank");
  }

  return (
    <Button
      sx={{
        backgroundColor: theme.primary,
        color: " white",
        width: "150px",
        margin: "20px auto 0 auto",
        "&:hover": {
          opacity: "0.8",
          backgroundColor: theme.primary,
        },
      }}
      onClick={() => createPdf()}
    >
      Export as PDF
    </Button>
  );
};

export default PdfExportBtn;
