

# Nova Secao: "O Que Voce Vai Receber" (Entrega do Rateio)

## Objetivo
Criar uma secao de alta conversao focada na entrega principal da Rise Community: o acesso a +10.000 cursos completos via fornecedores exclusivos, com atualizacoes diarias. Posicionada entre a AboutSection e o HowAccessWorks para que o visitante veja exatamente o que recebe antes de entender como funciona o acesso.

## Posicao no fluxo da pagina
```text
Hero
  |
About (O que e a Rise Community?)
  |
>>> NOVA SECAO: O Que Voce Vai Receber <<<
  |
Como Funciona o Acesso
  |
Bonus
  |
...resto
```

## Layout e Conteudo

A secao seguira o padrao visual do site: fundo preto, fonte Articulat CF, titulo com gradiente vermelho, e estilo limpo e profissional.

### Estrutura:

1. **Cabecalho da secao**
   - Titulo: "O Que Voce Vai Receber" (com "Receber" em gradiente vermelho)
   - Subtitulo curto reforccando a entrega massiva

2. **Destaque principal - Card grande**
   - Card com borda sutil (#464646) e fundo #111111 (padrao dos bonus cards)
   - Glow vermelho sutil no topo (mesmo efeito dos BonusCards)
   - Titulo bold: "+10.000 Cursos Completos via Fornecedores"
   - Descricao explicando: acesso a fornecedores exclusivos, atualizacoes diarias, todas as areas do digital
   - Lista com checkmarks vermelhos das categorias principais (usando as 16 imagens de categorias existentes ou icones):
     - Marketing Digital
     - Programacao e Tecnologia
     - Design e Edicao
     - E-commerce e Dropshipping
     - Vendas e Copywriting
     - Trafego Pago
     - Redes Sociais
     - E mais centenas de categorias...

3. **Grid de categorias visual**
   - Grid 4x4 (ou 3-4 colunas responsivo) usando as 16 imagens de categorias ja existentes em `src/assets/categories/`
   - Cada imagem com label da categoria
   - Efeito visual de abundancia mostrando a variedade

4. **Reforco de valor**
   - Badge ou destaque: "Atualizacoes diarias" / "Novos cursos toda semana"
   - Texto reforccando: "Via fornecedores exclusivos - voce nunca mais paga caro por curso"

5. **CTA secundario** - botao vermelho "Quero ter acesso agora" linkando para a secao de pricing

### Animacoes
- Entrada com framer-motion (fade-in + slide-up), consistente com o resto do site

## Detalhes Tecnicos

### Arquivo novo
- `src/components/sections/WhatYouGetSection.tsx`

### Alteracao no Index.tsx
- Importar e posicionar o novo componente entre `<AboutSection />` e `<HowAccessWorks />`

### Assets utilizados
- As 16 imagens de categorias em `src/assets/categories/1.png` ate `16.png` (ja existem no projeto)
- Mesma fonte Articulat CF
- Mesmo esquema de cores: fundo preto, texto branco, acentos em vermelho (#FF0000 a #A70505)

### Padrao visual
- Seguir exatamente o estilo dos BonusCards: borda #464646, fundo #111111, glow vermelho no topo
- Tipografia consistente com o resto (Articulat CF)
- Espacamento compacto conforme preferencia do usuario
