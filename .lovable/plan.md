

## Scroll para o topo ao carregar/atualizar a pagina

### Problema

Quando a pagina e atualizada (F5) ou acessada diretamente, o navegador tenta restaurar a posicao de scroll anterior. Combinado com elementos dinamicos (como o carrossel Embla e divs ancora como `#faq`), isso causa um comportamento erratico onde a pagina pula para baixo e tenta subir sem sucesso.

### Solucao

Adicionar um `useEffect` no componente `Index` que forca `window.scrollTo(0, 0)` imediatamente ao montar. Alem disso, configurar `history.scrollRestoration = 'manual'` para impedir que o navegador tente restaurar a posicao de scroll automaticamente.

### Implementacao

**Arquivo: `src/pages/Index.tsx`**

1. Importar `useEffect` do React
2. Adicionar um `useEffect` com array de dependencias vazio que:
   - Define `history.scrollRestoration = 'manual'` para desabilitar a restauracao automatica do navegador
   - Chama `window.scrollTo(0, 0)` para garantir que a pagina inicia no topo

Nenhum outro arquivo precisa ser alterado.

