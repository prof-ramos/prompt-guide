# Configurações Compartilhadas

Esta seção contém configurações que são compartilhadas entre diferentes ferramentas e modelos.

## 📁 Configurações Disponíveis

<div class="grid cards" markdown>

-   :material-robot-outline: **CodeRabbit**

    ---
    
    Configurações para reviews automáticos de código com IA
    
    **Características:**
    - Reviews em português brasileiro
    - Comentários estruturados com emojis
    - Filtros customizados para tipos de arquivo
    - Modo de revisão otimizado
    
    [:octicons-arrow-right-24: Ver configuração](coderabbit.yaml)

</div>

## 🤖 CodeRabbit Configuration

O CodeRabbit é uma ferramenta de review automático de código que usa IA para analisar pull requests e fornecer feedback estruturado.

### Configuração Atual

```yaml title="coderabbit.yaml"
language: "pt-br"
early_access: false
reviews:
  profile: "review-changes"
  request_changes_workflow: false
  high_level_summary: true
  poem: false
  review_status: true
  collapse_empty_files: true
  auto_review:
    enabled: true
    drafts: false
  path_filters:
    - "!**/*.md"
    - "!**/*.json" 
    - "!**/*.yaml"
    - "!**/*.yml"
    - "!**/*.txt"
```

### Funcionalidades Configuradas

#### 🌍 Idioma
- **Português brasileiro**: Todos os comentários e sugestões em pt-br
- **Terminologia técnica**: Mantém termos técnicos em inglês quando apropriado

#### 📝 Estilo de Review
- **Profile**: `review-changes` - Foca apenas nas mudanças do PR
- **High-level summary**: Resumo geral das mudanças
- **Status tracking**: Acompanha o status do review
- **Collapse empty**: Esconde arquivos sem comentários

#### 🎯 Filtros de Arquivo
A configuração ignora automaticamente:
- Arquivos de documentação (`*.md`)
- Arquivos de configuração (`*.json`, `*.yaml`, `*.yml`)
- Arquivos de texto simples (`*.txt`)

### Como Usar

1. **Adicione ao seu repositório**: Copie o arquivo para `.coderabbit.yaml`
2. **Configure o GitHub**: Instale o app CodeRabbit no seu repositório
3. **Abra um PR**: O CodeRabbit analisará automaticamente as mudanças
4. **Receba feedback**: Comentários estruturados em português

### Personalização

#### Modificar Filtros
```yaml
path_filters:
  - "!**/*.md"           # Ignora Markdown
  - "!**/docs/**"        # Ignora pasta docs
  - "!**/tests/**"       # Ignora testes
  - "**/*.{js,ts,jsx,tsx}" # Apenas arquivos JS/TS
```

#### Ajustar Comportamento
```yaml
reviews:
  auto_review:
    enabled: true         # Review automático
    drafts: true         # Inclui draft PRs
  request_changes_workflow: true  # Solicita mudanças quando necessário
```

## 🚀 Próximas Configurações

Planejo adicionar configurações para:

- **ESLint/Prettier**: Padronização de código
- **GitHub Actions**: Workflows de CI/CD
- **VSCode**: Extensões e configurações
- **Git**: Templates de commit e hooks

## 💡 Dicas de Uso

!!! success "Melhor Prática"
    Mantenha as configurações versionadas junto com o código para garantir consistência entre desenvolvedores.

!!! tip "Customização"
    Cada projeto pode ter necessidades específicas. Use a configuração base e ajuste conforme necessário.

!!! warning "Privacidade"
    O CodeRabbit processa o código na nuvem. Verifique as políticas de privacidade se trabalhando com código sensível.

## 📚 Recursos Relacionados

- [Documentação oficial CodeRabbit](https://docs.coderabbit.ai)
- [Guia de configuração YAML](https://docs.coderabbit.ai/guides/review-instructions)
- [Filtros de caminho](https://docs.coderabbit.ai/guides/review-instructions#path-filters)