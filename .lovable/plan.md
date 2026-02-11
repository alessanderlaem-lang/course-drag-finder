

## Corrigir carrossel de depoimentos no mobile

### Problema 1: Velocidade lenta
A animacao atual dura 40 segundos por ciclo, o que e muito lento especialmente no mobile onde a tela e menor.

### Problema 2: Fundo preto intermitente
O atributo `loading="lazy"` nas imagens causa o bug. Como as imagens estao dentro de um container com animacao CSS horizontal, o navegador nao carrega as imagens que estao fora da viewport. Quando a animacao move essas imagens para dentro da tela, elas ainda nao foram carregadas e aparecem como espacos pretos. Depois de carregarem, elas aparecem normalmente, criando o efeito de "piscar preto".

### Solucao

**Arquivo**: `src/components/TestimonialsCarousel.tsx`

1. **Remover `loading="lazy"`** das imagens do carrossel - todas as imagens devem carregar imediatamente para evitar os espacos pretos
2. **Adicionar `loading="eager"`** para garantir carregamento imediato

**Arquivo**: `tailwind.config.ts`

3. **Reduzir a duracao da animacao** de `40s` para `20s` no mobile, mantendo uma velocidade adequada

### Detalhes tecnicos

- Em `TestimonialsCarousel.tsx`: trocar `loading="lazy"` por `loading="eager"` na tag `<img>`
- Em `tailwind.config.ts`: alterar `scroll-left` de `40s` para `20s`
- Alteracoes aplicam a mobile e desktop (a velocidade visual no desktop ainda ficara adequada pois a tela e mais larga)
