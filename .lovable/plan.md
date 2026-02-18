

## Plano de Otimizacao Completo - Performance do Site Rise Community

### Diagnostico dos Problemas Encontrados

Apos analise completa de todos os arquivos do projeto, identifiquei os seguintes gargalos de performance:

---

### 1. IMAGEM DA HERO (Problema Principal)

**Problema:** A imagem de fundo da Hero (`Camada-4-11.jpg`) e carregada como `background-image` via CSS inline, sem nenhum controle de prioridade, pre-carregamento ou otimizacao de formato.

**Solucao:**
- Adicionar `<link rel="preload">` no `index.html` para a imagem da Hero com `fetchpriority="high"`
- Converter a imagem de JPG para WebP (Vite ja suporta isso nativamente)
- Usar uma tag `<img>` com `fetchpriority="high"` como camada de fundo ao inves de `background-image` CSS, pois o browser prioriza `<img>` tags sobre backgrounds CSS
- Adicionar um placeholder de cor solida (#0a0a0a) enquanto a imagem carrega

---

### 2. FONTES PESADAS (5 arquivos TTF)

**Problema:** O site carrega 5 variantes da fonte "Articulat CF" em formato TTF (formato nao otimizado para web). Alem disso, importa League Spartan e Bebas Neue do Google Fonts via CSS `@import`, que bloqueia a renderizacao.

**Solucao:**
- Adicionar `<link rel="preload">` no `index.html` para as 2 variantes mais usadas (Normal e DemiBold/Bold)
- Mover o `@import` do Google Fonts de `index.css` para `<link>` tags no `index.html` com `rel="preload"` e `display=swap` (ja esta feito parcialmente para Bebas Neue, mas League Spartan esta no CSS)
- Usar `font-display: swap` (ja esta implementado - bom)

---

### 3. IMAGENS NAO OTIMIZADAS E SEM LAZY LOADING

**Problema:** Muitas imagens sao carregadas eagerly mesmo estando abaixo do fold:
- Avatares da Hero (4 imagens pequenas - ok, estao acima do fold)
- Feedbacks/Testimonials: 6 imagens JPEG duplicadas 3x (18 `<img>` tags) com `loading="eager"` - totalmente desnecessario
- Bonus section: 5 imagens de bonus sem lazy loading
- About section: 4 icones com lazy loading (bom)
- Category images: 16 imagens de categorias

**Solucao:**
- Testimonials: mudar de `loading="eager"` para `loading="lazy"` - estas imagens estao longe do fold
- Bonus images: adicionar `loading="lazy"` a todas
- Garantia image: adicionar `loading="lazy"`
- Payment methods: adicionar `loading="lazy"`
- Banner acesso: ja tem lazy (bom)

---

### 4. FRAMER MOTION - BUNDLE PESADO

**Problema:** `framer-motion` e importado em 3 componentes (BonusSection, WhatYouGetSection, DiferenciaisCriticosSection). A biblioteca completa pesa ~30-40KB gzipped.

**Solucao:**
- Usar import do `framer-motion` via `lazy import` com `motion` diretamente: `import { m, LazyMotion, domAnimation } from "framer-motion"` para reduzir o bundle
- Alternativamente, substituir as animacoes simples (fade-in/slide-up) por CSS `@keyframes` + `IntersectionObserver`, eliminando framer-motion completamente

---

### 5. COMPONENTES NAO UTILIZADOS NO BUNDLE

**Problema:** O `App.tsx` importa `Toaster`, `Sonner`, `TooltipProvider`, `QueryClientProvider` e `BrowserRouter`. Esses componentes adicionam peso ao bundle inicial mesmo que nao sejam necessarios para o primeiro render.

**Solucao:**
- Usar `React.lazy()` para o componente `Index` (landing page inteira nao precisa estar no bundle do router)
- Pre-carregar os componentes criticos e lazy-loadar o restante

---

### 6. SCRIPTS EXTERNOS BLOQUEANTES

**Problema:** No `index.html`, o script `rise-pixel-js` e carregado com `defer`, o que e bom. Porem, ha um script inline sincrono para query string que roda antes do app.

**Solucao:**
- O script inline e pequeno e rapido - nao e um problema significativo
- Confirmar que `rise-pixel-js` nao bloqueia o LCP

---

### 7. CSS NAO CRITICO

**Problema:** Todas as animacoes CSS (marquee, light-sweep, neon-glow, scrollbar customizado) sao carregadas no CSS inicial junto com as variaveis de design system.

**Solucao:**
- Separar animacoes nao-criticas para serem carregadas apos o primeiro paint (menor impacto, mas contribui)

---

### Sequencia de Implementacao

**Fase 1 - Impacto Maximo (Hero + Fontes)**
1. Preload da imagem da Hero no `index.html`
2. Converter background-image da Hero para `<img>` tag com `fetchpriority="high"` e placeholder de cor
3. Mover Google Fonts @import para `<link>` tags otimizadas no HTML
4. Preload das fontes Articulat CF mais usadas

**Fase 2 - Lazy Loading (Imagens abaixo do fold)**
5. Testimonials: `loading="eager"` para `loading="lazy"`
6. Bonus images: adicionar `loading="lazy"`
7. Garantia, Payment, e demais imagens: `loading="lazy"`

**Fase 3 - Bundle Optimization**
8. Substituir framer-motion por CSS animations + IntersectionObserver (ou usar LazyMotion)
9. Lazy-load da pagina Index via React.lazy

**Fase 4 - Refinamentos**
10. Adicionar `decoding="async"` em todas as imagens nao-criticas
11. Otimizar preconnects no HTML

---

### Detalhes Tecnicos

**Arquivo `index.html`:**
- Adicionar preload para Hero image
- Adicionar preload para fontes criticas
- Mover League Spartan de CSS @import para link tag

**Arquivo `src/components/sections/HeroSection.tsx`:**
- Mudar de `background-image` inline para `<img>` tag absoluta com `fetchpriority="high"`, `decoding="async"`, coberta por overlay div
- Manter fallback de cor de fundo `bg-[#0a0a0a]`

**Arquivo `src/components/TestimonialsCarousel.tsx`:**
- Linha 69: mudar `loading="eager"` para `loading="lazy"`
- Adicionar `decoding="async"`

**Arquivo `src/components/BonusSection.tsx`:**
- Adicionar `loading="lazy"` e `decoding="async"` na tag `<img>` do BonusCard

**Arquivo `src/components/GuaranteeSection.tsx`:**
- Adicionar `loading="lazy"` nas duas tags `<img>`

**Arquivo `src/components/PricingSection.tsx`:**
- Adicionar `loading="lazy"` na imagem de payment methods

**Arquivo `src/index.css`:**
- Remover a linha 1 (`@import url(...)` do League Spartan) - sera movida para HTML

**Arquivo `src/components/sections/WhatYouGetSection.tsx`** e **`src/components/BonusSection.tsx`:**
- Substituir `motion.div` por CSS animations com IntersectionObserver customizado, ou usar `LazyMotion` + `m` do framer-motion para tree-shaking

---

### Resultado Esperado
- LCP (Largest Contentful Paint) significativamente mais rapido - a imagem da Hero sera pre-carregada e priorizada
- FCP (First Contentful Paint) mais rapido - fontes otimizadas, menos bloqueio de render
- TTI (Time to Interactive) melhor - menos JavaScript no bundle inicial
- Reduzir dados transferidos abaixo do fold em ~60-70% com lazy loading

