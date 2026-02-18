

## Atualizar texto do social proof na Hero Section

### O que muda
Substituir o texto atual longo por uma versão mais curta e direta que cabe perfeitamente em 2 linhas no mobile.

### Texto atual
> "Junte-se a +9.000 membros na maior comunidade de rateio do Brasil."

### Novo texto
> "Junte-se a mais de **9.000 membros**"

- A palavra "9.000 membros" ficara em destaque (bold/branco)
- Cabe em ~2 linhas dentro do container de 140px com font-size `text-xs`

### Detalhes tecnicos

**Arquivo:** `src/components/sections/HeroSection.tsx`

Alterar o conteudo do `<p>` ao lado dos avatares:

```tsx
// De:
Junte-se a{" "}
<b className="text-white">+9.000 membros na maior comunidade de rateio do Brasil.</b>

// Para:
Junte-se a mais de{" "}
<b className="text-white">9.000 membros</b>
```

Nenhuma alteracao de estilo ou layout necessaria - apenas o texto muda.
