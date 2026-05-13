# Cristal Poços Artesianos - Website Institucional

Este repositório contém o código-fonte do site institucional da **Cristal Poços Artesianos**, desenvolvido com foco em alta performance, UI/UX moderno e otimização para B2B.

## 🛠️ Tecnologias Utilizadas

- **React 18** + **Vite**
- **TypeScript**
- **Tailwind CSS** (Estilização utilitária e responsividade)
- **Framer Motion / Motion for React** (Animações fluidas e interações de UI)
- **Lucide React** (Ícones SVG otimizados)
- **React Router Dom** (Navegação SPA)

## 📂 Estrutura do Projeto

O projeto segue uma arquitetura modular baseada em componentes:

- `src/app/pages/`: Páginas completas (Home, Quem Somos, Serviços, Projetos, Contato).
- `src/app/components/`: Componentes reutilizáveis (Header, Footer, FAQ, WaterCTACard, Partners, ClientLogos).
- `public/`: Assets estáticos (Favicon, logos de clientes, fotos de obras).
- `public/robots.txt` e `public/sitemap.xml`: Configurações de SEO para indexação no Google.

## 🚀 Como Rodar Localmente

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
3. O site estará disponível em `http://localhost:5173`.

## 📦 Deploy Automático (CI/CD)

O deploy é feito **automaticamente** via **GitHub Actions**. Qualquer alteração empurrada (pushed) para a branch `master` será compilada e enviada via FTP para a Hostinger.

### Regras de Deploy
- Não é necessário rodar `npm run build` manualmente para publicar o site. O GitHub Actions cuida de tudo.
- Os arquivos finais são gerados na pasta `dist/` e transferidos para a raiz do servidor (`public_html`).
- **Problemas no Deploy?** Leia o arquivo `DEPLOYMENT.md` na raiz deste projeto. Ele contém soluções para erros de FTP (530) e cache de imagens.

## 📝 Guias de Manutenção Futura

### 1. Adicionar/Remover Logos de Clientes ("Confiam em Cristal Poços")
- Navegue até `src/app/components/ClientLogos.tsx`.
- O array `clients` guarda as informações.
- Para adicionar uma logo com fundo branco (que precise de transparência no site), adicione o parâmetro no objeto: `customClass: "mix-blend-multiply"`.
- Para ajustar tamanhos irregulares de imagens sem distorcer o grid, utilize os overrides de altura do Tailwind: `customClass: "!h-[50px] md:!h-[70px] !max-w-[200px]"`.

### 2. Imagens com Fundo Preto Inesperado?
- Logotipos que já são transparentes mas com a cor **preta** desaparecem em fundos escuros. Adicione a flag `invert: true` no objeto do cliente para o Tailwind automaticamente transformá-lo em branco.

### 3. Problemas com Imagens Antigas (Cache)
Se você trocar uma imagem (ex: `logo.svg`) na pasta `public/` e fazer o push, mas ela não atualizar no celular do cliente:
- O servidor da Hostinger armazena imagens antigas na memória por meses.
- Vá no componente onde a imagem é chamada (ex: `ClientLogos.tsx`).
- Adicione ou aumente a "versão" da imagem diretamente no final do link. Exemplo: De `logo.svg` para `logo.svg?v=2`. Isso obriga todos os celulares e computadores a baixarem a imagem nova instantaneamente.

### 4. Atualização das Texturas de Água (WaterCTA)
A animação de água fluida fica em `src/app/components/WaterCTACard.tsx`. Os blobs animados usam as coordenadas viewBox internas daquele componente. Modificá-los exige alterar o path SVG dos Framer Motions no final do arquivo.

---
*Projeto inicial gerado via design no Figma e refatorado de ponta a ponta para código de produção (SEO, Otimizações, Infra).*