import { NextRequest, NextResponse } from 'next/server';
import { saveSubmission, getSubmissions } from '@/lib/supabase';
import { sendEmailNotification } from '@/lib/emailNotification';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.service || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Save submission to Supabase
    const submission = await saveSubmission({
      name: body.name,
      email: body.email,
      phone: body.phone || null,
      service: body.service,
      message: body.message
    });

    // Trigger Email notification to the Principal Architect (1dreamdesignstudioo@gmail.com)
    const emailResult = await sendEmailNotification({
      name: body.name,
      email: body.email,
      phone: body.phone || null,
      service: body.service,
      message: body.message,
      date: body.date || new Date().toISOString()
    });

    return NextResponse.json({ 
      success: true, 
      data: submission,
      email: emailResult
    }, { status: 201 });
  } catch (error) {
    console.error('Error processing contact form submission:', error);
    return NextResponse.json(
      { error: 'Failed to process submission' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Fetch all submissions from Supabase
    const submissions = await getSubmissions();

    return NextResponse.json(submissions, { status: 200 });
  } catch (error) {
    console.error('Error fetching submissions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch submissions' },
      { status: 500 }
    );
  }
}
