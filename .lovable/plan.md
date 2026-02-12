

## Substituir placeholder pelo banner na seção "Como Funciona o Acesso?"

### O que sera feito
Substituir o placeholder (borda tracejada com texto "Espaco reservado para banner") pela imagem enviada do Rise Community (mockup com notebook e celular), em tamanho controlado para nao ficar muito grande.

### Alteracoes

**1. Copiar a imagem para o projeto**
- Copiar `user-uploads://Cópia-de-Cópia-de-Cópia-de-NITRO-_9.webp` para `src/assets/banner-acesso.webp`

**2. Arquivo: `src/components/HowAccessWorks.tsx`**
- Importar a imagem: `import bannerAcesso from "@/assets/banner-acesso.webp"`
- Substituir o `div` placeholder (linhas 55-57) por uma tag `img` com a imagem importada
- Aplicar `max-w-2xl` (ou `max-w-3xl`) para limitar o tamanho, `mx-auto` para centralizar, e `rounded-xl` para manter o visual consistente
- Manter a margem inferior `mb-12` para o espacamento com os steps

