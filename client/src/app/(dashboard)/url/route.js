// File: app/url/[id]/route.ts
import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req) {
  const url = new URL(req.url);
  const id = url.searchParams.get('id');

  try {
    // Make a request to your server
    const response = await fetch(`http://localhost:8000/api/urls/${id}`, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch URL');
    }

    const data = await response.json();
    const originalUrl = data.originalUrl; // Assuming the server returns an object with a 'url' property

    if (!originalUrl) {
      return new NextResponse('URL not found', { status: 404 });
    }

    // Redirect to the original URL
    return NextResponse.redirect(originalUrl);
  } catch (error) {
    console.error('Error fetching URL:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
