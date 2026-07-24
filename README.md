# Weplan — Site Institucional

Repositório do site [weplan.com.br](https://www.weplan.com.br/), empresa de móveis planejados.

## Stack

- **Framework**: [Nuxt 4](https://nuxt.com/) (SSR)
- **UI**: [Bootstrap Vue Next](https://bootstrap-vue-next.github.io/) + Bootstrap 5
- **Fontes**: [Google Fonts](https://fonts.google.com/) (Poppins) via `@nuxtjs/google-fonts`
- **Imagens**: `@nuxt/image` com formatos webp/jpg
- **SEO**: `@nuxtjs/robots`, meta tags Open Graph e Twitter Card
- **Analytics**: Google Tag (gtag), Meta Pixel, Microsoft Clarity
- **Compressão**: h3-compression (Brotli)

## Pré-requisitos

- [Bun](https://bun.sh/)

## Setup

```bash
bun install
bun run postinstall
```

## Scripts

| Comando              | Descrição                              |
| -------------------- | -------------------------------------- |
| `bun run dev`        | Servidor de desenvolvimento            |
| `bun run build`      | Build de produção                      |
| `bun run generate`   | Geração estática                       |
| `bun run preview`    | Preview do build de produção           |
| `bun run analyze`    | Análise do bundle                      |
| `bun run lint`       | Verificação de código com oxlint       |
| `bun run lint:fix`   | Correção automática de problemas       |
| `bun run format`     | Formatação com oxfmt                   |
| `bun run format:check` | Verifica formatação sem alterar      |

## Estrutura

```
pages/
  index.vue              Página inicial
  como-funciona.vue       Como funciona
  contato.vue             Contato
  para-voce.vue           Para você
  para-seu-negocio.vue    Para seu negócio
  projetos.vue            Projetos
  quem-somos.vue          Quem somos
  seja-nosso-parceiro.vue Seja nosso parceiro
  aviso-de-privacidade.vue Aviso de privacidade
  termos-de-uso.vue       Termos de uso
components/
  Navbar.vue              Barra de navegação
  Footer.vue              Rodapé
  CookieBanner.vue        Banner de cookies (LGPD)
  VideoCarousel.vue       Carrossel de vídeos
```

## Variáveis de ambiente

| Variável    | Descrição               |
| ----------- | ----------------------- |
| `PIXEL_ID`  | ID do Meta Pixel        |
| `GTAG_ID`   | ID do Google Analytics  |

## Deploy

O site é servido com SSR. Para build de produção:

```bash
bun run build
```

Os assets estáticos são comprimidos com Brotli via Nitro.
