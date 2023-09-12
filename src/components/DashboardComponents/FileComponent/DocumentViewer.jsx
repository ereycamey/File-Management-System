import React, { useEffect, useRef } from "react";

const DocumentViewer = ({ url }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    if (iframeRef.current) {
      // Embed the document in an iframe for preview
      iframeRef.current.src = `https://docs.google.com/gview?url=${encodeURIComponent(url)}&embedded=true`;
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

export default DocumentViewer;
