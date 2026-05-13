# Guia de Deploy Automático (CI/CD)

Este projeto utiliza o **GitHub Actions** para realizar o deploy automático do site (React + Vite) diretamente para a hospedagem **Hostinger** via FTP.

## Como funciona

Sempre que um novo código for enviado (via `git push`) para a branch `master`, o GitHub Actions (configurado em `.github/workflows/deploy.yml`) irá:
1. Baixar o código mais recente do repositório.
2. Instalar as dependências do Node.js (`npm install`).
3. Compilar o projeto para produção (`npm run build`), o que gera a pasta final `dist/`.
4. Enviar e sincronizar apenas o conteúdo da pasta `dist/` com o servidor de hospedagem via FTP.

## Credenciais Necessárias (GitHub Secrets)

Para o GitHub ter autorização de acesso ao servidor, o repositório deve estar configurado com as seguintes "Secrets" em **Settings > Secrets and variables > Actions**:

- `FTP_SERVER`: O endereço do servidor FTP da Hostinger (Ex: `ftp.seudominio.com.br` ou o IP direto do servidor).
- `FTP_USERNAME`: O usuário da conta FTP (Ex: `u123456789`).
- `FTP_PASSWORD`: A senha da conta FTP.

> **⚠️ Importante:** Ao colar as credenciais, tenha certeza absoluta de não copiar espaços em branco extras, senão a conexão será recusada.

## Caminho e Destino dos Arquivos (`server-dir`)

No arquivo `deploy.yml`, usamos o comando `server-dir: ./`. Isso significa que o GitHub vai "despejar" os arquivos exatamente na raiz do usuário FTP conectado.

Para que tudo funcione corretamente e nenhuma pasta duplicada (ex: `public_html/public_html`) seja criada:
1. Ao configurar o usuário de FTP no painel da **Hostinger**.
2. Garanta que o campo **Diretório (Directory)** aponte **exatamente** para a pasta onde o site é servido (geralmente `/domains/cristalpocos.com.br/public_html`).

## Solução de Problemas Comuns

### 1. O deploy falha com `FTPError: 530 Login incorrect`
Este erro significa que a Hostinger recusou a senha ou o usuário informado pelo GitHub.
**Como resolver:** Vá ao painel hPanel da Hostinger, redefina a senha na aba de "Contas FTP" e logo em seguida atualize a secret `FTP_PASSWORD` no GitHub. Depois, clique em "Re-run all jobs" na execução que falhou.

### 2. Timeout ou Demora Excessiva em "Sync Files"
Por segurança contra força bruta, o firewall da Hostinger pode bloquear temporariamente o IP do servidor do GitHub Actions por causa das múltiplas conexões simultâneas usadas para transferir arquivos.
**Como resolver:** Não é preciso mudar nada no código. Espere uns 15 minutos para o IP ser liberado pelo firewall da Hostinger e tente clicar em "Re-run jobs" novamente no painel do GitHub.

### 3. Modifiquei uma Imagem (SVG/PNG) mas não atualizou no ar
Pode acontecer devido ao cache agressivo da Hostinger (LiteSpeed) ou do próprio navegador do cliente.
**Como resolver (Cache Buster):** Ao chamar a imagem no código, adicione um sufixo com uma "versão" na URL, como por exemplo: `src="/logo-empresa.svg?v=2"`. Sempre que alterar a imagem de novo, basta mudar para `?v=3`, obrigando o navegador a limpar o cache.
