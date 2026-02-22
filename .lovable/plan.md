

## 6 Cards "O Que Você Vai Receber" - Abaixo do Banner

Criar 6 cards premium abaixo do banner de video na seção "O Que Você Vai Receber", seguindo o padrão visual existente do projeto (cards escuros com borda, LED vermelho, efeito shimmer).

### Layout

- Grid responsivo: 1 coluna no mobile, 2 colunas no tablet, 3 colunas no desktop
- Cada card terá: icone Lucide, titulo e descrição curta
- Estilo consistente com os BonusCards e RendaExtraSection (fundo `#111111`, borda `#464646`, LED vermelho no topo, efeito shimmer)

### Os 6 Cards (conteudo placeholder - voce ajusta depois)

1. **+10.000 Cursos Completos** - Acesso a cursos de todas as areas do digital
2. **Fornecedores Exclusivos** - Lista secreta de fornecedores de rateio e ferramentas
3. **Ofertas Validadas Diarias** - Oportunidades testadas e aprovadas pela comunidade
4. **Checkout com Taxa 70% Menor** - Venda seus produtos sem intermediarios
5. **Programa de Afiliados** - Ganhe comissao por cada venda indicada
6. **Produtos Prontos para Revenda** - PLRs, e-books e templates validados

### Detalhes Tecnicos

**Arquivo modificado:** `src/components/sections/AboutSection.tsx`

- Importar icones do `lucide-react` (GraduationCap, Package, Zap, CreditCard, Users, ShoppingBag)
- Importar `LazyMotion, domAnimation, m` do framer-motion para animacoes de entrada
- Adicionar array de dados dos 6 cards
- Renderizar grid de cards abaixo do banner com:
  - Container `max-w-5xl` (mesmo do banner)
  - Grid `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6`
  - Cada card: fundo `#111111`, borda `1px solid #464646`, border-radius `20px`, padding responsivo
  - LED vermelho no topo (gradiente fino)
  - Glow blur sutil
  - Efeito shimmer (light-sweep animation ja existe no CSS)
  - Icone vermelho (primary) no topo
  - Titulo branco bold
  - Descricao cinza (`#999`)
  - Animacao `m.div` com fade-in-up escalonado (delay baseado no index)
  - Fonte `Articulat CF` em todos os textos

