export async function downloadPdf(file) {

    const filename = "Momento_Cards.pdf";

    let blob;

    // 1) If file is a URL string
    if (typeof file === "string") {
        const res = await fetch(file);
        if (!res.ok) throw new Error("Failed to fetch PDF from URL");
        blob = await res.blob();
    }
    // 2) If file is already Blob/File
    else if (file instanceof Blob) {
        blob = file;
    }
    // 3) If file is ArrayBuffer / Uint8Array
    else if (file instanceof ArrayBuffer) {
        blob = new Blob([file], { type: "application/pdf" });
    } else if (file instanceof Uint8Array) {
        blob = new Blob([file], { type: "application/pdf" });
    } else {
        throw new Error("Unsupported file type for downloadPdf()");
    }

    // Ensure pdf mime
    if (!blob.type) blob = new Blob([blob], { type: "application/pdf" });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename.endsWith(".pdf") ? filename : `${filename}.pdf`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
}
