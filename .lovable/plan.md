

## Corrigir erro de build - Facebook Pixel noscript

### Problema
O Vite nao permite uma tag `<noscript>` contendo `<img>` dentro do `<head>`. Isso causa o erro `disallowed-content-in-noscript-in-head`.

### Solucao
Mover a tag `<noscript>` do Facebook Pixel do `<head>` para logo apos a abertura do `<body>` no `index.html`. O script principal do Pixel permanece no `<head>` (esta correto la).

### Detalhes tecnicos

**Arquivo: `index.html`**

1. Remover a linha 33 do `<head>`:
```html
<noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=653351790061731&ev=PageView&noscript=1"/></noscript>
```

2. Adicionar essa mesma linha logo apos `<body>`, antes do `<div id="root">`:
```html
<body>
  <noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=653351790061731&ev=PageView&noscript=1"/></noscript>
  <div id="root"></div>
  ...
</body>
```

Nenhuma outra mudanca necessaria.
