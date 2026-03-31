'use client'
import React, { useState, useEffect } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card'
import { Button } from '../components/Button'
import { Footer } from '../components/Footer'

export interface CalculatorField {
  id: string
  label: string
  type: 'number' | 'select' | 'text'
  unit?: string
  placeholder?: string
  options?: { value: string; label: string }[]
  min?: number
  max?: number
  step?: number
  defaultValue?: string | number
}

export interface CalculatorOutput {
  label: string
  value: string | number
  unit?: string
  highlight?: boolean
  warning?: boolean
}

interface SavedCalc {
  id: string
  name: string
  inputs: Record<string, any>
  outputs: Record<string, any>
  created_at: string
}

interface DashboardTemplateProps {
  title: string
  emoji: string
  tagline: string
  accentColor: string
  appSlug: string
  fields: CalculatorField[]
  calculate: (inputs: Record<string, any>) => CalculatorOutput[]
  description: string
}

export function DashboardTemplate({
  title,
  emoji,
  tagline,
  accentColor,
  appSlug,
  fields,
  calculate,
  description,
}: DashboardTemplateProps) {
  const [inputs, setInputs] = useState<Record<string, any>>(() => {
    const defaults: Record<string, any> = {}
    fields.forEach((f) => {
      defaults[f.id] = f.defaultValue ?? (f.type === 'number' ? 0 : f.options?.[0]?.value ?? '')
    })
    return defaults
  })
  const [outputs, setOutputs] = useState<CalculatorOutput[]>([])
  const [savedCalcs, setSavedCalcs] = useState<SavedCalc[]>([])
  const [saveName, setSaveName] = useState('')
  const [saving, setSaving] = useState(false)
  const [saveMsg, setSaveMsg] = useState('')
  const [hasAccess, setHasAccess] = useState(false)
  const [checking, setChecking] = useState(true)

  useEffect(() => {
    // Check access via URL token or localStorage
    const params = new URLSearchParams(window.location.search)
    const token = params.get('token') || localStorage.getItem(`access_${appSlug}`)
    fetch('/api/auth/check', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token, appSlug }),
    })
      .then((r) => r.json())
      .then((d) => {
        setHasAccess(d.hasAccess ?? true)
        setChecking(false)
        if (d.hasAccess ?? true) loadSavedCalcs()
      })
      .catch(() => {
        // If auth check fails (no backend), allow access for demo
        setHasAccess(true)
        setChecking(false)
        loadSavedCalcs()
      })
  }, [appSlug])

  const loadSavedCalcs = async () => {
    const res = await fetch(`/api/calculations?appSlug=${appSlug}`)
    if (res.ok) {
      const data = await res.json()
      setSavedCalcs(data.calculations || [])
    }
  }

  const handleCalculate = () => {
    const results = calculate(inputs)
    setOutputs(results)
  }

  const handleSave = async () => {
    setSaving(true)
    const res = await fetch('/api/calculations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        appSlug,
        name: saveName || `Cálculo ${new Date().toLocaleDateString('es-ES')}`,
        inputs,
        outputs,
      }),
    })
    if (res.ok) {
      setSaveMsg('¡Guardado correctamente!')
      loadSavedCalcs()
    } else {
      setSaveMsg('Error al guardar.')
    }
    setSaving(false)
    setTimeout(() => setSaveMsg(''), 3000)
  }

  const loadCalc = (calc: SavedCalc) => {
    setInputs(calc.inputs)
    setOutputs(Object.entries(calc.outputs).map(([k, v]) => ({ label: k, value: String(v) })))
  }

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full" />
      </div>
    )
  }

  if (!hasAccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 bg-white rounded-2xl shadow-lg max-w-md">
          <div className="text-5xl mb-4">🔒</div>
          <h2 className="text-2xl font-bold mb-2">Acceso Restringido</h2>
          <p className="text-gray-600 mb-6">Necesitas comprar acceso para usar esta calculadora.</p>
          <a
            href="/checkout"
            style={{ backgroundColor: accentColor }}
            className="inline-block text-white font-bold px-8 py-3 rounded-xl hover:opacity-90 transition-opacity"
          >
            Comprar Acceso por 4,99€
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dashboard header */}
      <header style={{ backgroundColor: accentColor }} className="text-white py-6">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="/" className="flex items-center gap-2 font-bold text-xl">
              <span>{emoji}</span>
              <span>{title}</span>
            </a>
            <a href="/" className="text-sm opacity-80 hover:opacity-100 border border-white/30 px-3 py-1 rounded-lg">
              🏠 Blog
            </a>
          </div>
          <button
            onClick={() => fetch('/api/auth/logout', { method: 'POST' }).then(() => window.location.href = '/')}
            className="text-sm opacity-80 hover:opacity-100"
          >
            Salir
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">{emoji} Calculadora — {title}</h1>
          <p className="text-gray-600 mt-1">{description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Calculator */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Parámetros de Entrada</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {fields.map((field) => (
                    <div key={field.id}>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {field.label} {field.unit && <span className="text-gray-400">({field.unit})</span>}
                      </label>
                      {field.type === 'select' ? (
                        <select
                          value={inputs[field.id]}
                          onChange={(e) => setInputs((prev) => ({ ...prev, [field.id]: e.target.value }))}
                          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        >
                          {field.options?.map((opt) => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                          ))}
                        </select>
                      ) : (
                        <div className="relative">
                          <input
                            type={field.type}
                            value={inputs[field.id]}
                            onChange={(e) => setInputs((prev) => ({ ...prev, [field.id]: field.type === 'number' ? parseFloat(e.target.value) || 0 : e.target.value }))}
                            placeholder={field.placeholder}
                            min={field.min}
                            max={field.max}
                            step={field.step ?? (field.type === 'number' ? 0.01 : undefined)}
                            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                          />
                          {field.unit && (
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">{field.unit}</span>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <Button
                  onClick={handleCalculate}
                  className="mt-6 w-full"
                  size="lg"
                  style={{ backgroundColor: accentColor }}
                >
                  Calcular →
                </Button>
              </CardContent>
            </Card>

            {/* Results */}
            {outputs.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Resultados</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {outputs.map((out, i) => (
                      <div
                        key={i}
                        className={`p-4 rounded-xl ${out.warning ? 'bg-red-50 border border-red-200' : out.highlight ? 'bg-blue-50 border border-blue-200' : 'bg-gray-50'}`}
                      >
                        <div className="text-sm text-gray-600">{out.label}</div>
                        <div className={`text-2xl font-bold mt-1 ${out.warning ? 'text-red-700' : out.highlight ? 'text-blue-700' : 'text-gray-900'}`}>
                          {out.value} {out.unit && <span className="text-base font-normal">{out.unit}</span>}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Save */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex gap-3">
                      <input
                        type="text"
                        value={saveName}
                        onChange={(e) => setSaveName(e.target.value)}
                        placeholder="Nombre del cálculo..."
                        className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                      <Button onClick={handleSave} disabled={saving} variant="outline">
                        {saving ? 'Guardando...' : '💾 Guardar'}
                      </Button>
                    </div>
                    {saveMsg && <p className="text-sm text-green-600 mt-2">{saveMsg}</p>}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Saved calculations */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Mis Cálculos Guardados</CardTitle>
              </CardHeader>
              <CardContent>
                {savedCalcs.length === 0 ? (
                  <p className="text-gray-500 text-sm text-center py-8">
                    Aún no tienes cálculos guardados.<br />Haz tu primer cálculo y guárdalo.
                  </p>
                ) : (
                  <div className="space-y-3">
                    {savedCalcs.map((calc) => (
                      <button
                        key={calc.id}
                        onClick={() => loadCalc(calc)}
                        className="w-full text-left p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors"
                      >
                        <div className="font-medium text-gray-900 text-sm">{calc.name}</div>
                        <div className="text-xs text-gray-500 mt-1">
                          {new Date(calc.created_at).toLocaleDateString('es-ES')}
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer title={title} tagline={tagline} />
    </div>
  )
}
