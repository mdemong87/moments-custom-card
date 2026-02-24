import fs from 'fs';
import path from 'path';
import { pdfToPng } from 'pdf-to-png-converter';

/**
 * Convert a PDF file to PNG pages
 * @param {string} pdfFilePath - Absolute path to the PDF file
 * @param {Object} options - Optional settings
 * @returns {Promise<Array>} - Array of PNG page info { pageNumber, name, content, path, width, height }
 */
export async function convertPdfToPng(pdfFilePath, options = {}) {
    try {
        // Default output folder
        const outputFolder = options.outputFolder || path.join(process.cwd(), 'public', 'output');

        // Ensure output folder exists
        if (!fs.existsSync(outputFolder)) fs.mkdirSync(outputFolder, { recursive: true });

        // Convert PDF to PNG
        const pngPages = await pdfToPng(pdfFilePath, {
            outputFolder,
            viewportScale: options.viewportScale || 2.0,
            returnPageContent: options.returnPageContent ?? true,
            outputFileMaskFunc: options.outputFileMaskFunc || ((pageNumber) => `page_${pageNumber}.png`),
            processPagesInParallel: options.processPagesInParallel ?? true,
        });

        return pngPages.map((page) => ({
            pageNumber: page.pageNumber,
            name: page.name,
            path: page.path,
            width: page.width,
            height: page.height,
            content: page.content, // Buffer if returnPageContent=true
        }));
    } catch (error) {
        console.error('PDF to PNG conversion error:', error);
        throw error;
    }
}