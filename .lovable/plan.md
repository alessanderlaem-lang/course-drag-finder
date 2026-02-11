
## Carrossel com drag infinito no mobile

### O que muda

O carrossel atual usa apenas animacao CSS (`translateX`) para scroll automatico. Isso nao permite interacao de toque/drag. Para atender ao requisito de drag infinito no mobile, precisamos de uma abordagem hibrida.

### Analise de Solucoes

#### Solucao A: Embla Carousel com loop infinito + autoplay

Usa a biblioteca `embla-carousel-react` (ja instalada no projeto) com o plugin `embla-carousel-autoplay` (tambem ja instalado). Embla suporta nativamente `loop: true` para scroll infinito e tem suporte completo a touch/drag no mobile.

- Manuteniblidade: 10/10 - Biblioteca madura, API declarativa, ja presente no projeto
- Zero DT: 10/10 - Solucao definitiva usando ferramenta especializada para o problema
- Arquitetura: 10/10 - Usa dependencia ja existente, sem codigo custom de touch handling
- Escalabilidade: 10/10 - Adicionar/remover imagens e apenas alterar o array
- Seguranca: 10/10 - Sem impacto
- **NOTA FINAL: 10.0/10**

#### Solucao B: Touch handlers custom com requestAnimationFrame

Implementar manualmente `onTouchStart`, `onTouchMove`, `onTouchEnd` com logica de momentum, loop infinito via clonagem de DOM, e auto-scroll via rAF.

- Manuteniblidade: 5/10 - Centenas de linhas de logica custom de touch, momentum, boundaries
- Zero DT: 6/10 - Edge cases em diferentes dispositivos e navegadores
- Arquitetura: 4/10 - Reinventa a roda quando a solucao ja existe no projeto
- Escalabilidade: 6/10 - Cada mudanca requer entender toda a logica de touch
- Seguranca: 10/10 - Sem impacto
- **NOTA FINAL: 5.8/10**

#### Solucao C: CSS scroll-snap com duplicacao

Usa `scroll-snap-type` nativo com `overflow-x: scroll` e JavaScript para reposicionar ao final.

- Manuteniblidade: 7/10 - Relativamente simples mas requer JS para o loop
- Zero DT: 6/10 - `scroll-snap` tem inconsistencias entre navegadores mobile
- Arquitetura: 7/10 - Mistura CSS nativo com JS para compensar limitacoes
- Escalabilidade: 7/10 - Razoavel
- Seguranca: 10/10 - Sem impacto
- **NOTA FINAL: 7.2/10**

### DECISAO: Solucao A (Nota 10.0)

As bibliotecas `embla-carousel-react` e `embla-carousel-autoplay` ja estao instaladas no projeto. Usar touch handlers custom seria reinventar uma solucao inferior ao que ja temos disponivel.

---

### Plano de implementacao

**Arquivo: `src/components/TestimonialsCarousel.tsx`**

Reescrever o carrossel para usar Embla Carousel com as seguintes configuracoes:

1. **`loop: true`** - Garante o comportamento infinito (apos a ultima imagem, volta para a primeira sem interrupcao)
2. **`dragFree: true`** - Permite drag livre no mobile (o usuario arrasta a vontade, com momentum natural)
3. **`align: "start"`** - Alinha as imagens ao inicio do viewport
4. **Plugin autoplay** - Mantem o scroll automatico quando o usuario nao esta interagindo
   - `delay: 0` com `stopOnInteraction: false` para scroll continuo
   - Pausa durante o drag e retoma automaticamente

5. Cada slide contem uma imagem com os mesmos estilos visuais atuais (altura, bordas, sombra, rounded)
6. Manter os gradientes de fade nas bordas laterais
7. Manter o titulo e toda a estrutura visual atual
8. Comportamento: no desktop, auto-scroll continuo. No mobile, auto-scroll + drag habilitado

**Arquivo: `tailwind.config.ts`**

Nenhuma alteracao necessaria. A animacao CSS `scroll-left` deixa de ser usada neste componente (pode ser mantida no config para outros usos futuros).
