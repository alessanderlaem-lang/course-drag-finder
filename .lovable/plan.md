
## Alterar botão "Login" para "Área de Membros"

Trocar o texto do botão na Navbar de "Login" para "Área de Membros" e ajustar o estilo para acomodar o texto maior.

### Alterações no arquivo `src/components/Navbar.tsx`:

1. **Botão Desktop**: Reduzir o padding horizontal, diminuir levemente o tamanho da fonte e trocar o texto para "Área de Membros"
2. **Botão Mobile** (dentro do menu hamburguer): Trocar o texto para "Área de Membros"

### Detalhes Técnicos

- Botão desktop: reduzir padding de `16px 41px` para algo como `12px 28px` e fonte de `15px` para `14px` para o texto maior não ficar desproporcional
- Manter o estilo arredondado (pill shape) e efeito hover existentes
- Trocar ambas as ocorrências de "Login" no componente
