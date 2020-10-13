import React, {useState} from 'react'
import "./resume.scss"
import {Document, Page, pdfjs } from "react-pdf/dist/esm/entry.webpack"
import resume from './resume.pdf'
const pdfjsVersion="5.0.0"
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;



export default function Resume() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page



    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1)
      }


    return (
        <div className='container'>
            <Document
            file={resume}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError = {(error) => alert('Error while loading page! ' + error.message)}
            
            >
            
            <Page pageNumber={pageNumber}/>
                
            </Document>

        </div>
    )
}
