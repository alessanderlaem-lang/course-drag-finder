
## Adicionar botao de compra na imagem de Pricing

### Objetivo
Posicionar um botao clicavel sobre a imagem de pricing, no espaco entre "OU 29,90 A VISTA" e os icones de formas de pagamento, tanto no mobile quanto no desktop.

### Abordagem
Como a secao de pricing usa imagens estaticas (`.jpg`), a solucao e envolver cada imagem em um container `relative` e posicionar um botao `absolute` sobre o espaco correto da imagem.

### Alteracoes

**Arquivo: `src/components/PricingSection.tsx`**

1. Envolver a imagem mobile (`FullBleedImage`) em um `div` com `position: relative`
2. Envolver a imagem desktop (`FullBleedImage`) em um `div` com `position: relative`
3. Em ambos os containers, adicionar um botao com `position: absolute` posicionado verticalmente no ponto correto da imagem (aproximadamente 78-82% do topo, entre o preco e os icones de pagamento)
4. O botao tera o estilo visual consistente com o resto do site: fundo vermelho (`bg-red-600`), texto branco, bordas arredondadas, efeito hover com escala
5. O texto do botao sera "GARANTIR MINHA VAGA" ou similar
6. O botao tera um link (`<a>`) apontando para a URL de compra (WhatsApp ou checkout) — usarei o mesmo link de WhatsApp ja presente no Navbar como placeholder, que pode ser trocado depois pela URL real de checkout

### Detalhes tecnicos
- Posicionamento: `absolute bottom-[15%] left-1/2 -translate-x-1/2` (ajustavel) para centralizar horizontalmente e posicionar no espaco correto
- No mobile: botao menor com `text-sm` e `px-6 py-3`
- No desktop: botao maior com `text-lg` e `px-10 py-4`
- Z-index para garantir que o botao fique acima da imagem
