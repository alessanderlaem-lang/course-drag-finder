

# Atualizar Secao de Rateio & Ferramentas

## O que muda

A parte de baixo da secao (o grid de categorias com "Algumas das categorias disponiveis") sera transformada numa nova sub-secao dedicada ao **Rateio & Ferramentas**, com headline forte, subtitulo em vermelho e 12 cards de poder no lugar das 16 categorias genericas.

## Estrutura Final

A secao `WhatYouGetSection.tsx` ficara com esta sequencia:

```text
1. Header: "O Que Voce Vai Receber" (mantem como esta)
2. Card principal: +10.000 Cursos via Fornecedores (mantem como esta)
3. >>> NOVA SUB-SECAO: Rateio & Ferramentas <<<
   - Headline: "ACESSO TOTAL AO NOSSO RATEIO & FERRAMENTAS"
   - Subtitulo em vermelho: "Ferramentas premium, scripts e ativos..."
   - Grid 12 cards (3x4 desktop, 2x6 mobile)
4. CTA: "Quero ter acesso agora" (mantem como esta)
```

## Os 12 Cards

Cada card tera um emoji como icone, titulo curto em bold e descricao pequena embaixo. Estilo visual: fundo `#111111`, borda `#333`, hover com borda vermelha (mesmo padrao atual dos cards de categoria).

| # | Emoji | Titulo | Descricao curta |
|---|-------|--------|-----------------|
| 1 | (ferramentas) | Source Code, SaaS e iGaming | O ativo mais valioso. Codigo da propria bet/software |
| 2 | (disco) | Pack de +30k PLRs Premium | Produto pronto para venda rapida |
| 3 | (robo) | Robos e Automacao (Zap/Insta) | Ferramentas de eficiencia |
| 4 | (detetive) | Puxada de Dados e Leads | Dados e leads para prospecao |
| 5 | (celular) | APKs Mod e Apps Premium | Softwares pagos desbloqueados |
| 6 | (documento) | Paginas de Vendas Clonadas | Modelos de alta conversao prontos |
| 7 | (balao) | Scripts de Venda e Copy Pronta | Arquivos para copiar e colar |
| 8 | (escudo) | Contingencia e Aquecimento de Chips | Ferramentas anti-bloqueio |
| 9 | (sino) | Gerador de Prova Social | Notificacoes que aumentam conversao |
| 10 | (quebra-cabeca) | Pack de Extensoes e Plugins Pro | Elementor Pro, WP Rocket, etc. |
| 11 | (arte) | Pack de Design e Criativos Virais | Artes editaveis para anuncios |
| 12 | (proibido) | Nicho Black e Hot (+18) | Conteudo underground exclusivo |

## Layout dos Cards

- Grid responsivo: **2 colunas no mobile**, **3 colunas no tablet**, **4 colunas no desktop**
- Cada card: emoji grande no topo, titulo bold branco, descricao pequena em cinza
- Fundo `#111111`, borda `#333`, hover borda `#FF0000/40`
- Mesmo estilo visual dos cards de categoria atuais, porem com texto ao inves de imagem

## Detalhes Tecnicos

### Arquivo alterado
- `src/components/sections/WhatYouGetSection.tsx`

### Mudancas especificas
1. **Remover** as 16 importacoes de imagens de categoria (cat1-cat16) e o array `categories`
2. **Adicionar** novo array `rateioItems` com os 12 cards (emoji, titulo, descricao)
3. **Substituir** o bloco "Categories Grid" por:
   - Nova headline "ACESSO TOTAL AO NOSSO RATEIO & FERRAMENTAS"
   - Subtitulo em vermelho
   - Grid de 12 cards com emoji + texto
4. Manter animacoes framer-motion consistentes
5. Manter toda a parte de cima (header + card principal dos cursos) intacta

