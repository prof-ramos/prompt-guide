# Configuração Raycast - Grupos e Snippets

## Estrutura de Grupos

### 1. Grupo: "Claude - Análise de Dados"
**Ícone:** 📊

#### Snippet: Análise Profunda (`cdd`)
```xml
<data_analysis_request>
  <context>
    Objetivo: {cursor}
    Dados: [descrever fonte e formato dos dados]
    Audiência: [público-alvo do resultado]
  </context>
  
  <methodology>
    1. Exploração inicial: estrutura e qualidade dos dados
    2. Limpeza: tratamento de inconsistências  
    3. Análise descritiva: estatísticas principais
    4. Análise específica: resposta à questão
    5. Interpretação: contexto e implicações
  </methodology>
  
  <output_format>
    - Resumo executivo (2-3 parágrafos)
    - Métricas principais (formato adequado)
    - Insights principais (3-5 pontos)
    - Recomendações acionáveis
    - Limitações e considerações
  </output_format>
  
  <quality_standards>
    - Precisão absoluta - sem alucinações
    - Fatos verificáveis apenas
    - Use ferramenta de análise para cálculos complexos
  </quality_standards>
</data_analysis_request>
```

#### Snippet: Análise Rápida (`cdq`)
```xml
<quick_data_analysis>
  <task>{cursor}</task>
  
  <approach>
    - Foco em insights principais
    - Máximo 3 parágrafos
    - Métricas essenciais apenas
    - Recomendação clara
  </approach>
  
  <constraints>
    - Use ferramenta de análise se necessário
    - Seja direto e objetivo
    - Evite elaborações desnecessárias
  </constraints>
</quick_data_analysis>
```

### 2. Grupo: "Claude - Pesquisa"
**Ícone:** 🔍

#### Snippet: Pesquisa Robusta (`crr`)
```xml
<comprehensive_research>
  <topic>{cursor}</topic>
  
  <research_strategy>
    Fase 1 - Mapeamento (2-3 buscas amplas):
    - Entender landscape geral do tópico
    - Identificar fontes autoritativas
    - Mapear aspectos principais
    
    Fase 2 - Aprofundamento:
    - web_fetch em fontes da Fase 1
    - Buscas específicas para lacunas
    - Coleta de dados quantitativos
    
    Fase 3 - Síntese:
    - Integrar múltiplas fontes
    - Identificar padrões/tendências
    - Formular conclusões fundamentadas
  </research_strategy>
  
  <output_requirements>
    - TL;DR inicial (2-3 frases)
    - Estrutura em prosa, não bullets
    - Citações adequadas de fontes
    - Bottom line up front ao final
  </output_requirements>
  
  <search_criteria>
    - Priorizar fontes primárias/oficiais
    - Máximo 7 buscas para tópicos complexos
    - Usar web_fetch para análise completa
  </search_criteria>
</comprehensive_research>
```

#### Snippet: Verificação de Fatos (`crf`)
```xml
<fact_checking>
  <claim_to_verify>{cursor}</claim_to_verify>
  
  <verification_process>
    1. Buscar fontes primárias e oficiais
    2. Comparar múltiplas fontes independentes
    3. Verificar data e contexto das informações
    4. Identificar possível viés ou limitações
  </verification_process>
  
  <output_format>
    - Status: [Confirmado/Parcialmente correto/Incorreto/Inconclusivo]
    - Evidências: fontes e dados de suporte
    - Nuances: contexto importante ou limitações
    - Confiabilidade: avaliação da qualidade das fontes
  </output_format>
</fact_checking>
```

### 3. Grupo: "Claude - Desenvolvimento"
**Ícone:** 💻

#### Snippet: Frontend (`cvf`)
```xml
<frontend_development>
  <task>{cursor}</task>
  
  <tech_stack>
    - Framework: Next.js (TypeScript)
    - Estilo: Tailwind CSS (apenas classes core)
    - Componentes: shadcn/ui, Lucide icons
    - Estado: useState/useReducer (NUNCA localStorage)
    - Animações: CSS transitions, hover effects
  </tech_stack>
  
  <design_principles>
    - Funcionalidade > efeitos visuais para apps complexos
    - "Fator wow" para landing pages/marketing
    - Hierarquia visual clara (4-5 tamanhos de fonte max)
    - Paleta limitada (1 neutra + 2 acentos max)
    - Espaçamento em múltiplos de 4
    - Micro-interações e feedback visual
  </design_principles>
  
  <deliverable>
    Criar artefato React funcional e completo, não placeholder.
  </deliverable>
</frontend_development>
```

#### Snippet: Code Review (`cvr`)
```xml
<code_review>
  <code_to_review>{cursor}</code_to_review>
  
  <review_criteria>
    - Funcionalidade: código faz o que deveria?
    - Legibilidade: nomes claros, estrutura compreensível
    - Performance: otimizações necessárias
    - Segurança: vulnerabilidades potenciais
    - Manutenibilidade: facilidade de modificação futura
    - Padrões: aderência às convenções estabelecidas
  </review_criteria>
  
  <output_format>
    - Resumo geral (1-2 parágrafos)
    - Problemas críticos (se houver)
    - Sugestões de melhoria (priorizadas)
    - Pontos positivos
    - Código refatorado (se aplicável)
  </output_format>
</code_review>
```

### 4. Grupo: "Claude - ASOF"
**Ícone:** 🏛️

#### Snippet: Documentos ASOF (`cwa`)
```xml
<asof_professional_writing>
  <context>
    Tipo: {cursor}
    Audiência: [definir público-alvo]
    Objetivo: [informar/persuadir/documentar]
  </context>
  
  <language_guidelines>
    - Usar "Serviço Exterior Brasileiro" em vez de "diplomacia" 
      para Oficiais de Chancelaria
    - Tom formal mas acessível
    - Precisão terminológica institucional
    - Linguagem clara e objetiva
    - Evitar jargão desnecessário
  </language_guidelines>
  
  <structure>
    1. Abertura: contexto + objetivo claro
    2. Desenvolvimento: argumentação estruturada
    3. Conclusão: síntese + próximos passos
  </structure>
  
  <quality_standards>
    - Precisão absoluta - sem alucinações
    - Fatos verificáveis apenas  
    - Fundamentação sólida
    - Formatação consistente
  </quality_standards>
  
  <deliverable>
    Criar artefato markdown para facilitar uso externo.
  </deliverable>
</asof_professional_writing>
```

### 5. Grupo: "Claude - Meta"
**Ícone:** 🔧

#### Snippet: Otimizar Prompt (`cmo`)
```xml
<prompt_optimization>
  Analise este prompt e identifique melhorias específicas:
  
  PROMPT ATUAL: {cursor}
  
  COMPORTAMENTO OBSERVADO: [descrever resultado atual]
  COMPORTAMENTO DESEJADO: [descrever resultado ideal]
  
  <optimization_criteria>
    1. Eliminar ambiguidades e contradições
    2. Melhorar clareza das instruções
    3. Otimizar para resultado desejado
    4. Manter simplicidade
    5. Considerar características específicas do Claude Sonnet 4
  </optimization_criteria>
  
  <output_format>
    - Diagnóstico: problemas identificados
    - Soluções: mudanças específicas sugeridas
    - Prompt revisado: versão otimizada
    - Explicação: raciocínio por trás das mudanças
  </output_format>
</prompt_optimization>
```

## Configurações Adicionais Recomendadas

### Hotkeys Globais
- **Raycast Principal:** ⌘ + Espaço (padrão)
- **Snippets Direto:** ⌘ + Shift + ; (configurar em Settings)

### Configurações de Snippet
- **Auto-expand:** Habilitado
- **Show in menu:** Habilitado
- **Include in search:** Habilitado

### Organização Visual
- Usar emojis consistentes para cada grupo
- Cores diferentes para cada categoria
- Descrições curtas mas descritivas
