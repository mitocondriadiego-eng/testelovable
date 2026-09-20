import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { supabase } from '@/lib/supabase'

export const Route = createFileRoute('/dashboard')({
  component: Dashboard,
})

function Dashboard() {
  const navigate = useNavigate()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate({ to: '/' })
  }

  return (
    <div className="flex flex-1 p-8 justify-center">
      <div className="max-w-5xl w-full flex flex-col gap-8">
        <header className="flex justify-between items-center bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Painel de Controle Escolar</h1>
            <p className="text-sm text-gray-500 mt-1">Ambiente restrito.</p>
          </div>
          <button 
            onClick={handleLogout}
            className="px-5 py-2 text-sm text-red-600 bg-red-50 rounded-lg hover:bg-red-100 font-semibold transition-colors"
          >
            Sair do sistema
          </button>
        </header>

        <main className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <p className="text-gray-700 leading-relaxed">
            Bem-vindo(a)! O sistema identificará automaticamente seu papel (Professora, Diretora ou Merendeira) 
            e apresentará os menus e as turmas a que você tem acesso. O banco de dados e as políticas de 
            segurança (RLS) associadas as escolas, turmas, e merenda serão criados na sequência.
          </p>
        </main>
      </div>
    </div>
  )
}
