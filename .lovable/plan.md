
## Plano: Nova Seção de Renda Extra + Espaçamento

### O que será feito

1. **Criar a seção "Renda Extra"** entre os feedbacks (TestimonialsCarousel) e a seção de garantia/compra, com visual similar ao WhatYouGetSection (cards em grid, container premium com LED vermelho, shimmer effect).

2. **Adicionar espaçamento** entre os feedbacks e a nova seção.

---

### Conteudo da Seção

- Titulo: algo como "Transforme Conhecimento em Renda Extra"
- Subtitulo descritivo
- Grid de cards com formas de gerar renda extra dentro da Rise (ex: Programa de Afiliados, Revenda de PLRs, Freelancer com habilidades aprendidas, Dropshipping, Criacao de Infoprodutos, Automacoes e Bots, etc.)
- CTA final levando ao pricing

---

### Detalhes Tecnicos

**Novo arquivo:** `src/components/sections/RendaExtraSection.tsx`
- Usa `LazyMotion` + `m` do framer-motion (mesmo padrao do WhatYouGetSection)
- Container com fundo `#111111`, borda `#464646`, border-radius 20px
- LED glow bar vermelho no topo do container
- Shimmer sweep animation
- Grid de 6-8 cards com emoji, titulo e descricao curta
- Cada card com fundo `#0D0D0D`, borda `#333`, hover vermelho
- Fonte: Articulat CF
- Gradiente vermelho nos destaques de texto
- CTA button ao final

**Alteracao:** `src/pages/Index.tsx`
- Importar `RendaExtraSection`
- Inserir entre `<TestimonialsCarousel />` e `<GuaranteeSection />`
- Adicionar `mt-12 md:mt-16` ou similar para espacamento entre feedbacks e a nova secao
