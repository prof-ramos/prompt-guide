# Ferramentas e Integrações

Esta seção contém configurações e integrações para ferramentas que potencializam o uso de modelos de IA no desenvolvimento.

## 🛠️ Ferramentas Disponíveis

<div class="grid cards" markdown>

-   :material-raycast: **Raycast AI**

    ---
    
    Launcher para macOS com snippets AI otimizados
    
    **Recursos:**
    - Snippets organizados por categoria
    - Códigos de 3 letras para acesso rápido
    - Comandos personalizados
    - Presets para diferentes modelos
    
    [:octicons-arrow-right-24: Configurar Raycast](raycast/)

-   :material-cursor-default-click: **Cursor IDE**

    ---
    
    IDE com IA integrada e regras personalizadas
    
    **Recursos:**
    - Regras de desenvolvimento
    - Padrões de código
    - Templates de arquitetura
    - Configurações otimizadas
    
    [:octicons-arrow-right-24: Ver regras Cursor](../models/gpt-5/#cursor-rules)

-   :material-code-json: **CodeRabbit**

    ---
    
    Review automático de código com IA
    
    **Recursos:**
    - Reviews em português
    - Comentários estruturados
    - Filtros customizados
    - Integração com GitHub
    
    [:octicons-arrow-right-24: Configurar CodeRabbit](../configs/coderabbit.yaml)

</div>

## 🚀 Raycast AI - Acesso Rápido

O Raycast é a ferramenta principal para acesso rápido aos prompts e templates. Aqui está como funciona:

### Categorias de Snippets

=== "Desenvolvimento"
    Códigos para desenvolvimento e programação:
    
    - `dev` - Desenvolvimento frontend com auto-reflexão
    - `ref` - Refatoração de código
    - `rev` - Review de código
    - `arc` - Arquitetura de software
    
=== "Pesquisa"
    Códigos para research e análise:
    
    - `per` - Pesquisa robusta com fontes
    - `peq` - Pesquisa rápida
    - `ana` - Análise de dados
    - `sum` - Sumarização de conteúdo
    
=== "Escrita"
    Códigos para criação de conteúdo:
    
    - `esc` - Escrita técnica
    - `rep` - Relatórios profissionais
    - `doc` - Documentação
    - `mar` - Conteúdo de marketing
    
=== "Agentes"
    Códigos para agentes autônomos:
    
    - `age` - Agente efêmero (sem persistência)
    - `agp` - Agente persistente
    - `ags` - Agente semi-persistente

### Como Usar

1. **Instale o Raycast**: [raycast.com](https://raycast.com)
2. **Configure os snippets**: Importe os arquivos de cada modelo
3. **Use os códigos**: Digite o código de 3 letras + ⌃Space
4. **Personalize**: Edite os snippets conforme sua necessidade

## ⚙️ Configurações por Ferramenta

### Raycast
- **ai-commands/**: Comandos AI customizados
- **ai-presets/**: Presets para diferentes modelos
- **legacy-config.md**: Configurações antigas (referência)

### Cursor
- **cursor-rules.md**: Regras em inglês
- **cursor-rules-pt-br.md**: Regras em português
- Configurações de stack padrão (Next.js, TypeScript, TailwindCSS)

### CodeRabbit
- Review em português brasileiro
- Comentários com emojis
- Filtros para arquivos de documentação
- Modo `review-changes`

## 🔧 Setup Recomendado

### Para Desenvolvimento Frontend

1. **Cursor IDE** com regras GPT-5
2. **Raycast** com snippets de desenvolvimento
3. **CodeRabbit** para reviews automáticos

### Para Research e Escrita

1. **Raycast** com snippets de pesquisa
2. **Perplexity** para citações automáticas
3. **Claude** para análise e estruturação

### Para Automação

1. **Raycast** com agentes personalizados
2. **Gemini** para processamento multimodal
3. **Grok-4** para dados em tempo real

## 📚 Recursos Adicionais

- **Setup Guides**: Tutoriais detalhados de configuração
- **Best Practices**: Melhores práticas por ferramenta
- **Templates**: Modelos prontos para usar
- **Troubleshooting**: Solução de problemas comuns

!!! note "Compatibilidade"
    As configurações foram testadas em macOS. Para outros sistemas, algumas adaptações podem ser necessárias.

!!! tip "Produtividade"
    Configure atalhos de teclado personalizados no Raycast para os snippets mais usados. Isso acelera significativamente o workflow.