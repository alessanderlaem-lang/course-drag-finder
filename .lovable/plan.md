

## Esconder ícone do Gemini nos ícones da seção "Como Funciona o Acesso?"

As 3 imagens dos ícones (email, porta, foguete) possuem um pequeno logo do Gemini no canto inferior direito. Como o fundo da seção é preto, basta envolver cada imagem em um container com `overflow-hidden` e posicionar um pequeno bloco preto sobre o canto inferior direito.

### Alteração

**Arquivo:** `src/components/HowAccessWorks.tsx`

- Envolver cada `<img>` dos ícones em uma `<div>` com `position: relative` e `overflow: hidden`
- Adicionar uma `<div>` com fundo preto posicionada no canto inferior direito (aproximadamente 12x12px) para cobrir o logo do Gemini
- O resultado será imperceptível pois o fundo da seção já é preto

