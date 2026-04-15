/**
 * Configuração do Supabase para captura de leads
 *
 * INSTRUÇÕES:
 * 1. Acesse https://supabase.com e crie um projeto (ou use o existente)
 * 2. Vá em Project Settings > API
 * 3. Copie a URL do projeto e a chave anônima (anon public)
 * 4. Crie um arquivo .env.local na raiz do projeto com:
 *
 *    NEXT_PUBLIC_SUPABASE_URL=sua-url-aqui
 *    NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-chave-aqui
 *
 * 5. Crie a tabela `demo_leads` no Supabase com as colunas:
 *    - id (uuid, primary key, default: gen_random_uuid())
 *    - name (text, not null)
 *    - email (text, not null)
 *    - phone (text, not null)
 *    - barber_shop (text, not null)
 *    - source (text, default: 'landing-page')
 *    - created_at (timestamp, default: now())
 *
 * SQL para criar a tabela:
 *
 * create table public.demo_leads (
 *   id uuid default gen_random_uuid() primary key,
 *   name text not null,
 *   email text not null,
 *   phone text not null,
 *   barber_shop text not null,
 *   source text default 'landing-page',
 *   created_at timestamp with time zone default now()
 * );
 *
 * -- Habilitar RLS (Row Level Security)
 * alter table public.demo_leads enable row level security;
 *
 * -- Policy para permitir inserts públicos
 * create policy "Anyone can insert leads"
 *   on public.demo_leads
 *   for insert
 *   with check (true);
 */

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://your-project.supabase.co';
const supabaseKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'your-anon-key';

export { supabaseUrl, supabaseKey };
