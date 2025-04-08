import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Path to our submissions file
const dataFilePath = path.join(process.cwd(), 'src/data/submissions.json');

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
    
    // Read existing submissions
    let submissions = [];
    try {
      if (fs.existsSync(dataFilePath)) {
        const fileData = fs.readFileSync(dataFilePath, 'utf8');
        submissions = JSON.parse(fileData);
      }
    } catch (error) {
      console.error('Error reading submissions file:', error);
    }
    
    // Add new submission with ID and timestamp
    const newSubmission = {
      id: Date.now().toString(),
      ...body,
      date: new Date().toISOString(),
    };
    
    // Add to submissions array
    submissions.push(newSubmission);
    
    // Write back to file
    fs.writeFileSync(dataFilePath, JSON.stringify(submissions, null, 2), 'utf8');
    
    return NextResponse.json({ success: true }, { status: 201 });
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
    // This endpoint will be used by the admin page to fetch submissions
    if (!fs.existsSync(dataFilePath)) {
      return NextResponse.json([], { status: 200 });
    }
    
    const fileData = fs.readFileSync(dataFilePath, 'utf8');
    const submissions = JSON.parse(fileData);
    
    return NextResponse.json(submissions, { status: 200 });
  } catch (error) {
    console.error('Error fetching submissions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch submissions' },
      { status: 500 }
    );
  }
}
