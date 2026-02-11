

## Ajuste do Carrossel de Depoimentos (Desktop)

### Problemas identificados
1. As imagens ficam pequenas no desktop (mostrando ~5 de uma vez)
2. O carrossel nao faz loop infinito continuo - quando chega na ultima imagem, volta para a primeira ao inves de continuar fluindo

### Solucao

**Arquivo:** `src/components/TestimonialsCarousel.tsx`

1. **Duplicar as imagens no array** para que o Embla tenha mais slides para criar a ilusao de loop infinito continuo (triplicar o array de feedbacks)

2. **Aumentar a altura das imagens no desktop** de `md:h-[500px]` para `md:h-[650px]`, fazendo com que apenas ~3 cards fiquem visiveis por vez

3. **Manter as configuracoes de loop e autoplay** que ja existem (`loop: true`, `dragFree: true`, `Autoplay`) - o problema atual e que com poucas imagens o Embla nao consegue fazer o loop suave, entao ao triplicar o array isso sera resolvido

### Detalhes tecnicos

- O array `feedbacks` sera triplicado: `[...feedbacks, ...feedbacks, ...feedbacks]` no render
- Altura mobile permanece `h-[400px]` (sem alteracao, conforme diretriz mobile-only invertida - aqui so mexemos no desktop)
- A configuracao `containScroll: false` ja esta correta para permitir scroll livre
- O `gap` entre cards sera mantido em `gap-4`

