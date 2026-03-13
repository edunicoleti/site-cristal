import { useState, useEffect } from "react";
import { getProjects, saveProjects, Project } from "../../utils/cms";
import { Edit, Trash, Plus, Save, X } from "lucide-react";
import { toast } from "sonner";

export function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    sessionStorage.getItem("adminAuth") === "true"
  );
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const [projects, setProjects] = useState<Project[]>([]);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    setProjects(getProjects());
  }, []);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch("/upload.php", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setEditingProject({
          ...editingProject!,
          url: data.url,
        });
        toast.success("Imagem enviada com sucesso!");
      } else {
        toast.error(data.error || "Erro ao fazer upload da imagem.");
      }
    } catch (error) {
      console.error("Upload error:", error);
      toast.error("Erro na comunicação com o servidor.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleSave = (projectsToSave: Project[]) => {
    saveProjects(projectsToSave);
    setProjects(projectsToSave);
    window.dispatchEvent(new Event("projectsUpdated"));
    toast.success("Projetos atualizados com sucesso!");
  };

  const handleDelete = (id: string) => {
    if (confirm("Tem certeza que deseja excluir este projeto?")) {
      const updated = projects.filter((p) => p.id !== id);
      handleSave(updated);
    }
  };

  const handleEditSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!editingProject) return;

    if (isAdding) {
      handleSave([
        ...projects,
        { ...editingProject, id: Math.random().toString(36).substr(2, 9) },
      ]);
    } else {
      const updated = projects.map((p) =>
        p.id === editingProject.id ? editingProject : p
      );
      handleSave(updated);
    }

    setEditingProject(null);
    setIsAdding(false);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "admin" && password === "rurikadmin") {
      setIsAuthenticated(true);
      sessionStorage.setItem("adminAuth", "true");
      setLoginError("");
    } else {
      setLoginError("Credenciais inválidas. Tente novamente.");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-md border border-gray-100">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Acesso Restrito
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Painel de Administração. Por favor, faça o login.
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="rounded-md shadow-sm space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Usuário
                </label>
                <input
                  required
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#137fec] focus:border-[#137fec] focus:z-10 sm:text-sm"
                  placeholder="admin"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Senha
                </label>
                <input
                  required
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#137fec] focus:border-[#137fec] focus:z-10 sm:text-sm"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {loginError && (
              <p className="text-red-500 text-sm text-center font-medium">
                {loginError}
              </p>
            )}

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#137fec] hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Entrar no Painel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Gerenciador de Projetos (CMS)
          </h1>
          <button
            onClick={() => {
              setIsAdding(true);
              setEditingProject({
                id: "",
                url: "",
                title: "",
                location: "",
                depth: "",
                type: "",
              });
            }}
            className="flex items-center gap-2 bg-[#137fec] text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          >
            <Plus size={20} />
            Novo Projeto
          </button>
        </div>

        {/* Formulário de Edição/Adição */}
        {(editingProject || isAdding) && (
          <div className="bg-white p-6 rounded-xl shadow-md mb-8 border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">
                {isAdding ? "Adicionar Novo Projeto" : "Editar Projeto"}
              </h2>
              <button
                onClick={() => {
                  setEditingProject(null);
                  setIsAdding(false);
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleEditSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Título do Projeto
                  </label>
                  <input
                    required
                    type="text"
                    value={editingProject?.title || ""}
                    onChange={(e) =>
                      setEditingProject({
                        ...editingProject!,
                        title: e.target.value,
                      })
                    }
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-[#137fec] focus:border-[#137fec]"
                    placeholder="Ex: Perfuração em Área Agrícola"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Imagem (Upload)
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    disabled={isUploading}
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-[#137fec] focus:border-[#137fec] file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:bg-[#137fec] file:text-white hover:file:bg-blue-600 cursor-pointer"
                  />
                  {isUploading && <p className="text-sm text-blue-600 mt-1">Enviando imagem...</p>}
                  {editingProject?.url && !isUploading && (
                    <div className="mt-2">
                      <p className="text-xs text-gray-500 mb-1">Imagem atual:</p>
                      <img src={editingProject.url} alt="Preview" className="h-16 w-24 object-cover rounded-md border border-gray-200" />
                    </div>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Localização
                  </label>
                  <input
                    required
                    type="text"
                    value={editingProject?.location || ""}
                    onChange={(e) =>
                      setEditingProject({
                        ...editingProject!,
                        location: e.target.value,
                      })
                    }
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-[#137fec] focus:border-[#137fec]"
                    placeholder="Ex: Chapecó - SC"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Profundidade
                  </label>
                  <input
                    required
                    type="text"
                    value={editingProject?.depth || ""}
                    onChange={(e) =>
                      setEditingProject({
                        ...editingProject!,
                        depth: e.target.value,
                      })
                    }
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-[#137fec] focus:border-[#137fec]"
                    placeholder="Ex: 280m"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tipo
                  </label>
                  <input
                    required
                    type="text"
                    value={editingProject?.type || ""}
                    onChange={(e) =>
                      setEditingProject({
                        ...editingProject!,
                        type: e.target.value,
                      })
                    }
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-[#137fec] focus:border-[#137fec]"
                    placeholder="Ex: Poço Artesiano"
                  />
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
                >
                  <Save size={20} />
                  Salvar
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Lista de Projetos */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
          <ul className="divide-y divide-gray-200">
            {projects.map((project) => (
              <li
                key={project.id}
                className="p-4 hover:bg-gray-50 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center"
              >
                <div className="flex items-center gap-4">
                  <div className="h-16 w-24 flex-shrink-0 bg-gray-200 rounded-md overflow-hidden">
                    <img
                      src={project.url}
                      alt={project.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">
                      {project.title}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {project.location} • {project.depth} • {project.type}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setEditingProject(project);
                      setIsAdding(false);
                      // Scroll to top to see form
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-md transition"
                    title="Editar"
                  >
                    <Edit size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(project.id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-md transition"
                    title="Excluir"
                  >
                    <Trash size={18} />
                  </button>
                </div>
              </li>
            ))}
            {projects.length === 0 && (
              <p className="p-8 text-center text-gray-500">
                Nenhum projeto encontrado. Adicione um novo projeto.
              </p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
