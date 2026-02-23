

## Reformular FornecedoresSection para cards individuais empilhados

### O que muda

O layout atual usa um **container unico** com um grid de 6 mini-cards dentro. O novo layout tera **cada categoria como um card individual separado**, empilhados verticalmente, exatamente como aparece na screenshot de referencia.

### Formato de cada card

Cada card tera:
- Container proprio com fundo `#111111`, borda `#464646`, border-radius `20px`, padding `25px`
- LED vermelho no topo (glow bar + blur layer)
- Efeito shimmer (light-sweep)
- Icone Lucide vermelho (sem background box, apenas o icone solto)
- Titulo em branco, bold, tamanho grande
- Descricao em cinza `#999`

### Categorias (6 cards)

1. **+10.000 Cursos Completos** (BookOpen) -- "Acesso a cursos de todas as areas do digital, sempre atualizados."
2. **Fornecedores Exclusivos** (Package) -- "Lista secreta de fornecedores de rateio e ferramentas premium."
3. **Ofertas Validadas Diarias** (Zap) -- "Oportunidades testadas e aprovadas pela comunidade todos os dias."
4. **Checkout com Taxa 70% Menor** (CreditCard) -- "Venda seus produtos sem intermediarios e maximize seus lucros."
5. **Ferramentas Premium** (Wrench) -- "ChatGPT, Canva Pro, CapCut e +50 ferramentas do digital."
6. **Consulta de Dados** (Search) -- "Puxada de dados exclusiva via Telegram da comunidade."

### Detalhes tecnicos

**Arquivo:** `src/components/sections/FornecedoresSection.tsx`

- Manter o cabecalho da secao (titulo "Fornecedores de Tudo" e subtitulo)
- Trocar o container unico + grid por um `flex flex-col gap-6` de cards individuais
- Cada card e um container premium independente com LED, glow e shimmer
- Icones renderizados diretamente (sem box de fundo, tamanho ~32px, cor vermelha)
- Remover o texto "+50 fornecedores verificados em" (inner heading do container unico)
- Trocar os icones Lucide conforme a lista acima (adicionar Package, Zap, CreditCard; remover Tv, FileText, Palette)
- Animacao de entrada com framer-motion em cada card individual (staggered por index)
