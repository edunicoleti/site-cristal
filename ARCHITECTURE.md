# Cristal Poços — Documentação Técnica do Projeto

**Status:** Em produção no Netlify  
**Domínio temporário:** `cristalpocos.netlify.app`  
**Domínio oficial futuro:** `www.cristalpocos.com.br`  
**Última atualização:** Abril 2026

---

## 📋 Índice

1. [Stack Tecnológico](#stack-tecnológico)
2. [Estrutura do Projeto](#estrutura-do-projeto)
3. [Componentes Principais](#componentes-principais)
4. [Configuração de URLs e Assets](#configuração-de-urls-e-assets)
5. [Padrões de Desenvolvimento](#padrões-de-desenvolvimento)
6. [Scripts Úteis](#scripts-úteis)
7. [Processo de Deploy](#processo-de-deploy)
8. [Guia de Manutenção](#guia-de-manutenção)
9. [Histórico de Decisões](#histórico-de-decisões)

---

## Stack Tecnológico

### Frontend
- **Framework:** React 18+ com TypeScript
- **Build Tool:** Vite 6.3.5
- **Styling:** Tailwind CSS + Tailwind Vite plugin
- **Routing:** React Router (v7+)
- **Animações:** Framer Motion v12 (`motion/react`)
- **Icons:** lucide-react
- **Node:** 18+ (recomendado 20+)

### Deployment
- **Hosting:** Netlify (gratuito com deploy automático)
- **CI/CD:** GitHub Actions automático no merge para `master`
- **Versionamento:** Git com GitHub

### Ferramentas de Desenvolvimento
- **Package Manager:** npm
- **Linting/Format:** (setup local recomendado)
- **Screenshot/Preview:** Vite preview server

---

## Estrutura do Projeto

```
cristal-pocos/
├── src/
│   ├── app/
│   │   ├── components/          # Componentes reutilizáveis
│   │   │   ├── ProjectGallery.tsx     # Galeria de 32 fotos com lightbox
│   │   │   ├── Partners.tsx           # Grid de logos de parceiros
│   │   │   ├── Layout.tsx             # Wrapper de layout com nav/footer
│   │   │   ├── Header.tsx             # Navegação principal (sticky)
│   │   │   ├── SEOHead.tsx            # Meta tags dinâmicas
│   │   │   ├── FAQ.tsx                # Accordion de perguntas
│   │   │   ├── Testimonials.tsx       # Slider de depoimentos
│   │   │   ├── Timeline.tsx           # Linha do tempo de história
│   │   │   ├── DrillAnimations.tsx    # Componentes SVG (ainda no repo, não usado)
│   │   │   └── ...
│   │   │
│   │   ├── pages/                # Páginas da aplicação
│   │   │   ├── HomePage.tsx            # Página inicial (hero + stats + CTA)
│   │   │   ├── QuemSomosPage.tsx       # Sobre a empresa (história + pilares)
│   │   │   ├── ServicosPage.tsx        # Serviços (ícones SVG + cards)
│   │   │   ├── ProjetosPage.tsx        # Portfólio com galeria
│   │   │   ├── ContatoPage.tsx         # Formulário e contato
│   │   │   ├── AdminPage.tsx           # Painel de admin (CMS)
│   │   │   └── ...
│   │   │
│   │   ├── hooks/               # Custom React hooks
│   │   │   └── useCountUp.ts    # Animação de números (stats)
│   │   │
│   │   ├── routes.tsx           # Configuração React Router
│   │   └── App.tsx              # Root component
│   │
│   ├── assets/                  # Arquivos estáticos importados
│   │   ├── fundo-hero-cristal.mp4      # Vídeo background
│   │   ├── fundo-hero-cristal-compressed.mp4
│   │   ├── pdc-bit-*.png               # Imagens de ilustração
│   │   └── tricone-bit-*.png
│   │
│   ├── imports/                 # Dados dinâmicos de Figma/CMS
│   │   ├── svg-z6zitnfa74.ts   # SVGs de ícones (Missão/Visão/Valores)
│   │   ├── Home.tsx
│   │   ├── QuemSomos.tsx
│   │   └── Body.tsx
│   │
│   ├── utils/
│   │   └── cms.ts              # Utilitário para dados de projetos (CMS)
│   │
│   └── main.tsx                # Ponto de entrada React
│
├── public/                      # Assets servidos como-estão
│   ├── fotos projetos/         # 32 fotos com nomes SEO (CRÍTICO)
│   │   ├── poco-artesiano-aereo-drone-chapeco-*.jpg
│   │   ├── perfuracao-poco-artesiano-*.jpg
│   │   ├── bomba-submersivel-*.jpg
│   │   └── ... (32 total)
│   │
│   ├── sede-cristal-poços-artesianos-chapecó.png  # Foto da sede
│   ├── favicon.png
│   └── upload.php              # Script FTP (legacy, não usar)
│
├── .claude/
│   ├── launch.json            # Configurações de dev server para Claude Code
│   └── settings.local.json
│
├── .gitignore                 # Exclui dist/, node_modules/, etc.
├── vite.config.ts            # Configuração Vite (base: "/")
├── tsconfig.json             # Configuração TypeScript
├── tailwind.config.js        # Configuração Tailwind
├── package.json              # Dependências e scripts
├── ARCHITECTURE.md           # Este arquivo
└── netlify.toml             # (opcional) Configuração Netlify

```

---

## Componentes Principais

### 1. **ProjectGallery** (`src/app/components/ProjectGallery.tsx`)

**Propósito:** Exibe grid responsivo de 32 fotos com lightbox fullscreen

**Features:**
- Grid: 2 cols mobile → 3 tablet → 4 desktop
- Fotos sem overlays (metadados removidos)
- Lightbox fullscreen com:
  - Navegação por setas (←/→)
  - Teclado (Esc para fechar, ←/→ para navegar)
  - Touch/swipe para mobile (50px+ de movimento)
  - Counter "X / 32" no rodapé
  - Backdrop blur e animações suaves
- Lazy loading de imagens

**URLs críticas:**
```typescript
const BASE = "/fotos%20projetos/";
```

**Fotos:** Nomes SEO-friendly, salvas em `public/fotos projetos/`:
- `poco-artesiano-aereo-drone-chapeco-01.jpg` até `-19.jpg` (19 fotos aéreas)
- `poco-artesiano-aereo-propriedade-rural-01.jpg` até `-02.jpg` (2 fotos propriedade rural)
- `perfuracao-poco-artesiano-interior-sc-01.jpg` até `-02.jpg` (2 fotos interior SC)
- `perfuracao-poco-artesiano-campo-sul-brasil-01.jpg` (1 foto campo)
- `bomba-submersivel-poco-artesiano-instalacao-01.jpg` (1 foto bomba)
- `poco-artesiano-obra-*` (2 fotos obra)
- `poco-artesiano-instalacao-tubulacao-01.jpg` (1 foto tubulação)
- `poco-artesiano-sonda-perfuracao-chapeco-*.jpg` (3 fotos sonda)

### 2. **Partners** (`src/app/components/Partners.tsx`)

**Propósito:** Grid de logos de órgãos/parceiros que reconhecem a Cristal

**Features:**
- Desktop: 3→6 colunas (grid responsivo)
- Mobile: Marquee horizontal (scroll infinito)
- Cards com logo (88px de altura), abbr bold, fullName pequeno
- Background: `bg-[#f6f7f8]`
- Título: "Órgãos que reconhecem nossa atuação"

**Dados:** Array em component (sem CMS)

### 3. **ServicosPage** (`src/app/pages/ServicosPage.tsx`)

**Propósito:** Apresenta serviços de perfuração com ícones SVG e cards

**Estrutura:**
- Seção para cada tipo:
  1. **Perfuração** (Tricone + PDC)
  2. **Instalação** (Bomba + Acessórios)
  3. **Manutenção** (Preventiva + Corretiva)
  4. **Sustentabilidade**

**Ícones SVG Material-style:**
- `TriconeBitIcon()` — viewBox="0 0 64 72" (side-view tricone)
- `PDCBitIcon()` — viewBox="0 0 64 64" (face-view PDC)
- Inline React functions, sem importações externas

**Cards:**
- Sem numeração nos títulos (remover "01 —")
- Sem overlays de "Indicado para"
- Seção "O que fazemos" → dots verdes (`bg-[#16a34a]`)
- Seção "Benefícios" → CheckCircle2 list (lucide-react)
- CTA unified: "Entre em contato agora mesmo e garanta a melhor solução para seu projeto"

### 4. **QuemSomosPage** (`src/app/pages/QuemSomosPage.tsx`)

**Propósito:** História, missão, visão, valores da empresa

**Features:**
- Hero com vídeo background (`fundo-hero-cristal.mp4`)
- Stats com CountUp animation (27 anos, 7000 poços, 24h assistência)
- Narrativa + Foto da sede
- Pilares: Missão, Visão, Valores (com SVGs)

**Foto da sede:**
```typescript
src="/sede-cristal-poços-artesianos-chapecó.png"  // URL sem /cristalpocos/
```
- Placeholder quadrado (`aspect-square`)
- Arquivo: `public/sede-cristal-poços-artesianos-chapecó.png`

### 5. **HomePage** (`src/app/pages/HomePage.tsx`)

**Propósito:** Landing page com hero, diferenciais, CTA

**Seções:**
- Hero com vídeo + headline
- Stats (27 anos, 7000 poços, 24h)
- Diferenciais (card grid)
- Mapa interativo (PI + MT)
- CTA: "Entre em contato agora mesmo..."
- Logos de parceiros

---

## Configuração de URLs e Assets

### Base Path (CRÍTICO para Deploy)

**Vite Config** (`vite.config.ts`):
```typescript
export default defineConfig({
  base: '/',  // Raiz absoluta para Netlify
  // ...
})
```

**Router** (`src/app/routes.tsx`):
```typescript
export const router = createBrowserRouter([
  { path: "/", element: <Layout />, children: [...] }
  // SEM basename
]);
```

### URLs de Assets Públicos

**Padrão:** `/caminho/arquivo`

| Asset | Path | Notas |
|-------|------|-------|
| Fotos projetos | `/fotos%20projetos/nome.jpg` | Espaço codificado como %20 |
| Foto sede | `/sede-cristal-poços-artesianos-chapecó.png` | Acentos OK no public/ |
| Vídeos | `/src/assets/fundo-hero-cristal.mp4` | Importados no componente |

### Importação vs Public

- **`src/assets/`** → Importar em TypeScript (Vite bundla)
  ```typescript
  import fundoVideo from "../../assets/fundo-hero-cristal.mp4";
  ```

- **`public/`** → Referenciar como URL raiz
  ```jsx
  <img src="/sede-cristal-poços-artesianos-chapecó.png" />
  ```

---

## Padrões de Desenvolvimento

### Styling

- **Tailwind CSS** via `@tailwindcss/vite` plugin
- **Cores principais:**
  - Primary Blue: `#137fec` (botões, links, destaques)
  - Orange: `#f97316` (accent, CTA)
  - Dark: `#111418` (texto escuro)
  - Gray: `#617589`, `#6b7280`, etc.

- **Breakpoints:** `sm:`, `md:`, `lg:` (Tailwind padrão)

### Animações

**Framer Motion** (`motion/react`):
```typescript
import { motion, AnimatePresence } from "motion/react";

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
/>

<AnimatePresence>
  {isOpen && <motion.div />}
</AnimatePresence>
```

### Componentes Funcionais

- Sempre TypeScript com tipos explícitos
- Prefer `const Component = () => {}` over `function Component() {}`
- Hooks: `useState`, `useEffect`, `useCallback`, `useRef`
- Memoização com `useCallback` para event handlers pesados

### Estrutura de Páginas

```typescript
export function PageName() {
  return (
    <div className="relative bg-white">
      <SEOHead
        title="Página — Cristal Poços | Descrição"
        description="Meta description"
      />
      
      {/* Seções com motion.div e whileInView */}
      <section>...</section>
      <section>...</section>
    </div>
  );
}
```

### SEO

- Sempre importar `<SEOHead />` no topo de cada página
- Title: "Página — Cristal Poços | Subtítulo"
- Description: ~160 caracteres, com keywords naturais

---

## Scripts Úteis

```bash
# Desenvolvimento
npm run dev              # Inicia Vite dev server (porta 5174 se 5173 em uso)
npm run build            # Build para produção (gera dist/)
npm run preview          # Roda build localmente para testar

# Limpeza
rm -rf dist/            # Remove pasta de build
npm install             # Reinstala dependências
```

**Netlify:**
- Build automático no merge para `master`
- Roda: `npm run build`
- Publica: pasta `dist/`

---

## Processo de Deploy

### 1. Desenvolvimento Local

```bash
npm run dev
# Acessa http://localhost:5174/
```

### 2. Push para GitHub

```bash
git add .
git commit -m "feat: descrição das mudanças"
git push origin main     # Push para main
```

### 3. Merge para Master (Produção)

```bash
git checkout master
git merge main
git push origin master   # Dispara deploy no Netlify
```

### 4. Acompanhar Deploy

- **Netlify Dashboard:** `https://app.netlify.com/sites/cristalpocos/`
- **Aba Deployments:** Ver build em progresso
- **URL temporária:** `https://cristalpocos.netlify.app`

### 5. Deploy para Domínio Oficial (Futuro)

Quando pronto para `www.cristalpocos.com.br`:

1. **Comprar domínio** em registrador (Hostinger, GoDaddy, etc.)
2. **Apontar DNS para Netlify** (instruções no painel Netlify)
3. **Configurar em Netlify:**
   - Domain Settings → Add Custom Domain
   - Aguardar SSL automático (Netlify Let's Encrypt)
4. **Reconfigurar base path se necessário:**
   - Se domínio raiz: `base: '/'` ✅ (já configurado)
   - Se subdomínio: `base: '/'` ✅ (já configurado)

---

## Guia de Manutenção

### Adicionar Nova Foto ao Portfólio

1. **Preparar foto:**
   - Formato: JPG ou PNG
   - Nome: SEO-friendly (ex: `poco-artesiano-rural-chapeco-03.jpg`)
   - Colocar em: `public/fotos projetos/`

2. **Atualizar ProjectGallery.tsx:**
   ```typescript
   const photos = [
     // ... fotos existentes
     { src: "novo-nome.jpg", alt: "Descrição descritiva em português" },
   ];
   ```

3. **Commit e push:**
   ```bash
   git add public/fotos\ projetos/ src/app/components/ProjectGallery.tsx
   git commit -m "feat: adicionar nova foto ao portfólio"
   git push origin main
   git checkout master && git merge main && git push origin master
   ```

### Atualizar Conteúdo de Texto

1. **Editar arquivo de página** (ex: `src/app/pages/HomePage.tsx`)
2. **Testar localmente:** `npm run dev`
3. **Commit, push, merge, deploy** (mesmo fluxo acima)

### Trocar Logos de Parceiros

1. **Partners data:** Em `src/app/components/Partners.tsx`
2. **Array de logos:** Adicionar/remover partner com `{ abbr, fullName, logo }`
3. **Commit e push**

### Corrigir Erros de Ortografia/CMS

1. **Editar página relevante**
2. **npm run dev** para testar
3. **Commit e deploy**

---

## Histórico de Decisões

### ✅ Base Path: `/` (Não `/cristalpocos/`)

**Decisão:** Netlify com base absoluto `/`  
**Por quê:** Simplifica URLs, evita problemas com React Router basename  
**Data:** Abril 2026  
**Impacto:** Todas as URLs de assets e imports devem ser `/arquivo`, não `/cristalpocos/arquivo`

### ✅ ProjectGallery: Array Estático (Não CMS)

**Decisão:** 32 fotos em array hardcoded, não via `getProjects()` CMS  
**Por quê:** Melhor performance, sem dependência externa, fotos como primary content  
**Data:** Abril 2026  
**Impacto:** Manutenção de fotos é direto no componente

### ✅ SVG Icons para Serviços (Não Animações Pesadas)

**Decisão:** ícones SVG Material-style inline, removeu `TriconeBitAnimation`  
**Por quê:** Evita white space gigante, carregamento mais rápido  
**Data:** Abril 2026  
**Impacto:** Cards de serviço mais limpos e responsivos

### ✅ Router sem Basename

**Decisão:** `createBrowserRouter()` sem `basename`  
**Por quê:** Alinha com `base: '/'` no Vite, evita erros de URL matching  
**Data:** Abril 2026  
**Impacto:** Todas as rotas funcionam como `/`, `/quem-somos`, etc.

### ✅ Deploy via GitHub + Netlify Automático

**Decisão:** Workflow: `main` (dev) → `master` (prod) → Netlify auto-deploy  
**Por quê:** CI/CD seguro, fácil de reverter, rastreabilidade git completa  
**Data:** Abril 2026  
**Impacto:** Sempre ter backup, versionamento claro, zero downtime

---

## Contato e Suporte

- **Email:** contato@cristalpocos.com.br (exemplo)
- **WhatsApp:** +55 49 9999-9999 (exemplo)
- **GitHub Repo:** https://github.com/edunicoleti/site-cristal

---

**Última revisão:** Abril 2026  
**Próxima revisão recomendada:** Após primeira publicação em domínio oficial
