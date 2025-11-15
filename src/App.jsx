import React from 'react'
import Spline from '@splinetool/react-spline'
import { Mail, Phone, ShieldCheck, BadgeCheck, MapPin, Building2, Globe2, Calendar, CheckCircle2, XCircle, KeyRound, BellRing, Activity, HeartPulse, Clock3, Star, Tag } from 'lucide-react'

function Badge({ label, color = 'emerald' }) {
  const colors = {
    emerald: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
    blue: 'bg-blue-50 text-blue-700 ring-blue-200',
    yellow: 'bg-yellow-50 text-yellow-700 ring-yellow-200',
    red: 'bg-red-50 text-red-700 ring-red-200',
    gray: 'bg-gray-50 text-gray-700 ring-gray-200',
    orange: 'bg-orange-50 text-orange-700 ring-orange-200',
    mint: 'bg-teal-50 text-teal-700 ring-teal-200'
  }
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset ${colors[color] || colors.gray}`}>
      {label}
    </span>
  )
}

function StatPill({ label, value, icon: Icon, accent = 'from-sky-50 to-teal-50 text-sky-700' }) {
  return (
    <div className={`flex items-center gap-3 rounded-xl bg-gradient-to-br ${accent} p-4 ring-1 ring-sky-100`}> 
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-gray-100">
        <Icon className="h-5 w-5 text-sky-600" />
      </div>
      <div>
        <div className="text-xs text-gray-500">{label}</div>
        <div className="text-sm font-semibold text-gray-800">{value}</div>
      </div>
    </div>
  )
}

function InfoRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center justify-between gap-3 py-2">
      <div className="flex items-center gap-2 text-gray-500">
        <Icon className="h-4 w-4" />
        <span className="text-xs">{label}</span>
      </div>
      <div className="text-sm font-medium text-gray-800">{value}</div>
    </div>
  )
}

function LevelBar({ label, value, color }) {
  const barColors = {
    green: 'from-emerald-200 to-emerald-400',
    orange: 'from-amber-200 to-amber-400',
    red: 'from-rose-200 to-rose-400'
  }
  const badgeMap = (v) => v <= 14 ? { text: 'Normal', tone: 'emerald' } : v <= 28 ? { text: 'Medium', tone: 'orange' } : { text: 'High', tone: 'red' }
  const badge = badgeMap(value)
  return (
    <div className="rounded-xl bg-white p-4 ring-1 ring-gray-100 shadow-sm">
      <div className="mb-2 flex items-center justify-between">
        <div className="text-sm font-semibold text-gray-800">{label}</div>
        <Badge label={`${value} / 42`} color={color === 'green' ? 'emerald' : color === 'orange' ? 'orange' : 'red'} />
      </div>
      <div className="h-3 w-full rounded-full bg-gray-100">
        <div className={`h-3 rounded-full bg-gradient-to-r ${barColors[color]}`} style={{ width: `${Math.min(100, Math.round((value/42)*100))}%` }} />
      </div>
      <div className="mt-2">
        <Badge label={badge.text} color={badge.tone} />
      </div>
    </div>
  )
}

function Chip({ label, tone = 'emerald' }) {
  const tones = {
    emerald: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
    blue: 'bg-sky-50 text-sky-700 ring-sky-200',
    rose: 'bg-rose-50 text-rose-700 ring-rose-200',
    amber: 'bg-amber-50 text-amber-700 ring-amber-200',
    violet: 'bg-violet-50 text-violet-700 ring-violet-200',
    gray: 'bg-gray-50 text-gray-700 ring-gray-200'
  }
  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset ${tones[tone]}`}>
      <Tag className="h-3.5 w-3.5" />
      {label}
    </span>
  )
}

function MoodEntry({ date, score, tags = [] }) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-100">
      <div>
        <div className="text-xs text-gray-500">{date}</div>
        <div className="mt-1 text-sm font-semibold text-gray-800">Mood Score: {score}</div>
        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map((t, i) => (
            <Chip key={i} label={t.label} tone={t.tone} />
          ))}
        </div>
      </div>
      <div className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-sky-50 to-teal-50 px-3 py-2 text-sky-700 ring-1 ring-sky-100">
        <Activity className="h-4 w-4" />
        <span className="text-xs font-medium">Tracked</span>
      </div>
    </div>
  )
}

export default function App() {
  const user = {
    name: 'Alicia Hart',
    email: 'alicia.hart@myheal.app',
    role: 'Member',
    status: 'Active',
    phone: '+1 (415) 555-0134',
    verified: true,
    subscription: {
      type: 'Premium',
      productId: 'myheal_premium_annual',
      expires: '2026-01-14'
    },
    address: {
      city: 'San Francisco',
      state: 'California',
      country: 'United States'
    },
    system: {
      lastLogin: '2025-11-10 14:32',
      passwordStatus: 'Strong',
      fcmToken: '••••-B9F2-98AS',
      emailVerified: true
    },
    dass21: {
      depression: 12,
      anxiety: 20,
      stress: 31
    },
    mood: {
      overall: 78,
      best: 'Morning Routines',
      period: 'Last 30 days',
      positives: ['Sleep Quality', 'Hydration', 'Mindfulness'],
      negatives: ['Workload', 'Social Media', 'Late Meals']
    },
    journal: [
      { date: 'Nov 10, 2025 • 9:12 AM', score: 82, tags: [ { label: 'Stress Level: Low', tone: 'emerald' }, { label: 'Interaksi Sosial: Baik', tone: 'blue' } ] },
      { date: 'Nov 09, 2025 • 7:41 PM', score: 68, tags: [ { label: 'Tidur: 6h', tone: 'amber' }, { label: 'Aktivitas Fisik: Moderate', tone: 'violet' } ] },
      { date: 'Nov 08, 2025 • 6:02 PM', score: 74, tags: [ { label: 'Stress Level: Medium', tone: 'amber' }, { label: 'Interaksi Sosial: Kurang', tone: 'rose' } ] },
      { date: 'Nov 07, 2025 • 8:55 AM', score: 90, tags: [ { label: 'Meditasi: 15m', tone: 'emerald' }, { label: 'Energi: Tinggi', tone: 'blue' } ] },
      { date: 'Nov 06, 2025 • 10:24 PM', score: 60, tags: [ { label: 'Lembur', tone: 'rose' }, { label: 'Kafein: Tinggi', tone: 'rose' } ] }
    ]
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero with Spline cover */}
      <div className="relative h-64 w-full overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-white/90 pointer-events-none" />
        <div className="relative mx-auto flex h-full max-w-7xl items-end px-6 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs text-sky-700 ring-1 ring-sky-200 backdrop-blur">
              <HeartPulse className="h-4 w-4" />
              MyHeal • User Detail
            </div>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900">User Profile</h1>
            <p className="mt-1 text-sm text-gray-600">Calm, professional overview of member data and wellbeing insights</p>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Left column */}
          <div className="space-y-6">
            {/* User Profile Overview */}
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
              <div className="flex items-start gap-4">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl bg-gradient-to-br from-sky-200 to-teal-200 ring-1 ring-sky-100">
                  <div className="absolute inset-0 flex items-center justify-center text-2xl font-semibold text-sky-700">AH</div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg font-semibold text-gray-900">{user.name}</h2>
                    {user.verified && <BadgeCheck className="h-5 w-5 text-sky-600" />}
                  </div>
                  <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-gray-600">
                    <span className="inline-flex items-center gap-1"><Mail className="h-4 w-4" />{user.email}</span>
                    <span className="mx-1 hidden h-1 w-1 rounded-full bg-gray-300 align-middle sm:inline-block" />
                    <span className="inline-flex items-center gap-1"><Phone className="h-4 w-4" />{user.phone}</span>
                  </div>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <Badge label={user.role} color="blue" />
                    <Badge label={user.status} color="emerald" />
                    <Badge label={user.verified ? 'Verified' : 'Unverified'} color={user.verified ? 'emerald' : 'red'} />
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200"><ShieldCheck className="h-3.5 w-3.5" />Security</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Address Information */}
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-gray-900">Address Information</h3>
                <span className="text-xs text-gray-500">Primary</span>
              </div>
              <div className="space-y-2">
                <InfoRow icon={MapPin} label="City" value={user.address.city} />
                <InfoRow icon={Building2} label="State" value={user.address.state} />
                <InfoRow icon={Globe2} label="Country" value={user.address.country} />
              </div>
            </div>

            {/* Mood Analysis */}
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-gray-900">Mood Analysis</h3>
                <span className="text-xs text-gray-500">Insights</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <StatPill label="Overall Mood Score" value={`${user.mood.overall}%`} icon={Star} />
                <StatPill label="Best Performance" value={user.mood.best} icon={Activity} />
                <StatPill label="Period" value={user.mood.period} icon={Calendar} />
              </div>
              <div className="mt-5">
                <div className="text-xs font-medium text-gray-500">Positive Factors</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {user.mood.positives.map((p, i) => <Chip key={i} label={p} tone="emerald" />)}
                </div>
              </div>
              <div className="mt-4">
                <div className="text-xs font-medium text-gray-500">Negative Factors</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {user.mood.negatives.map((n, i) => <Chip key={i} label={n} tone="rose" />)}
                </div>
              </div>
            </div>
          </div>

          {/* Middle column */}
          <div className="space-y-6">
            {/* System Information */}
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-gray-900">System Information</h3>
                <span className="text-xs text-gray-500">Account</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-gradient-to-br from-sky-50 to-teal-50 p-4 ring-1 ring-sky-100">
                  <div className="text-xs text-gray-500">Last Login</div>
                  <div className="mt-1 flex items-center gap-2 text-sm font-semibold text-gray-800"><Clock3 className="h-4 w-4 text-sky-600" />{user.system.lastLogin}</div>
                </div>
                <div className="rounded-xl bg-gradient-to-br from-sky-50 to-teal-50 p-4 ring-1 ring-sky-100">
                  <div className="text-xs text-gray-500">Password Status</div>
                  <div className="mt-1 flex items-center gap-2 text-sm font-semibold text-gray-800"><KeyRound className="h-4 w-4 text-sky-600" />{user.system.passwordStatus}</div>
                </div>
                <div className="rounded-xl bg-gradient-to-br from-sky-50 to-teal-50 p-4 ring-1 ring-sky-100">
                  <div className="text-xs text-gray-500">FCM Token</div>
                  <div className="mt-1 flex items-center gap-2 text-sm font-semibold text-gray-800"><BellRing className="h-4 w-4 text-sky-600" />{user.system.fcmToken}</div>
                </div>
                <div className="rounded-xl bg-gradient-to-br from-sky-50 to-teal-50 p-4 ring-1 ring-sky-100">
                  <div className="text-xs text-gray-500">Email Verified</div>
                  <div className="mt-1 flex items-center gap-2 text-sm font-semibold text-gray-800">{user.system.emailVerified ? <><CheckCircle2 className="h-4 w-4 text-emerald-600" />Yes</> : <><XCircle className="h-4 w-4 text-rose-600" />No</>}</div>
                </div>
              </div>
            </div>

            {/* Assessment Results (DASS-21) */}
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-gray-900">Assessment Results (DASS-21)</h3>
                <span className="text-xs text-gray-500">Clinical Overview</span>
              </div>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                <LevelBar label="Depression" value={user.dass21.depression} color="green" />
                <LevelBar label="Anxiety" value={user.dass21.anxiety} color="orange" />
                <LevelBar label="Stress" value={user.dass21.stress} color="red" />
              </div>
            </div>

            {/* Subscription Information */}
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-gray-900">Subscription Information</h3>
                <span className="text-xs text-gray-500">Billing</span>
              </div>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                <StatPill label="Subscription Type" value={user.subscription.type} icon={ShieldCheck} />
                <StatPill label="Product ID" value={user.subscription.productId} icon={BadgeCheck} />
                <StatPill label="Expiration" value={user.subscription.expires} icon={Calendar} />
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            {/* Mood Journal History */}
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-gray-900">Mood Journal History</h3>
                <span className="text-xs text-gray-500">Last entries</span>
              </div>
              <div className="max-h-[560px] space-y-3 overflow-auto pr-1">
                {user.journal.map((j, i) => (
                  <MoodEntry key={i} date={j.date} score={j.score} tags={j.tags} />
                ))}
              </div>
            </div>

            {/* Gentle gradient card */}
            <div className="rounded-2xl bg-gradient-to-br from-[#B4C5E4] to-[#A8D8C9] p-6 text-sky-900 shadow-sm ring-1 ring-sky-100">
              <div className="flex items-center gap-3">
                <HeartPulse className="h-10 w-10" />
                <div>
                  <div className="text-sm font-semibold">Wellness Tip</div>
                  <p className="mt-1 text-sm/6 text-sky-900/80">Consistent sleep and mindful breaks improve your anxiety and stress scores over time.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
