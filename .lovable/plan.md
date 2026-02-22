
## Transformar os cards da AboutSection no formato grande (estilo Bonus)

### O que muda

Os 3 cards pequenos em grid (estilo compacto com icone) vao ser substituidos por 3 cards grandes empilhados verticalmente, no mesmo formato visual dos cards de bonus: imagem a esquerda + titulo e descricao a direita.

**Sem incluir**: numero de bonus, preco riscado, badge "NESSA OFERTA: GRATIS" -- pois aqui e o que a pessoa recebe, nao bonus.

### Imagens para cada card

1. **+10k de Cursos via Fornecedores** -- `bonus-ofertas.jpeg`
2. **Atualizacoes Semanais** -- `bonus-2.jpeg` (era a imagem original desse conteudo)
3. **Grupos de Networking no WhatsApp** -- `bonus-networking-new.webp`

### Detalhes tecnicos

**Arquivo:** `src/components/sections/AboutSection.tsx`

- Remover imports de icones Lucide (GraduationCap, Package, Zap) pois nao serao mais usados
- Importar as 3 imagens dos assets
- Atualizar a interface `BenefitCard` para ter campo `image: string` em vez de `icon: LucideIcon`
- Trocar o grid de 3 colunas por um `flex flex-col gap-6 md:gap-8` (cards empilhados)
- Cada card tera o layout do BonusCard: flex row no desktop (imagem + conteudo), flex column no mobile
- Manter todos os efeitos visuais: LED vermelho no topo, glow blur, shimmer (light-sweep)
- Manter o mesmo estilo do card: fundo #111111, borda 1px #464646, border-radius 20px, padding 25px
- Conteudo de cada card: apenas titulo (branco, bold, grande, uppercase) + descricao (cinza #999)
- Manter o cabecalho da secao e o placeholder de video inalterados
