# CAJ TECH - Landing Page

Landing page de alta conversão para o SaaS CAJ TECH, sistema de gestão para barbearias.

## 🚀 Como rodar localmente

1. **Clone o repositório e instale as dependências:**
   ```bash
   npm install
   ```

2. **Configure as variáveis de ambiente:**
   - Copie `.env.example` para `.env.local`
   - Adicione suas credenciais do Supabase:
     ```
     NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
     ```

3. **Execute o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Abra [http://localhost:3000](http://localhost:3000) no navegador**

## 🛠️ Stack Tecnológica

- **Framework:** Next.js 14 (App Router)
- **Estilização:** Tailwind CSS
- **Tipografia:** Inter (Google Fonts)
- **Formulários:** Supabase para captura de leads
- **Deploy:** Compatível com Vercel

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── layout.tsx      # Layout principal com meta tags
│   ├── page.tsx        # Página inicial
│   └── globals.css     # Estilos globais
├── components/
│   ├── Header.tsx      # Header fixo com navegação
│   ├── Hero.tsx        # Seção principal
│   ├── ProvaSocial.tsx # Prova social e estatísticas
│   ├── ComoFunciona.tsx# Como funciona (3 passos)
│   ├── Funcionalidades.tsx # Grid de funcionalidades
│   ├── Planos.tsx      # Cards de planos
│   ├── Depoimentos.tsx # Depoimentos de clientes
│   ├── FAQ.tsx         # Perguntas frequentes
│   ├── Footer.tsx      # CTA final e footer
│   └── LeadForm.tsx    # Formulário de captura de leads
└── lib/
    └── supabase.ts     # Configuração do Supabase
```

## 🎨 Design

- **Paleta:** Preto (#000000), dourado (#EAB308), branco (#FFFFFF)
- **Tipografia:** Inter (sans-serif moderna)
- **Mobile-first:** 100% responsivo
- **Acessibilidade:** Contraste adequado, navegação por teclado

## 📝 Próximos Passos

- [ ] Substituir placeholders de imagens por assets reais
- [ ] Configurar Google Analytics
- [ ] Integrar links reais (demo, WhatsApp, Calendly)
- [ ] Criar tabela `demo_leads` no Supabase
- [ ] Testar formulário de leads
- [ ] Otimizar performance e SEO

## 🚀 Deploy no Vercel

1. Conecte seu repositório no Vercel
2. Adicione as variáveis de ambiente
3. Deploy automático a cada push

## 📞 Suporte

Para dúvidas sobre o projeto, entre em contato via WhatsApp ou e-mail.
