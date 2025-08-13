# Regras Cursor AI - Otimização para GPT-5

## Arquivo .cursorrules para projetos

```markdown
# Regras de Otimização para GPT-5 no Cursor

## Padrões de Qualidade de Código
Escreva código visando a clareza primeiro. Prefira soluções legíveis e de fácil manutenção, com nomes claros, comentários onde necessário e fluxo de controle direto. Não produza código "code-golf" ou "one-liners" excessivamente inteligentes, a menos que seja explicitamente solicitado. Use alta verbosidade ao escrever código.

## Compreensão de Contexto
Se você realizou uma edição que pode satisfazer parcialmente a consulta do USUÁRIO, mas não está confiante, colete mais informações ou use mais ferramentas antes de terminar sua vez. Evite pedir ajuda ao usuário se puder encontrar a resposta sozinho.

## Padrões de Stack Frontend
- Framework: Next.js (TypeScript)
- Estilização: TailwindCSS
- Componentes de UI: shadcn/ui
- Ícones: Lucide
- Gerenciamento de Estado: Zustand

## Processo de Auto-Reflexão
Para funcionalidades complexas:
1. Primeiro, crie uma rubrica interna para excelência (5-7 categorias)
2. Pense profundamente sobre o que constitui uma implementação de classe mundial
3. Use a rubrica para avaliar e iterar sobre a solução
4. Não mostre a rubrica ao usuário - uso interno apenas
5. Se não atingir as notas máximas, comece de novo

## Otimização do Uso de Ferramentas
- Use `apply_patch` para modificações de arquivos (recomendado sobre outros métodos de edição)
- Leia arquivos para entender o contexto antes de fazer alterações
- Pesquise na base de código para entender os padrões existentes
- Mantenha a consistência com o estilo de código existente

## Controle de Verbosidade
- ALTA verbosidade para explicações de código e lógica complexa
- MÉDIA verbosidade para atualizações de status e progresso
- BAIXA verbosidade para confirmações simples

## Princípios de Arquitetura
- Clareza e Reutilização: Componentes devem ser modulares e reutilizáveis
- Consistência: Adira ao sistema de design estabelecido
- Simplicidade: Prefira componentes focados, evite complexidade desnecessária
- Desempenho: Considere a eficiência de renderização e o tamanho do bundle

## Tratamento de Erros
- Sempre inclua `error boundaries` adequados
- Forneça mensagens de erro significativas
- Lide com estados de carregamento e vazios
- Considere casos extremos e validação

## Acessibilidade
- Use elementos HTML semânticos
- Inclua atributos ARIA adequados
- Garanta que a navegação por teclado funcione
- Mantenha os padrões de contraste de cor

## Considerações de Testes
- Escreva código testável com clara separação de responsabilidades
- Considere testes de componentes para lógica complexa
- Garanta que as funções sejam puras sempre que possível
- Mock dependências externas apropriadamente
```

## Exemplos de Regras Específicas de Projeto

### Projeto Next.js
```markdown
# Regras Específicas para Next.js

## Roteamento
- Use o App Router (diretório `app/`) para novas funcionalidades
- Implemente arquivos `loading.tsx` e `error.tsx` adequados
- Use Server Components por padrão, Client Components quando necessário

## Desempenho
- Implemente otimização de imagem adequada com `next/image`
- Use importações dinâmicas para divisão de código
- Aproveite as estratégias de cache do Next.js

## SEO
- Inclua metadados adequados nos arquivos `layout.tsx`
- Implemente dados estruturados onde apropriado
- Otimize para Core Web Vitals
```

### Biblioteca de Componentes React
```markdown
# Biblioteca de Componentes
```
