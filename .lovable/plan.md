

## Nova Secao de Fornecedores (substituindo BonusSection)

### Resumo

Remover completamente o `BonusSection` atual e criar uma nova secao dedicada chamada `FornecedoresSection` que destaca o acesso a fornecedores como um diferencial de alto valor -- nao mais como "bonus", mas como uma entrega principal com secao propria.

### Conceito Visual

Em vez de cards simples com badge de bonus, a nova secao tera um layout premium com:

1. **Cabecalho impactante** -- Titulo grande tipo "Acesso a Fornecedores Exclusivos" com subtitulo explicando que o membro tem acesso direto a fornecedores de diversas categorias
2. **Grid de categorias** -- Cards compactos e elegantes mostrando cada tipo de fornecedor (Rateio, Streaming, Ferramentas Premium, Cursos, Templates, etc.) com icones e descricao curta
3. **Destaque visual** -- Container principal com o estilo premium (fundo #111, borda #464646, LED vermelho, shimmer) envolvendo todo o conteudo, dando peso visual a secao inteira

### Categorias de Fornecedores (sugestao)

- **Rateio de Cursos** -- Acesso a cursos premium por uma fracao do preco
- **Streaming** -- Contas e acessos a plataformas de streaming
- **Ferramentas Premium** -- ChatGPT, Canva Pro, CapCut e 50+ ferramentas
- **Templates e PLRs** -- Produtos prontos para revenda e uso
- **Materiais do Digital** -- Criativos, copys, funis validados
- **Consulta de Dados** -- Puxada de dados exclusiva via Telegram

### Detalhes tecnicos

**Arquivos afetados:**

1. **`src/components/sections/FornecedoresSection.tsx`** (novo) -- Componente da nova secao
2. **`src/pages/Index.tsx`** -- Remover import e uso do `BonusSection`, adicionar `FornecedoresSection` no mesmo lugar
3. **`src/components/BonusSection.tsx`** -- Nao sera deletado (pode ser util futuramente), apenas removido do Index

**Estrutura do componente:**

- LazyMotion + framer-motion para animacoes de entrada
- Container premium com LED vermelho e shimmer (reutilizando o padrao visual existente)
- Grid responsivo: 2 colunas no mobile, 3 no desktop
- Cada card de categoria: icone Lucide + titulo + descricao curta
- Fundo da secao: preto (bg-black) com o container central em #111111
- Icones em vermelho (#FF0000) para manter consistencia com a identidade visual

**Posicao na pagina:** Mesmo lugar do BonusSection atual (depois do HowAccessWorks), mantendo o id `bonus-section` e as margens negativas para compatibilidade

