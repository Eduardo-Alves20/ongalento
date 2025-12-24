# ongalento

Monorepo gerenciado com **pnpm workspaces**, contendo aplicações e pacotes compartilhados.

## Estrutura

- `apps/api`: API Express simples em TypeScript.
- `apps/web`: App React com Vite.
- `packages/ui`: Componentes React compartilhados.
- `packages/types`: Tipos TypeScript compartilhados.
- `packages/config`: Bases de configuração (ESLint, Prettier, TSConfig).

## Scripts

- `pnpm lint` – roda lint em todos os workspaces.
- `pnpm test` – executa testes (placeholders).
- `pnpm build` – checa tipos/gera builds.
- `pnpm format` – formata arquivos suportados.

## Docker Compose

Um ambiente PostgreSQL para desenvolvimento está disponível via `docker-compose.yml`. Configure variáveis em `.env` (base em `.env.example`) e suba com:

```bash
docker compose up -d
```
