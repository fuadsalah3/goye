import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const cvDir = path.join(process.cwd(), "src", "mycv");
    const files = fs.readdirSync(cvDir).filter((f) => f !== ".gitkeep");

    if (files.length === 0) {
      return NextResponse.json({ error: "No CV found" }, { status: 404 });
    }

    const filePath = path.join(cvDir, files[0]);
    const ext = path.extname(filePath).toLowerCase();
    const buffer = fs.readFileSync(filePath);

    const contentType: Record<string, string> = {
      ".pdf": "application/pdf",
      ".doc": "application/msword",
      ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    };

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        "Content-Type": contentType[ext] || "application/octet-stream",
        "Content-Disposition": `attachment; filename="${encodeURIComponent(files[0])}"`,
        "Content-Length": buffer.length.toString(),
        "Cache-Control": "no-store",
      },
    });
  } catch {
    return NextResponse.json({ error: "Failed to download CV" }, { status: 500 });
  }
}
