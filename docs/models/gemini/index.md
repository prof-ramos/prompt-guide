# Gemini - Google AI

O Gemini é uma família de modelos de linguagem desenvolvidos pelo Google, conhecidos por sua capacidade multimodal avançada e contexto extenso.

## 🎯 Características Principais

<div class="grid cards" markdown>

-   :material-eye: **Análise Multimodal**

    ---

    Processamento integrado de texto, imagem, áudio e vídeo em uma única sessão

-   :material-infinity: **Contexto Extenso**

    ---

    Até 2M tokens de contexto para análise de documentos longos e projetos complexos

-   :material-brain: **Raciocínio Avançado**

    ---

    Capacidades de raciocínio aprimoradas com controle granular de esforço

-   :material-code-braces: **Execução de Código**

    ---

    Capacidade nativa de executar código Python e análise de dados em tempo real

-   :material-tools: **Uso de Ferramentas**

    ---

    Integração eficiente com APIs e ferramentas externas para tarefas agênticas

-   :material-speedometer: **Velocidade Variável**

    ---

    Diferentes modelos otimizados para velocidade ou qualidade conforme necessário

</div>

## 🚀 Modelos Disponíveis

| Modelo | Uso Ideal | Velocidade | Capacidades | Contexto |
|--------|-----------|------------|-------------|----------|
| **Gemini 1.5 Flash** | Tarefas rápidas e cotidianas | :material-lightning-bolt: Muito Alta | :material-star::material-star: Boa | 1M tokens |
| **Gemini 1.5 Pro** | Equilíbrio ideal | :material-speedometer: Média | :material-star::material-star::material-star::material-star: Excelente | 2M tokens |
| **Gemini 2.0 Flash** | Nova geração rápida | :material-lightning-bolt: Alta | :material-star::material-star::material-star: Muito Boa | 1M tokens |

## 💼 Casos de Uso Ideais

### Análise Multimodal
- Processamento de imagens com texto contextual
- Análise de documentos com gráficos e diagramas
- Interpretação de capturas de tela e interfaces
- Análise de dados visuais combinada com texto

### Desenvolvimento Agêntico
- Workflows autônomos com múltiplas etapas
- Pesquisa abrangente com verificação cruzada
- Análise e modificação de bases de código
- Automação de tarefas complexas

### Processamento de Documentos
- Análise de documentos extensos (até 2M tokens)
- Síntese de múltiplas fontes de informação
- Extração estruturada de dados
- Tradução contextual de documentos longos

### Desenvolvimento de Código
- Análise de projetos completos
- Geração de código com execução
- Debugging avançado com contexto amplo
- Documentação automática de código

## 📋 Configurações Recomendadas

=== "Agência Complexa"
    ```json
    {
      "model": "gemini-1.5-pro",
      "esforco_de_raciocinio": "alto",
      "verbosidade": "média",
      "max_tokens": 4000,
      "temperature": 0.7
    }
    ```

=== "Desenvolvimento"
    ```json
    {
      "model": "gemini-1.5-pro",
      "esforco_de_raciocinio": "alto",
      "verbosidade": "alta",
      "max_tokens": 3000,
      "temperature": 0.3
    }
    ```

=== "Consultas Rápidas"
    ```json
    {
      "model": "gemini-1.5-flash",
      "esforco_de_raciocinio": "mínimo",
      "verbosidade": "baixa",
      "max_tokens": 1000,
      "temperature": 0.5
    }
    ```

=== "Pesquisa Robusta"
    ```json
    {
      "model": "gemini-1.5-pro",
      "esforco_de_raciocinio": "alto",
      "verbosidade": "média",
      "max_tokens": 4000,
      "temperature": 0.6
    }
    ```

=== "Análise Multimodal"
    ```json
    {
      "model": "gemini-1.5-pro",
      "esforco_de_raciocinio": "alto",
      "verbosidade": "alta",
      "max_tokens": 3500,
      "temperature": 0.4
    }
    ```

## ⚙️ Controles Únicos do Gemini

### Esforço de Raciocínio

!!! tip "Quando usar cada nível"
    - **Alto**: Tarefas complexas, workflows agênticos, geração de código
    - **Médio**: Análises padrão, codificação moderada
    - **Mínimo**: Consultas rápidas, snippets simples

### Controle de Verbosidade

!!! info "Opções disponíveis"
    - **Alta**: Explicações abrangentes com raciocínio detalhado
    - **Média**: Equilíbrio entre detalhes e brevidade
    - **Baixa**: Respostas concisas e diretas

## 🔧 Recursos Disponíveis

### [Snippets Raycast](snippets.md)
Coleção completa de snippets otimizados para Raycast AI, organizados por funcionalidade:
- 🤖 Agente Autônomo e Conservador
- 💻 Desenvolvimento Frontend e SWE-Bench
- 🔍 Pesquisa Robusta e Rápida
- ✍️ Escrita Markdown e Relatórios
- 🔧 Meta-otimização de Prompts

### [Configurações de API](api-config.md)
Configurações detalhadas para diferentes tipos de tarefa com presets específicos do Gemini.

## 🌟 Vantagens Exclusivas

### Multimodalidade Nativa
O Gemini processa texto, imagens, áudio e vídeo de forma integrada, permitindo análises mais ricas e completas.

### Contexto Ultra-Extenso
Com até 2M tokens de contexto, é ideal para:
- Análise de bases de código completas
- Processamento de documentos extensos
- Manutenção de contexto em sessões longas

### Flexibilidade de Performance
Escolha entre velocidade (Flash) ou qualidade máxima (Pro) conforme sua necessidade.

---

!!! success "Próximos Passos"
    Explore os [snippets Raycast](snippets.md) ou configure sua [API](api-config.md) para começar a usar o Gemini de forma otimizada.