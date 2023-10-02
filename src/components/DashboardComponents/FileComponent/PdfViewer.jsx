import React, { useEffect, useRef } from "react";

const PdfViewer = ({ url }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    if (iframeRef.current) {
      // Embed the document in an iframe for preview
      // Check if the URL is a PDF, and use Google Docs Viewer accordingly
      const isPdf = url.toLowerCase().endsWith(".pdf");
      if (isPdf) {
        iframeRef.current.src = `https://docs.google.com/gview?url=${encodeURIComponent(
          url
        )}&embedded=true`;
      } else {
        iframeRef.current.src = url;
      }
    }
  }, [url]);

  return (
    <div className="w-100 h-100">
      <iframe
        ref={iframeRef}
        title="Document Viewer"
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
      />
    </div>
  );
};

export default PdfViewer;
