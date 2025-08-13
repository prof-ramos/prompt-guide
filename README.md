# Guia de Prompts para Modelos de IA

Este repositório organiza uma coleção de prompts, snippets e configurações para diversos modelos de linguagem e ferramentas de desenvolvimento.

## Estrutura de Diretórios

A estrutura foi projetada para ser modular e fácil de navegar:

```
/prompt-guide/
├───README.md
├───CLAUDE.md
├───.claude/
│   └───settings.json
├───configs/
│   └───coderabbit.yaml
├───manual/
│   └───coderabbitai-cline/
│       ├───README.md
│       └───uso.md
├───models/
│   ├───claude/
│   │   ├───README.md
│   │   ├───api-config.json
│   │   ├───raycast-snippets.md
│   │   └───raycast-snippets-pt-br.md
│   ├───gemini/
│   │   ├───README.md
│   │   ├───GEMINI.md
│   │   ├───api-config.json
│   │   └───[subdiretórios específicos]
│   ├───gpt-5/
│   │   ├───README.md
│   │   ├───api-config.json
│   │   ├───raycast-snippets.md
│   │   ├───cursor-rules.md
│   │   └───[outros arquivos]
│   ├───grok-4/
│   │   ├───README.md
│   │   ├───api-config.json
│   │   ├───raycast-snippets.md
│   │   └───raycast-snippets-pt-br.md
│   └───perplexity/
│       ├───README.md
│       ├───api-config.json
│       ├───raycast-snippets.md
│       └───raycast-snippets-pt-br.md
└───tools/
    └───raycast/
        ├───legacy-config.md
        └───ai-setup/
            ├───ai-commands/
            └───ai-presets/
```

### Diretórios Principais

- **`configs/`**: Configurações compartilhadas entre modelos (CodeRabbit, etc.)
- **`manual/`**: Documentação detalhada sobre ferramentas e processos
- **`models/`**: Diretórios organizados por modelo de IA, cada um com:
  - `README.md` - Documentação específica do modelo
  - `api-config.json` - Configurações de API otimizadas
  - `raycast-snippets.md` - Snippets para Raycast AI
  - Arquivos específicos por modelo (cursor-rules, templates, etc.)
- **`tools/`**: Configurações e setup para ferramentas específicas (Raycast, Cursor, etc.)
- **`.claude/`**: Configurações específicas para Claude Code
