

## Adicionar grid de 5 imagens entre HowAccessWorks e a seção de bonus

### Posicionamento

As 5 imagens serao inseridas entre o componente `<HowAccessWorks />` e o `<div id="bonus-section" />` no `Index.tsx`.

### Layout

```text
  [imagem 1]    [imagem 2]
  [imagem 3]    [imagem 4]
       [imagem 5 centralizada]
```

- Linha 1: 2 imagens lado a lado (grid 2 colunas)
- Linha 2: 2 imagens lado a lado (grid 2 colunas)
- Linha 3: 1 imagem centralizada (largura ~50% do container)

### Detalhes tecnicos

**Novo componente:** `src/components/sections/ShowcaseImagesSection.tsx`

- Container com `max-w-5xl mx-auto px-6`
- Grid de 2 colunas (`grid grid-cols-2 gap-4 md:gap-6`) para as 4 primeiras imagens
- Abaixo, um `flex justify-center` com a 5a imagem (largura ~50%)
- Cada imagem tera border-radius `16px`, fundo `#111`, borda `#333`
- Imagens usarao placeholders cinza por enquanto (divs com aspect-ratio e fundo escuro) ate voce enviar as imagens reais
- Animacao de entrada com framer-motion (fade-in-up staggered)

**Arquivo editado:** `src/pages/Index.tsx`

- Importar `ShowcaseImagesSection`
- Inserir `<ShowcaseImagesSection />` entre `<HowAccessWorks />` e `<div id="bonus-section" />`

### Placeholders

Cada slot de imagem sera um container escuro com borda e texto "Imagem X" para facilitar a identificacao quando voce enviar as imagens reais para substituir.

