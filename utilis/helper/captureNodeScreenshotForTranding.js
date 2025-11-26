import html2canvas from "html2canvas";

async function captureNodeScreenshotForTranding(domNode, state, seterState) {
    if (!domNode) return null;

    // generate canvas from the DOM node
    const canvas = await html2canvas(domNode, {
        useCORS: true,       // allows images from URLs
        backgroundColor: null // keeps transparency
    });

    // convert canvas to image (base64)
    const dataUrl = canvas.toDataURL("image/png");

    seterState([...state, dataUrl]);

    return dataUrl;
}


export default captureNodeScreenshotForTranding;