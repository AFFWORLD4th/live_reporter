import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';

export async function GET() {
  try {
    await connectDB();
    return NextResponse.json({ message: 'Connected to MongoDB successfully!' }, { status: 200 });
  } catch (error: any) {
    console.error('Error connecting to MongoDB:', error);
    return NextResponse.json({ 
      error: 'Failed to connect to MongoDB', 
      details: error.message 
    }, { status: 500 });
  }
}
