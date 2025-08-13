# GPT-5 - Configurações e Prompts

Este diretório contém prompts, snippets e configurações otimizadas para o GPT-5.

## Arquivos Disponíveis

### Snippets Raycast
- `raycast-snippets.md` - Snippets em inglês para Raycast AI
- `raycast-snippets-pt-br.md` - Snippets em português brasileiro

### Configurações IDE
- `cursor-rules.md` - Regras para Cursor AI em inglês
- `cursor-rules-pt-br.md` - Regras para Cursor AI em português

### Estruturas OpenAI
- `openai-playground-structure.md` - Estruturas para OpenAI Playground em inglês
- `openai-playground-structure-pt-br.md` - Estruturas para OpenAI Playground em português

### Configurações
- `api-config.json` - Configurações de API otimizadas para diferentes tipos de tarefa

## Características do GPT-5

O GPT-5 oferece recursos avançados como:
- **Reasoning Effort**: Controle de profundidade de raciocínio (minimal, medium, high)
- **Verbosity Control**: Controle de verbosidade das respostas
- **Agentic Capabilities**: Capacidades agênticas aprimoradas
- **Tool Usage**: Uso otimizado de ferramentas

## Grupos de Snippets

### 🤖 Agêntico
- Agente Autônomo (`gaa`)
- Agente Conservador (`gac`)  
- Pesquisa Agêntica (`gar`)

### 💻 Desenvolvimento
- Frontend Development (`gdf`)
- SWE-Bench Style (`gds`)
- Codebase Adaptation (`gdc`)

### 🔍 Pesquisa
- Pesquisa Robusta (`grr`)
- Pesquisa Rápida (`grq`)
- Taubench Style (`grt`)

### ✍️ Escrita
- Markdown Formatado (`gwm`)
- Relatório Profissional (`gwr`)

### 🔧 Meta
- Otimização de Prompt (`gmo`)
- Controle de Reasoning Effort (`gme`)
- Controle de Verbosidade (`gmv`)

## Configurações Recomendadas por Tipo de Tarefa

### Tarefas Agênticas Complexas
```json
{
  "model": "gpt-5",
  "reasoning_effort": "high",
  "verbosity": "medium",
  "max_tokens": 4000
}
```

### Desenvolvimento de Código
```json
{
  "model": "gpt-5", 
  "reasoning_effort": "high",
  "verbosity": "high",
  "max_tokens": 3000
}
```

### Consultas Rápidas
```json
{
  "model": "gpt-5",
  "reasoning_effort": "minimal",
  "verbosity": "low",
  "max_tokens": 1000
}
```