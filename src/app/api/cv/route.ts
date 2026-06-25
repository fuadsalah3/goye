import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const cvDir = path.join(process.cwd(), "src", "mycv");
  const files = fs.readdirSync(cvDir).filter((f) => f !== ".gitkeep");

  if (files.length === 0) {
    return NextResponse.json({ error: "No CV found" }, { status: 404 });
  }

  const filePath = path.join(cvDir, files[0]);
  const ext = path.extname(filePath).toLowerCase();
  const contentType: Record<string, string> = {
    ".pdf": "application/pdf",
    ".doc": "application/msword",
    ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  };

  const buffer = fs.readFileSync(filePath);

  return new NextResponse(buffer, {
    headers: {
      "Content-Type": contentType[ext] || "application/octet-stream",
      "Content-Disposition": `attachment; filename="cv${ext}"`,
    },
  });
}
