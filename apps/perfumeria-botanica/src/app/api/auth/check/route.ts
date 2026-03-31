export const dynamic = 'force-dynamic'
import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@saas/db/src/client'

export async function POST(req: NextRequest) {
  try {
    const { token, appSlug } = await req.json()

    if (!token || !appSlug) {
      return NextResponse.json({ hasAccess: false })
    }

    const supabase = createServerClient()
    const { data, error } = await supabase
      .from('purchases')
      .select('id')
      .eq('paypal_order_id', token)
      .eq('app_slug', appSlug)
      .single()

    if (error || !data) {
      return NextResponse.json({ hasAccess: false })
    }

    return NextResponse.json({ hasAccess: true })
  } catch {
    return NextResponse.json({ hasAccess: false })
  }
}
