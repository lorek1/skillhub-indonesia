import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Validate required fields
    const { nama, whatsapp, consent } = data;
    
    if (!nama || !whatsapp || !consent) {
      return NextResponse.json(
        { error: 'Semua field wajib diisi' },
        { status: 400 }
      );
    }

    // Validate WhatsApp format
    const phoneRegex = /^(\+62|62|0)[0-9]{9,12}$/;
    if (!phoneRegex.test(whatsapp)) {
      return NextResponse.json(
        { error: 'Format nomor WhatsApp tidak valid' },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send WhatsApp message confirmation
    // 3. Add to CRM/email marketing platform
    // 4. Send notification to admin
    
    console.log('New lead submitted:', {
      nama,
      whatsapp,
      timestamp: new Date().toISOString(),
    });

    // For now, just return success
    // In production, integrate with your database and email service
    return NextResponse.json(
      { 
        success: true,
        message: 'Pendaftaran berhasil! Silakan cek email Anda.',
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing lead submission:', error);
    return NextResponse.json(
      { error: 'Terjadi kesalahan server' },
      { status: 500 }
    );
  }
}
