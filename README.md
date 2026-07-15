# Soft Soluções LDA — Site Institucional

Site estático multi-página para a Soft Soluções LDA, empresa de assistência
técnica em Luanda, Angola. Sem back-end, sem build step — HTML puro servido
diretamente.

**🔗 Live:** [softsolucoes.wuaze.com](https://softsolucoes.wuaze.com)

## Páginas

- `index.html` — página principal: hero com CTA para WhatsApp, contadores animados, vídeo de demonstração, marcas suportadas, benefícios, "como funciona", resumo dos serviços, dicas, FAQ e CTA para o blog.
- `servicos.html` — detalhe de todos os serviços, agrupados em três blocos: Mobile & Software, Segurança/Redes/Conectividade, Informática Empresarial & Web.
- `blog.html` — 3 artigos publicados (desbloqueio FRP Samsung, Wi-Fi lento, PC lento), marcados com `itemscope`/`itemtype="https://schema.org/Article"`.
- `contacto.html` — cartões de contacto (telefone, WhatsApp, e-mail, Instagram, site). Não existe formulário de contacto: todo o contacto é feito através de links diretos (`tel:`, `mailto:`, `wa.me`).
- `sitemap.xml` — mapa do site com as 4 páginas e os 3 artigos do blog como URLs próprias (âncoras tratadas como páginas para SEO).
- `google798dfe97aa12573d.html` — ficheiro de verificação de propriedade do Google Search Console.

## Stack

Sem framework e sem build step — cada página é um `.html` autossuficiente que carrega tudo por CDN:

- **Tailwind CSS** via `cdn.tailwindcss.com`
- **Font Awesome 6.4.0** via cdnjs
- **Google Fonts** (Plus Jakarta Sans)
- **JavaScript vanilla**, inline em cada página (sem ficheiro `.js` partilhado)

## Funcionalidades (JS)

- Menu mobile com toggle de ícone (hamburger ↔ X)
- Acordeão de FAQ usando `<details>` nativo, com rotação do ícone chevron no evento `toggle`
- Modal de vídeo (embed do YouTube), aberto ao clicar na thumbnail, fechável por botão, clique fora ou tecla `Esc`
- Animações de entrada ("reveal") ao scroll, via `IntersectionObserver`
- Contadores numéricos animados (ex. "24 horas média", "100% garantia"), também via `IntersectionObserver`

## SEO

- Meta tags completas (description, keywords, robots, geo.region/geo.placename para Luanda/Angola)
- Open Graph e Twitter Card
- JSON-LD `schema.org/LocalBusiness` com telefone, e-mail, horário e morada
- `sitemap.xml` e ficheiro de verificação do Google Search Console
- URLs canónicas em todas as páginas

## Contacto

Não há formulário nem integração de e-mail (tipo Formspree/EmailJS) em nenhuma página. O único mecanismo de contacto é através de links diretos:
- WhatsApp: `wa.me/244972445045`
- Telefone: `tel:972445045` (Unitel) e `tel:958798845` (Africell)
- E-mail: `mailto:softsolucoees@gmail.com`
- Instagram: `@softsolucoes.lda`

## Ponto pendente conhecido

No `index.html`, o modal de vídeo da secção "Veja Como Trabalhamos" usa um ID do YouTube de placeholder (`dQw4w9WgXcQ`), com um comentário no próprio código a indicar que deve ser substituído pelo ID do vídeo real da empresa. Isto ainda não foi feito — o vídeo exibido atualmente não é uma demonstração real do serviço.

## Hospedagem

Hospedagem estática gratuita em `wuaze.com`, sem servidor próprio nem processamento server-side.
