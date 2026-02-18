

## Plano de Otimizacao Completa - Performance do Site Rise Community

**Regra absoluta:** Nenhuma imagem sera movida, reposicionada ou redimensionada. Todas permanecem exatamente onde estao. As mudancas sao exclusivamente de atributos de carregamento, preload e otimizacao de bundle.

---

### FASE 1 - Hero Image (Maior Impacto)

**Arquivo: `index.html`**
- Adicionar `<link rel="preload">` para a imagem da Hero (`src/assets/hero/Camada-4-11.jpg`) com `as="image"` e `fetchpriority="high"`
- Mover a importacao do Google Fonts League Spartan do CSS (`@import` na linha 1 do `index.css`) para uma tag `<link>` no HTML com `display=swap` (elimina bloqueio de render pelo CSS)
- Adicionar `<link rel="preload">` para as 2 fontes Articulat CF mais criticas (Normal e DemiBold)

**Arquivo: `src/index.css`**
- Remover a linha 1 (`@import url('https://fonts.googleapis.com/css2?family=League+Spartan...')`) pois sera carregada via HTML

---

### FASE 2 - Lazy Loading em Imagens Abaixo do Fold

Todas as imagens abaixo do fold recebem `loading="lazy"` e `decoding="async"` sem alterar nenhum outro atributo (posicao, tamanho, classe, estilo).

**Arquivo: `src/components/TestimonialsCarousel.tsx`**
- Linha 69: mudar `loading="eager"` para `loading="lazy"`
- Adicionar `decoding="async"` na mesma tag `<img>`

**Arquivo: `src/components/BonusSection.tsx`**
- Na tag `<img>` do BonusCard (linha ~156-160): adicionar `loading="lazy"` e `decoding="async"`

**Arquivo: `src/components/GuaranteeSection.tsx`**
- Nas duas tags `<img>` (linhas 131-135 e 140-144): adicionar `loading="lazy"` e `decoding="async"`

**Arquivo: `src/components/PricingSection.tsx`**
- Na tag `<img>` de payment methods (linha 158): adicionar `loading="lazy"` e `decoding="async"`

**Arquivo: `src/components/sections/DiferenciaisCriticosSection.tsx`**
- Nas tags `<img>` dos cards de diferenciais: adicionar `loading="lazy"` e `decoding="async"`

---

### FASE 3 - Otimizacao do Bundle JavaScript

**Arquivo: `src/components/BonusSection.tsx`, `src/components/sections/DiferenciaisCriticosSection.tsx`, `src/components/sections/WhatYouGetSection.tsx`**
- Substituir `import { motion } from "framer-motion"` por `import { LazyMotion, domAnimation, m } from "framer-motion"`
- Trocar `motion.div` por `m.div` (mesma funcionalidade, bundle ~60% menor)
- Envolver o conteudo com `<LazyMotion features={domAnimation}>` para tree-shaking

**Arquivo: `src/App.tsx`**
- Usar `React.lazy()` para importar a pagina `Index`, com um `<Suspense>` e fallback minimo (div com fundo preto para nao piscar)

---

### FASE 4 - Refinamentos Finais

**Arquivo: `index.html`**
- Adicionar `<link rel="preconnect">` para `https://api.risecheckout.com` (o script de pixel faz fetch para la)
- Verificar que os `preconnect` do Google Fonts ja existem (ja existem - ok)

**Arquivo: `src/components/sections/HeroSection.tsx`**
- Adicionar `decoding="async"` nas 4 imagens de avatar (sao pequenas mas o atributo ajuda)
- Nenhuma outra mudanca neste arquivo - a imagem de fundo permanece como `background-image` inline exatamente como esta

---

### Resumo das Mudancas por Arquivo

| Arquivo | O que muda |
|---|---|
| `index.html` | Preload hero image, preload fontes, link tag League Spartan, preconnect risecheckout |
| `src/index.css` | Remover @import do Google Fonts (linha 1) |
| `src/components/TestimonialsCarousel.tsx` | `loading="lazy"` + `decoding="async"` |
| `src/components/BonusSection.tsx` | `loading="lazy"` + `decoding="async"` + LazyMotion |
| `src/components/GuaranteeSection.tsx` | `loading="lazy"` + `decoding="async"` |
| `src/components/PricingSection.tsx` | `loading="lazy"` + `decoding="async"` |
| `src/components/sections/DiferenciaisCriticosSection.tsx` | `loading="lazy"` + `decoding="async"` + LazyMotion |
| `src/components/sections/WhatYouGetSection.tsx` | LazyMotion |
| `src/components/sections/HeroSection.tsx` | `decoding="async"` nos avatares apenas |
| `src/App.tsx` | React.lazy + Suspense para Index |

### O que NAO sera alterado
- Nenhuma posicao, tamanho, classe CSS ou estilo de nenhuma imagem
- Nenhum layout ou estrutura visual
- Nenhuma imagem sera convertida de formato ou movida de pasta

