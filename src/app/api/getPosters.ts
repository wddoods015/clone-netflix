import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const imagesDirectory = path.join(process.cwd(), 'public/image');
    const imageFiles = fs.readdirSync(imagesDirectory);

    const posters = imageFiles
      .filter((file) => file.match(/^poster_\d+\.(png|jpg|jpeg|gif|webp)$/))
      .map((file, index) => ({
        id: index + 1,
        src: `/image/${file}`,
        alt: `Poster_${index + 1}`,
      }));

    return NextResponse.json({ posters });
  } catch (error) {
    console.error('Error reading files:', error);
    return NextResponse.json({ error: 'Failed to load posters' }, { status: 500 });
  }
}
