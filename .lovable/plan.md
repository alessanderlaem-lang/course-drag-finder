

## Adicionar espaçamento superior na seção de depoimentos (mobile)

A seção "O que nossos membros estao falando" esta colada na seção de cima (carrossel de categorias) no mobile. A correção e simples:

### O que sera feito

No componente `TestimonialsCarousel.tsx`, a classe atual tem `-mt-16` no mobile. Vou ajustar para adicionar mais espaço no topo apenas no mobile, mudando de `-mt-16` para `mt-8` (ou similar), mantendo o desktop inalterado com `md:-mt-8`.

### Detalhe tecnico

- **Arquivo**: `src/components/TestimonialsCarousel.tsx`
- **Alteracao**: Trocar `-mt-16` por `mt-8` na classe da section, mantendo `md:-mt-8` para desktop
- Nenhuma alteracao no desktop/tablet

