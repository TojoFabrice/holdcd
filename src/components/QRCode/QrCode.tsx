import React from 'react'
import QRCode from 'qrcode.react';

function QrCode() {
    const vcfUrl = '/contact.vcf';
    return (
        <div >
            <h2 style={{marginBottom: '12px', textAlign: 'center'}}>Scannez le QR Code pour enregistrer notre contact</h2>
            <QRCode value={`${window.location.origin}${vcfUrl}`} style={{margin: 'auto'}}/>
        </div>
    )
}

export default QrCode
