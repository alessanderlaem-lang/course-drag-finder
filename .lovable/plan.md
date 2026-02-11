

## Mover "Como Funciona o Acesso?" para acima dos Bônus

Vou reposicionar a seção `<HowAccessWorks />` no arquivo `src/pages/Index.tsx`, movendo-a de depois do `<DiscordPreviewSection />` para antes da seção de bônus (`#bonus-section`).

### Detalhes Tecnicos

**Arquivo:** `src/pages/Index.tsx`

- Remover `<HowAccessWorks />` da posicao atual (apos `DiscordPreviewSection`)
- Inserir `<HowAccessWorks />` imediatamente antes do `div#bonus-section`
- Manter todos os espacamentos e margens existentes

A ordem final das secoes ficara:
1. HeroSection
2. AboutSection
3. Discord Laptop (mobile)
4. DiferenciaisCriticosSection
5. **HowAccessWorks** (movida para ca)
6. BonusSection
7. DiscordPreviewSection
8. TestimonialsCarousel
9. GuaranteeSection
10. PricingSection
11. Footer

