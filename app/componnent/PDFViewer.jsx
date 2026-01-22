"use client";

import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

// ✅ IMPORTANT: set worker (Next.js friendly)
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function PDFViewer({
    file,
    title = "PDF Preview",
    height = "70vh",
}) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [scale, setScale] = useState(1.1);

    useEffect(() => {
        setPageNumber(1);
    }, [file]);

    const onLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    const canPrev = pageNumber > 1;
    const canNext = numPages ? pageNumber < numPages : false;

    return (
        <div className="w-full rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
            {/* Header */}
            <div className="flex flex-col gap-3 border-b border-slate-200 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm font-semibold text-slate-900">{title}</p>
                    <p className="text-xs text-slate-500">
                        {numPages ? `Page ${pageNumber} of ${numPages}` : "Loading..."}
                    </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                    <button
                        onClick={() => setPageNumber((p) => Math.max(1, p - 1))}
                        disabled={!canPrev}
                        className="rounded-lg bg-white px-3 py-2 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        Prev
                    </button>

                    <button
                        onClick={() => setPageNumber((p) => (numPages ? Math.min(numPages, p + 1) : p))}
                        disabled={!canNext}
                        className="rounded-lg bg-white px-3 py-2 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        Next
                    </button>

                    <div className="mx-1 h-8 w-px bg-slate-200" />

                    <button
                        onClick={() => setScale((s) => Math.max(0.6, Number((s - 0.1).toFixed(2))))}
                        className="rounded-lg bg-white px-3 py-2 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50"
                    >
                        -
                    </button>

                    <span className="min-w-[72px] text-center text-sm font-semibold text-slate-700">
                        {Math.round(scale * 100)}%
                    </span>

                    <button
                        onClick={() => setScale((s) => Math.min(2.2, Number((s + 0.1).toFixed(2))))}
                        className="rounded-lg bg-white px-3 py-2 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50"
                    >
                        +
                    </button>
                </div>
            </div>

            {/* Body */}
            <div
                className="overflow-auto bg-slate-50 p-4"
                style={{ height }}
            >
                <div className="mx-auto w-fit rounded-xl bg-white p-3 shadow-sm ring-1 ring-slate-200">
                    <Document
                        file={file}
                        onLoadSuccess={onLoadSuccess}
                        loading={
                            <div className="animate-pulse space-y-3">
                                <div className="h-5 w-44 rounded bg-slate-200" />
                                <div className="h-[520px] w-[360px] rounded bg-slate-200 sm:w-[560px]" />
                            </div>
                        }
                        error={
                            <div className="rounded-lg border border-rose-200 bg-rose-50 p-4 text-sm text-rose-700">
                                Failed to load PDF. Please check the file/link.
                            </div>
                        }
                    >
                        <Page
                            pageNumber={pageNumber}
                            scale={scale}
                            renderTextLayer={false}
                            renderAnnotationLayer={false}
                        />
                    </Document>
                </div>
            </div>
        </div>
    );
}
