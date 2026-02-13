

## Bloquear Clique Direito e Seleção de Texto

Vou adicionar proteções para dificultar a cópia do conteúdo da página:

### O que será feito:

1. **Bloquear clique com botão direito** - Desabilitar o menu de contexto em toda a página
2. **Bloquear seleção de texto** - Impedir que o usuário selecione e copie textos
3. **Bloquear arrastar elementos** - Impedir que imagens e outros elementos sejam arrastados
4. **Bloquear atalhos de teclado** - Desabilitar Ctrl+C, Ctrl+U (ver código fonte), Ctrl+S, F12

### Detalhes Técnicos

- Criar um hook `useContentProtection` em `src/hooks/use-content-protection.ts` que adiciona event listeners para `contextmenu`, `selectstart`, `dragstart` e `keydown`
- Adicionar CSS `user-select: none` globalmente no `src/index.css`
- Ativar o hook no componente principal `App.tsx`

**Observação importante:** Essas medidas dificultam a cópia casual, mas não impedem completamente alguém com conhecimento técnico. Ainda assim, são eficazes contra a maioria dos usuários.

