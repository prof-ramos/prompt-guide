# Claude - Anthropic

Claude é uma família de modelos de linguagem desenvolvidos pela Anthropic, conhecidos por sua capacidade de raciocínio avançado e segurança.

## 🎯 Características Principais

<div class="grid cards" markdown>

-   :material-brain: **Raciocínio Avançado**

    ---

    Capacidade superior de análise lógica e resolução de problemas complexos

-   :material-code-braces: **Interpretação de Código**

    ---

    Excelente para análise, geração e depuração de código em múltiplas linguagens

-   :material-memory: **Contexto Longo**

    ---

    Mantém contexto extenso para conversas longas e análises detalhadas

-   :material-tools: **Uso de Ferramentas**

    ---

    Integração eficiente com APIs e ferramentas externas

</div>

## 🚀 Modelos Disponíveis

| Modelo | Uso Ideal | Velocidade | Qualidade |
|--------|-----------|------------|-----------|
| **Haiku** | Tarefas rápidas e simples | :material-lightning-bolt: Alta | :material-star: Boa |
| **Sonnet** | Equilíbrio geral | :material-speedometer: Média | :material-star::material-star::material-star: Excelente |
| **Opus** | Tarefas complexas | :material-tortoise: Baixa | :material-star::material-star::material-star::material-star::material-star: Superior |

## 💼 Casos de Uso Ideais

### Desenvolvimento
- Análise e revisão de código
- Geração de documentação técnica
- Debugging e otimização
- Arquitetura de software

### Análise
- Processamento de documentos longos
- Raciocínio lógico complexo
- Análise de dados estruturados
- Research e síntese de informações

### Criação
- Escrita técnica e criativa
- Geração de conteúdo estruturado
- Tradução com contexto
- Planejamento de projetos

## 📋 Configurações Recomendadas

=== "Desenvolvimento"
    ```json
    {
      "model": "claude-sonnet-3.5",
      "max_tokens": 4000,
      "temperature": 0.3,
      "reasoning_effort": "high"
    }
    ```

=== "Análise"
    ```json
    {
      "model": "claude-opus-3",
      "max_tokens": 8000,
      "temperature": 0.2,
      "reasoning_effort": "high"
    }
    ```

=== "Criação"
    ```json
    {
      "model": "claude-sonnet-3.5",
      "max_tokens": 4000,
      "temperature": 0.7,
      "reasoning_effort": "medium"
    }
    ```

!!! tip "Dica de Performance"
    Use `reasoning_effort: "high"` para tarefas complexas que requerem análise profunda, e `"medium"` para tarefas cotidianas.

## 🔧 Recursos Disponíveis

### [Snippets Raycast](snippets.md)
Coleção de snippets otimizados para Raycast AI, incluindo versões em português e inglês.

### [Configurações de API](api-config.md)
Configurações detalhadas para diferentes tipos de tarefa com presets otimizados.

### [Integrações](integracoes.md)
Guias para integrar Claude com IDEs, ferramentas de produtividade e workflows.

---

!!! success "Próximos Passos"
    Explore os [snippets Raycast](snippets.md) ou configure sua [API](api-config.md) para começar a usar Claude de forma otimizada.