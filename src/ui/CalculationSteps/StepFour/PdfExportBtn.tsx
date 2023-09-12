import React from "react";
import { PDFDocument, rgb } from "pdf-lib";
import { Button } from "@mui/material";

const PdfExportBtn: React.FC<{ data: string }> = ({ data }) => {
  async function createPdf() {
    // Erstellen eines neuen leeren PDF-Dokuments
    const pdfDoc = await PDFDocument.create();

    // Hinzufügen einer neuen Seite zum PDF-Dokument
    const page = pdfDoc.addPage([400, 200]);

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
        backgroundColor: "blue",
        color: " white",
        width: "150px",
        margin: "20px auto 0 auto",
      }}
      onClick={() => createPdf()}
    >
      Export as PDF
    </Button>
  );
};

export default PdfExportBtn;
