export const dynamic = 'force-dynamic'
import { NextResponse } from 'next/server'
export async function POST() {
  return NextResponse.json({ success: true, accessToken: 'demo-token', message: 'Acceso activado (modo demo).' })
}
