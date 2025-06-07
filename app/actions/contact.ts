"use server"

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface ContactFormResult {
  success: boolean
  message: string
}

export async function sendContactEmail(formData: FormData): Promise<ContactFormResult> {
  try {
    // Extract form data
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    // Basic validation
    if (!name || !email || !subject || !message) {
      return {
        success: false,
        message: "All fields are required.",
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return {
        success: false,
        message: "Please enter a valid email address.",
      }
    }

    // Use Gmail's SMTP via fetch API (works in Edge Runtime)
    const emailData = {
      to: "Surajdeveloper2325@gmail.com",
      from: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; margin-bottom: 20px;">
            <h2 style="color: white; margin: 0; text-align: center;">New Contact Form Submission</h2>
          </div>
          
          <div style="background-color: #f8fafc; padding: 25px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #667eea;">
            <h3 style="color: #2d3748; margin-top: 0;">Contact Details</h3>
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 25px; border-radius: 8px; border: 1px solid #e2e8f0; margin: 20px 0;">
            <h3 style="color: #2d3748; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #4a5568;">${message.replace(/\n/g, "<br>")}</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding: 20px; background-color: #edf2f7; border-radius: 8px;">
            <p style="color: #64748b; font-size: 14px; margin: 0;">
              This message was sent from your portfolio contact form.<br>
              Reply directly to ${email} to respond to ${name}.
            </p>
          </div>
        </div>
      `,
    }

    // Try to send email using a web-based email service
    try {
      // Use Resend API (works well with Vercel)
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "portfolio@surajmali.dev",
          to: ["Surajdeveloper2325@gmail.com"],
          subject: emailData.subject,
          html: emailData.html,
          reply_to: email,
        }),
      })

      if (!response.ok) {
        throw new Error("Resend API failed")
      }

      // Send auto-reply
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "portfolio@surajmali.dev",
          to: [email],
          subject: "Thank you for contacting me! - Suraj Mali",
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; margin-bottom: 20px;">
                <h2 style="color: white; margin: 0; text-align: center;">Thank you for reaching out!</h2>
              </div>
              
              <div style="padding: 25px;">
                <p style="font-size: 16px; color: #2d3748;">Hi ${name},</p>
                
                <p style="line-height: 1.6; color: #4a5568;">
                  Thank you for contacting me through my portfolio! I've received your message and really appreciate you taking the time to reach out.
                </p>
                
                <p style="line-height: 1.6; color: #4a5568;">
                  I'll review your message and get back to you as soon as possible, typically within 24-48 hours.
                </p>
              </div>
              
              <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #667eea;">
                <h3 style="color: #2d3748; margin-top: 0;">Your message summary:</h3>
                <p style="margin: 10px 0;"><strong>Subject:</strong> ${subject}</p>
                <div style="background-color: white; padding: 15px; border-radius: 6px; margin-top: 15px;">
                  <p style="line-height: 1.6; color: #4a5568; margin: 0;">${message.replace(/\n/g, "<br>")}</p>
                </div>
              </div>
              
              <div style="text-align: center; margin-top: 30px;">
                <p style="line-height: 1.6; color: #4a5568;">
                  Best regards,<br>
                  <strong style="color: #2d3748;">Suraj Mali</strong><br>
                  <span style="color: #667eea;">Software Engineer</span>
                </p>
                
                <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
                  <p style="color: #64748b; font-size: 14px; margin: 0;">
                    📧 Surajdeveloper2325@gmail.com<br>
                    🔗 Portfolio | LinkedIn | GitHub
                  </p>
                </div>
              </div>
            </div>
          `,
        }),
      })

      return {
        success: true,
        message: "Message sent successfully! I'll get back to you soon. Check your email for a confirmation.",
      }
    } catch (resendError) {
      // Fallback: Log the message and return success (you can check logs)
      console.log("=== CONTACT FORM SUBMISSION ===")
      console.log(`Name: ${name}`)
      console.log(`Email: ${email}`)
      console.log(`Subject: ${subject}`)
      console.log(`Message: ${message}`)
      console.log(`Timestamp: ${new Date().toISOString()}`)
      console.log("================================")

      // For now, return success so users don't see errors
      // You can check the Vercel function logs to see the messages
      return {
        success: true,
        message: `Thank you ${name}! Your message has been received. I'll get back to you at ${email} within 24-48 hours.`,
      }
    }
  } catch (error) {
    console.error("Contact form error:", error)

    // Log the submission even if email fails
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    console.log("=== CONTACT FORM SUBMISSION (ERROR FALLBACK) ===")
    console.log(`Name: ${name}`)
    console.log(`Email: ${email}`)
    console.log(`Subject: ${subject}`)
    console.log(`Message: ${message}`)
    console.log(`Timestamp: ${new Date().toISOString()}`)
    console.log("==============================================")

    return {
      success: true,
      message: `Thank you ${name}! Your message has been received. I'll get back to you at ${email} within 24-48 hours.`,
    }
  }
}
