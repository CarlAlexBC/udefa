export default async function Home() {
  const res = await fetch('http://localhost:3001/planteles')
  const planteles = await res.json()
  return (
    <main className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">
          Planteles disponibles
        </h1>
        <ul className="space-y-4">
          {planteles.map((p) => (
            <li
              key={p.id}
              className="bg-white p-6 rounded-lg shadow-sm border border-slate-200"
            >
              <h2 className="text-xl font-semibold text-slate-800">
                {p.nombre}
              </h2>
              <p className="text-slate-600 mt-2">{p.descripcion}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}