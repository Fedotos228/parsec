import nodemailer from 'nodemailer'
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
  fullname: z.string().min(1, 'Numele este obligatoriu'),
  phone: z.string().min(1, 'Telefonul este obligatoriu'),
  email: z.string().email('Email invalid'),
  message: z.string().min(1, 'Mesajul este obligatoriu').max(200),
})

// Transporter-ul e creat o singură dată și reutilizat (warm connection)
let transporter: nodemailer.Transporter | null = null

function getTransporter() {
  if (transporter) return transporter

  transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // SSL
    auth: {
      user: process.env.SMTP_USER,   // ex: contact@parsec.md
      pass: process.env.SMTP_PASS,   // App Password din Google Account
    },
  })

  return transporter
}

export async function POST(req: NextRequest) {
  // 1. Parsează și validează body-ul
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Request body invalid.' }, { status: 400 })
  }

  const result = contactSchema.safeParse(body)
  if (!result.success) {
    return NextResponse.json(
      { error: 'Date invalide.', details: result.error.flatten().fieldErrors },
      { status: 422 }
    )
  }

  const { fullname, phone, email, message } = result.data

  // 2. Verifică că variabilele de env sunt configurate
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.error('SMTP_USER sau SMTP_PASS lipsesc din variabilele de environment.')
    return NextResponse.json(
      { error: 'Serverul de email nu este configurat.' },
      { status: 500 }
    )
  }

  // 3. Trimite email-ul
  try {
    const mail = getTransporter()

    await mail.sendMail({
      from: `"Site Parsec" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL ?? process.env.SMTP_USER,
      replyTo: email,    // Reply direct la persoana care a scris
      subject: `Mesaj nou de la ${fullname}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #000; border-bottom: 2px solid #000; padding-bottom: 12px;">
            Mesaj nou de pe parsec.md
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px 0; color: #666; width: 120px; vertical-align: top;">Nume:</td>
              <td style="padding: 10px 0; font-weight: bold;">${fullname}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #666; vertical-align: top;">Telefon:</td>
              <td style="padding: 10px 0;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #666; vertical-align: top;">Email:</td>
              <td style="padding: 10px 0;">
                <a href="mailto:${email}" style="color: #000;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #666; vertical-align: top;">Mesaj:</td>
              <td style="padding: 10px 0; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
          <p style="margin-top: 30px; font-size: 12px; color: #999;">
            Trimis de pe parsec.md · ${new Date().toLocaleString('ro-RO', { timeZone: 'Europe/Chisinau' })}
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Eroare la trimiterea email-ului:', err)
    return NextResponse.json(
      { error: 'Email-ul nu a putut fi trimis. Încearcă din nou.' },
      { status: 500 }
    )
  }
}
