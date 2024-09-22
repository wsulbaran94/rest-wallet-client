import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { Resend } from 'resend';

@Injectable()
export class EmailService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: false,
      auth: {
        user: process.env.EMAIL_AUTH_USER,
        pass: process.env.EMAIL_AUTH_PASS,
      },
    });
  }

  async sendMail(to: string, subject: string, text: string, html: string) {
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: to,
      subject: subject,
      text: text,
      html: html,
    };

    return await this.transporter.sendMail(mailOptions);
  }

  async resendMail(
    to: string,
    subject: string,
    text: string,
    html: string,
  ): Promise<void> {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: process.env.EMAIL_FROM,
      subject,
      html,
      text,
    });

    if (error) {
      return console.error({ error });
    }
    console.log({ data });
  }
}
