export function pdflibAddPlaceholder({ pdfDoc, pdfPage, reason, contactInfo, name, location, signingTime, signatureLength, byteRangePlaceholder, subFilter, widgetRect, appName, }: InputType): void;
export type PDFDocument = import('pdf-lib').PDFDocument;
export type InputType = {
    pdfDoc: PDFDocument;
    pdfPage: PDFPage;
    reason: string;
    contactInfo: string;
    name: string;
    location: string;
    signingTime?: Date;
    signatureLength?: number;
    byteRangePlaceholder?: string;
    /**
     * One of SUBFILTER_* from \@signpdf/utils
     */
    subFilter?: string;
    /**
     * [x1, y1, x2, y2] widget rectangle
     */
    widgetRect?: number[];
    /**
     * Name of the application generating the signature
     */
    appName?: string;
};
//# sourceMappingURL=pdflibAddPlaceholder.d.ts.map