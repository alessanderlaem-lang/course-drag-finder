

# Melhorias Visuais na Secao de Rateio & Ferramentas

## Problemas Atuais
- Os cards estao "soltos" na pagina, sem um container que agrupe visualmente
- Falta separacao clara entre a secao de cursos e a de rateio
- Os cards sao simples demais comparados ao card principal dos cursos (que tem LED glow, shimmer, etc.)
- O subtitulo vermelho fica "perdido" sem um fundo de apoio

## Melhorias Propostas

### 1. Container com fundo e borda (igual ao card de cursos)
Envolver toda a sub-secao de Rateio num container escuro com borda e o mesmo efeito de LED glow vermelho no topo, criando consistencia visual com o card dos cursos acima.

### 2. Cards com hover mais rico
Adicionar um sutil gradiente de fundo no hover (de `#111` para um tom levemente avermelhado) e um glow suave, dando mais vida aos cards quando o usuario passa o mouse.

### 3. Linha divisoria sutil
Adicionar um separador visual (linha fina ou espacamento maior) entre o card de cursos e a sub-secao de rateio para marcar a mudanca de assunto.

### 4. Emoji maior e com fundo circular
Colocar o emoji dentro de um circulo com fundo `rgba(255,0,0,0.1)` para dar mais destaque visual e uniformidade.

## Estrutura Visual Final

```text
+--------------------------------------------------+
|  [LED GLOW BAR vermelho no topo]                  |
|                                                    |
|  ACESSO TOTAL AO NOSSO RATEIO & FERRAMENTAS       |
|  Ferramentas premium, scripts e ativos...          |
|                                                    |
|  +--------+  +--------+  +--------+  +--------+   |
|  | (emoji)|  | (emoji)|  | (emoji)|  | (emoji)|   |
|  | Titulo |  | Titulo |  | Titulo |  | Titulo |   |
|  | desc   |  | desc   |  | desc   |  | desc   |   |
|  +--------+  +--------+  +--------+  +--------+   |
|  +--------+  +--------+  +--------+  +--------+   |
|  | ...    |  | ...    |  | ...    |  | ...    |   |
|  +--------+  +--------+  +--------+  +--------+   |
|  +--------+  +--------+  +--------+  +--------+   |
|  | ...    |  | ...    |  | ...    |  | ...    |   |
|  +--------+  +--------+  +--------+  +--------+   |
+--------------------------------------------------+
```

## Detalhes Tecnicos

### Arquivo alterado
- `src/components/sections/WhatYouGetSection.tsx`

### Mudancas especificas

1. **Container externo**: Envolver o bloco de Rateio (headline + subtitulo + grid) num `div` com fundo `#111111`, borda `1px solid #464646`, border-radius `20px`, padding `30px 25px` -- mesmo estilo do card de cursos
2. **LED glow bar**: Adicionar a mesma barra de LED vermelha no topo do container (reutilizar o mesmo codigo do card de cursos)
3. **Emoji com fundo circular**: Cada emoji ganha um circulo de `w-12 h-12` com fundo `rgba(255,0,0,0.1)` e border-radius completo
4. **Hover dos cards**: Adicionar `hover:bg-[#1a1a1a]` e um box-shadow sutil vermelho no hover
5. **Espacamento**: Aumentar o `mb-10` entre o card de cursos e o bloco de rateio para `mb-14` para melhor separacao

Nenhum arquivo novo sera criado. Apenas `WhatYouGetSection.tsx` sera editado.
