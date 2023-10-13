import pdfJSWorkerURL from 'pdfjs-dist/build/pdf.worker.min?url';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = pdfJSWorkerURL;
