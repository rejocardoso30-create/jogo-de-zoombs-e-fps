# ÚLTIMO SINAL — jogo web

Jogo de sobrevivência 3D executado diretamente no navegador.

## Publicação

Este repositório está configurado para o Render como site estático. O diretório publicado é `dist`; não há etapa de build nem instalação de dependências.

- Página inicial: `dist/index.html`
- Código do jogo: `dist/game.js`
- Estilos: `dist/interface.css`
- Motor 3D: Three.js 0.160.0 carregado por CDN jsDelivr.

O navegador precisa oferecer suporte a WebGL e acesso à internet para carregar o módulo Three.js pelo CDN.

## Executar localmente

Abra um terminal na raiz do repositório e execute:

```bash
python -m http.server 8000 --directory dist
```

Acesse `http://localhost:8000`. Não abra o HTML diretamente por `file://`, pois o jogo usa módulos JavaScript.

## Controles

W/A/S/D mover · Shift correr · Espaço pular · C agachar · Mouse olhar · Clique esquerdo atacar/usar · Clique direito mirar · E interagir · R recarregar · 1–6 selecionar equipamento · Q mochila · Esc pausar · P câmera · F lanterna · V empurrar · B construir · G reparar · X desmontar · K salvar · N pular tutorial.

O progresso é salvo no armazenamento local do navegador (`localStorage`) e não é sincronizado entre navegadores ou domínios.