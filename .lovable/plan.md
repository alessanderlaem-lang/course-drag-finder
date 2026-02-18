

## Corrigir Zoom da Imagem da Hero no Mobile

### Problema
A otimizacao anterior converteu a imagem de `background-image` CSS para uma tag `<img>`. Porem, o bloco de CSS inline para mobile (linhas 44-52) aplica `transform: scale(1.8)` na imagem, causando um zoom excessivo que nao existia antes.

### Solucao
Remover o bloco `<style>` inteiro que aplica o `transform: scale(1.8)` no mobile. A tag `<img>` com `object-fit: cover` e `object-position: center top` ja cuida do posicionamento correto da imagem em todos os tamanhos de tela - nenhum transform adicional e necessario.

### Detalhes Tecnicos

**Arquivo:** `src/components/sections/HeroSection.tsx`

Remover as linhas 43-52 (o bloco `<style>` com media query mobile):

```tsx
// REMOVER este bloco inteiro:
{/* Mobile-specific background adjustment */}
<style>{`
  @media (max-width: 768px) {
    section:has(.hero-content-mobile) > img:first-of-type {
      object-fit: cover;
      transform: scale(1.8);
      transform-origin: 46% 3%;
    }
  }
`}</style>
```

A tag `<img>` existente na linha 35-42 ja possui `object-cover` e `object-position: center top`, que e suficiente para exibir a imagem corretamente tanto no desktop quanto no mobile.

