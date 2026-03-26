export const dynamic = 'force-dynamic'
import { NextResponse } from 'next/server'
export async function GET() {
  return NextResponse.json({ calculations: [] })
}
export async function POST() {
  return NextResponse.json({ calculation: { id: '1', name: 'Guardado', created_at: new Date().toISOString() } })
}
