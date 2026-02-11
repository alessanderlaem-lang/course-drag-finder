

## Corrigir seção "Como Funciona o Acesso"

Remover a imagem do laptop Discord que foi adicionada por engano e restaurar o placeholder original do banner.

### Alteracoes

**Arquivo: `src/components/HowAccessWorks.tsx`**

1. Remover os imports de `discordLaptop` e `glowRed`
2. Substituir o bloco da imagem do laptop pelo placeholder original com borda tracejada e texto "Espaco reservado para banner - Em breve"

O resultado final sera a secao voltando ao estado anterior, com o placeholder do banner no lugar correto entre o subtitulo e os passos.

