import imgDrill1 from "figma:asset/145b06104c62a105d64b89c462a49012380334e9.png";
import imgDrill2 from "figma:asset/e1e020bf3f79d06191993874fdfc207aaa5232e4.png";
import imgDrill3 from "figma:asset/0656843a12860fbdfee4826abc4ceac9143b243e.png";

export interface Project {
  id: string;
  url: string;
  title: string;
  location: string;
  depth: string;
  type: string;
}

const defaultProjects: Project[] = [
  {
    id: "1",
    url: imgDrill1,
    title: "Perfuração em Área Agrícola",
    location: "Chapecó - SC",
    depth: "280m",
    type: "Poço Artesiano",
  },
  {
    id: "2",
    url: imgDrill2,
    title: "Perfuração às Margens do Rio",
    location: "Balsas - MA",
    depth: "340m",
    type: "Aquífero Guarani",
  },
  {
    id: "3",
    url: imgDrill3,
    title: "Operação em Lavoura",
    location: "Cascavel - PR",
    depth: "260m",
    type: "Poço Sedimentar",
  },
  {
    id: "4",
    url: imgDrill1,
    title: "Frota Dupla em Campo",
    location: "Lages - SC",
    depth: "220m",
    type: "Sistema Completo",
  },
  {
    id: "5",
    url: imgDrill2,
    title: "Perfuratriz com Retroescavadeira",
    location: "São Luís - MA",
    depth: "310m",
    type: "Bombeamento Solar",
  },
  {
    id: "6",
    url: imgDrill3,
    title: "Canteiro de Perfuração Rural",
    location: "Xanxerê - SC",
    depth: "175m",
    type: "Sistema Hidráulico",
  },
];

const STORAGE_KEY = "@site-cristal:projects";

export function getProjects(): Project[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      // Seed initial data if nothing is in localStorage
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultProjects));
      return defaultProjects;
    }
    return JSON.parse(stored);
  } catch (error) {
    console.error("Error loading projects from localStorage", error);
    return defaultProjects;
  }
}

export function saveProjects(projects: Project[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
  } catch (error) {
    console.error("Error saving projects to localStorage", error);
  }
}
