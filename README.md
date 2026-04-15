# CAJ TECH - Landing Page

Landing page de alta conversão para o SaaS **CAJ TECH** (sistema de gestão para barbearias).

## ✨ Atualizações Recentes (v2.0)

### Novos Componentes Adicionados
- **Visões.tsx** - Mostra 3 personas diferentes (Dono, Barbeiro, CEO)
- **DemoShowcase.tsx** - Demonstração interativa de 4 visões do sistema
- **DepoimentosAvancado.tsx** - Cases reais com métricas e estatísticas
- **ComparacaoPlanos.tsx** - Tabela comparativa entre planos (Starter, PRO, Elite)

### Melhorias em Componentes Existentes
- **Funcionalidades**: Expandido de 6 para 10 recursos com descrições mais detalhadas
- **ComoFunciona**: Adicionado mais contexto e benefícios mensuráveis
- **page.tsx**: Reordenado com sales funnel otimizado para conversão

### Novo Fluxo de Página
1. Hero + Estatísticas
2. Como Funciona
3. Visões (3 personas)
4. Demo Showcase (interativa)
5. Funcionalidades (10 features)
6. Planos
7. Comparação Planos
8. Depoimentos (casos reais)
9. FAQ
10. CTA Final

## 📸 Como Adicionar Imagens (IMPORTANTE!)

Os novos componentes estão **100% funcionais**, mas ganham muito mais impacto com imagens. Aqui estão os locais recomendados para adicionar:

### Prioridade ALTA
1. **Hero.tsx** - Imagem principal do sistema (mockup de celular com app)
2. **DemoShowcase.tsx** - Screenshots dos dashboards reais

### Prioridade MÉDIA
3. **Visoes.tsx** - Fotos/avatares das personas
4. **DepoimentosAvancado.tsx** - Fotos dos donos/barbeiros que deram depoimento

### Como adicionar
1. Coloque as imagens em `public/images/`
2. Importe/use no componente: `<img src="/images/seu-arquivo.png" />`
3. O design já está pronto para receber imagens de qualquer tamanho

## 🧪 Testando os Novos Componentes Localmente

Após `npm run dev`, visite:

- **http://localhost:3000** - Ver página completa com novos componentes
- **Scroll down** para ver seção "Uma solução para cada perfil" (Visões)
- **Continue scrolling** para "O sistema em ação" (Demo Showcase) com abas interativas
- **Comparação de Planos** está entre Preços e Depoimentos

## 🚀 Como rodar localmente

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### 1. Instalar dependências
```bash
npm install
```

### 2. Configurar variáveis de ambiente
Crie um arquivo `.env.local` na raiz do projeto:

```env
# URL do seu site (usado para meta tags OG)
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Credenciais do Supabase (obter em https://supabase.com)
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-chave-anon-publica
```

### 3. Configurar o Supabase
Acesse o painel do Supabase e execute o SQL abaixo para criar a tabela de leads:

```sql
create table public.demo_leads (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text not null,
  phone text not null,
  barber_shop text not null,
  source text default 'landing-page',
  created_at timestamp with time zone default now()
);

alter table public.demo_leads enable row level security;

create policy "Anyone can insert leads"
  on public.demo_leads
  for insert
  with check (true);
```

### 4. Rodar em desenvolvimento
```bash
npm run dev
```

Acesse **http://localhost:3000**

### 5. Build para produção
```bash
npm run build
npm start
```

## 📁 Estrutura de pastas

```
site-vitrine/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Layout raiz com metadata SEO
│   │   ├── page.tsx         # Página principal (montagem dos componentes)
│   │   └── globals.css      # Estilos globais e variáveis de tema
│   ├── components/
│   │   ├── Header.tsx       # Header fixo com navegação
│   │   ├── Hero.tsx         # Seção hero com CTAs
│   │   ├── ProvaSocial.tsx  # Estatísticas e logos
│   │   ├── ComoFunciona.tsx # 3 passos simples
│   │   ├── Funcionalidades.tsx # Grid de features
│   │   ├── Planos.tsx       # Cards de preços
│   │   ├── Depoimentos.tsx  # Testemunhos de clientes
│   │   ├── FAQ.tsx          # Perguntas frequentes (accordion)
│   │   ├── CTAFinal.tsx     # Call-to-action final
│   │   ├── Footer.tsx       # Footer completo
│   │   └── LeadForm.tsx     # Formulário de captura de leads
│   └── lib/
│       └── supabase.ts      # Configuração do Supabase
├── public/
├── .env.local               # Variáveis de ambiente (não versionado)
├── next.config.mjs          # Configuração do Next.js
├── tailwind.config.ts       # Configuração do Tailwind
├── tsconfig.json            # Configuração do TypeScript
└── package.json
```

## 🎨 Paleta de cores

| Cor | Hex | Uso |
|-----|-----|-----|
| Dourado | `#d4a843` | CTAs, destaques, ícones |
| Dourado hover | `#b8922e` | Estados hover |
| Preto premium | `#1a1a1a` | Textos principais, footer |
| Branco | `#ffffff` | Fundo principal |
| Cinza claro | `#f9fafb` | Seções alternadas |
| Cinza texto | `#6b7280` | Textos secundários |

## 🔗 Links para configurar

Procure por `TODO` nos arquivos para encontrar todos os links que precisam ser substituídos:

- **Header.tsx**: Link de trial (`#`)
- **Hero.tsx**: Link de demonstração e trial
- **Planos.tsx**: Links de checkout para cada plano
- **FAQ.tsx**: Link do WhatsApp
- **CTAFinal.tsx**: Link de trial
- **Footer.tsx**: Redes sociais, WhatsApp, e-mail, termos de uso

## 📊 Analytics

Para adicionar Google Analytics GA4, descomente o código no `layout.tsx` e substitua `G-XXXXXXXXXX` pelo seu ID.

## 🚀 Deploy na Vercel

1. Conecte o repositório à Vercel
2. Configure as variáveis de ambiente no painel da Vercel:
   - `NEXT_PUBLIC_SITE_URL`
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
3. Deploy automático a cada push na branch main

## 📝 Observações

- Todo texto está em **português do Brasil**
- Design **mobile-first** e 100% responsivo
- Micro-interações: hover em botões, fade-in, accordion no FAQ
- Acessibilidade: contraste adequado, labels em inputs, navegação por teclado
- SEO: meta tags, Open Graph, structured data ready
