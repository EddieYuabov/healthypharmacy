import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const NOTIFY_EMAIL = 'healthypharmacymarketing@gmail.com';

export async function POST(request: NextRequest) {
  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailAppPassword) {
    return NextResponse.json(
      { error: 'Email service is not configured.' },
      { status: 500 }
    );
  }

  const data = await request.json();

  const {
    firstName,
    lastName,
    phone,
    email,
    currentPharmacy,
    currentPharmacyPhone,
    medications,
    contactMethod,
  } = data;

  if (!firstName || !lastName || !phone || !email || !currentPharmacy || !medications) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
  }

  const html = `
    <h2>New Prescription Transfer Request</h2>
    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Preferred Contact Method:</strong> ${contactMethod || '—'}</p>
    <hr />
    <p><strong>Current Pharmacy:</strong> ${currentPharmacy}</p>
    <p><strong>Current Pharmacy Phone:</strong> ${currentPharmacyPhone || '—'}</p>
    <hr />
    <p><strong>Medications:</strong></p>
    <p>${String(medications).replace(/\n/g, '<br />')}</p>
  `;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    await transporter.sendMail({
      from: `Healthy Pharmacy <${gmailUser}>`,
      to: NOTIFY_EMAIL,
      replyTo: email,
      subject: `New Prescription Transfer Request — ${firstName} ${lastName}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Transfer submission error:', error);
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
  }
}
