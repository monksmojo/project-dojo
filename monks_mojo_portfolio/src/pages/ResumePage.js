import { Document, Page, pdfjs } from "react-pdf";
import resume from "../pdf/resume.pdf";

export default function ResumePage() {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  return (
    <div className="flex justify-center bg-gradient-to-b  from-gray-800 to-indigo-900 py-10">
      <div className="overflow-auto sm:px-10">
        <Document file={resume} options={{ workerSrc: "/pdf.worker.js" }}>
          <Page pageNumber={1} />
        </Document>
      </div>
    </div>
  );
}
