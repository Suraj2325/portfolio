import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ success: false, message: "All fields are required." }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ success: false, message: "Please enter a valid email address." }, { status: 400 })
    }

    // Log the contact form submission
    console.log("=== NEW CONTACT FORM SUBMISSION ===")
    console.log(`Name: ${name}`)
    console.log(`Email: ${email}`)
    console.log(`Subject: ${subject}`)
    console.log(`Message: ${message}`)
    console.log(`Timestamp: ${new Date().toISOString()}`)
    console.log(`IP: ${request.ip || "unknown"}`)
    console.log("===================================")

    // Try to send via webhook to your email (optional)
    try {
      // You can set up a webhook service like Zapier, IFTTT, or n8n
      // to forward these to your email
      if (process.env.WEBHOOK_URL) {
        await fetch(process.env.WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email,
            subject,
            message,
            timestamp: new Date().toISOString(),
          }),
        })
      }
    } catch (webhookError) {
      console.log("Webhook failed, but form submission logged:", webhookError)
    }

    return NextResponse.json({
      success: true,
      message: `Thank you ${name}! Your message has been received. I'll get back to you at ${email} within 24-48 hours.`,
    })
  } catch (error) {
    console.error("Contact API error:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again or contact me directly at Surajdeveloper2325@gmail.com",
      },
      { status: 500 },
    )
  }
}
