# Snippets Raycast para Claude

Esta página contém todos os snippets otimizados para usar Claude através do Raycast AI, organizados por categoria e funcionalidade.

## 📊 Análise de Dados

### Análise Profunda (`cdd`)

!!! snippet "Análise completa de dados com metodologia estruturada"
    ```xml
    <solicitacao_analise_dados>
      <contexto>
        Objetivo: {cursor}
        Dados: [descrever fonte e formato dos dados]
        Audiência: [público-alvo do resultado]
      </contexto>
      
      <metodologia>
        1. Exploração inicial: estrutura e qualidade dos dados
        2. Limpeza: tratamento de inconsistências
        3. Análise descritiva: estatísticas principais
        4. Análise específica: resposta à questão
        5. Interpretação: contexto e implicações
      </metodologia>
      
      <formato_saida>
        - Resumo executivo (2-3 parágrafos)
        - Métricas principais (formato adequado)
        - Insights principais (3-5 pontos)
        - Recomendações acionáveis
        - Limitações e considerações
      </formato_saida>
      
      <padroes_qualidade>
        - Precisão absoluta - sem alucinações
        - Apenas fatos verificáveis
        - Use a ferramenta de análise para cálculos complexos
      </padroes_qualidade>
    </solicitacao_analise_dados>
    ```

### Análise Rápida (`cdq`)

!!! snippet "Análise concisa focada nos insights essenciais"
    ```xml
    <analise_rapida_dados>
      <tarefa>{cursor}</tarefa>
      
      <abordagem>
        - Foco nos insights principais
        - Máximo de 3 parágrafos
        - Apenas métricas essenciais
        - Recomendação clara
      </abordagem>
      
      <restricoes>
        - Use a ferramenta de análise se necessário
        - Seja direto e objetivo
        - Evite elaborações desnecessárias
      </restricoes>
    </analise_rapida_dados>
    ```

## 🔍 Pesquisa

### Pesquisa Robusta (`crr`)

!!! snippet "Pesquisa abrangente com metodologia em 3 fases"
    ```xml
    <pesquisa_abrangente>
      <topico>{cursor}</topico>
      
      <estrategia_pesquisa>
        Fase 1 - Mapeamento (2-3 buscas amplas):
        - Entender o cenário geral do tópico
        - Identificar fontes autoritativas
        - Mapear aspectos principais
        
        Fase 2 - Aprofundamento:
        - `web_fetch` em fontes da Fase 1
        - Buscas específicas para lacunas
        - Coleta de dados quantitativos
        
        Fase 3 - Síntese:
        - Integrar múltiplas fontes
        - Identificar padrões/tendências
        - Formular conclusões fundamentadas
      </estrategia_pesquisa>
      
      <requisitos_saida>
        - TL;DR inicial (2-3 frases)
        - Estrutura em prosa, não em marcadores
        - Citações adequadas das fontes
        - Resumo final (bottom line up front)
      </requisitos_saida>
      
      <criterios_busca>
        - Priorizar fontes primárias/oficiais
        - Máximo de 7 buscas para tópicos complexos
        - Usar `web_fetch` para análise completa
      </criterios_busca>
    </pesquisa_abrangente>
    ```

### Verificação de Fatos (`crf`)

!!! snippet "Verificação rigorosa de informações com múltiplas fontes"
    ```xml
    <verificacao_fatos>
      <alegacao_a_verificar>{cursor}</alegacao_a_verificar>
      
      <processo_verificacao>
        1. Buscar fontes primárias e oficiais
        2. Comparar múltiplas fontes independentes
        3. Verificar data e contexto das informações
        4. Identificar possível viés ou limitações
      </processo_verificacao>
      
      <formato_saida>
        - Status: [Confirmado/Parcialmente correto/Incorreto/Inconclusivo]
        - Evidências: fontes e dados de suporte
        - Nuances: contexto importante ou limitações
        - Confiabilidade: avaliação da qualidade das fontes
      </formato_saida>
    </verificacao_fatos>
    ```

## 💻 Desenvolvimento

### Frontend (`cvf`)

!!! snippet "Desenvolvimento frontend com Next.js e Tailwind CSS"
    ```xml
    <desenvolvimento_frontend>
      <tarefa>{cursor}</tarefa>
      
      <stack_tecnologico>
        - Framework: Next.js (TypeScript)
        - Estilo: Tailwind CSS (apenas classes do core)
        - Componentes: shadcn/ui, Ícones Lucide
        - Estado: useState/useReducer (NUNCA localStorage)
        - Animações: transições CSS, efeitos de hover
      </stack_tecnologico>
      
      <principios_design>
        - Funcionalidade > efeitos visuais para apps complexos
        - "Fator uau" para landing pages/marketing
        - Hierarquia visual clara (máx. 4-5 tamanhos de fonte)
        - Paleta limitada (1 neutra + máx. 2 de destaque)
        - Espaçamento em múltiplos de 4
        - Microinterações e feedback visual
      </principios_design>
      
      <entregavel>
        Criar um artefato React funcional e completo, não um placeholder.
      </entregavel>
    </desenvolvimento_frontend>
    ```

### Revisão de Código (`cvr`)

!!! snippet "Revisão estruturada com critérios de qualidade"
    ```xml
    <revisao_codigo>
      <codigo_a_revisar>{cursor}</codigo_a_revisar>
      
      <criterios_revisao>
        - Funcionalidade: o código faz o que deveria?
        - Legibilidade: nomes claros, estrutura compreensível
        - Desempenho: otimizações necessárias
        - Segurança: vulnerabilidades potenciais
        - Manutenibilidade: facilidade de modificação futura
        - Padrões: aderência às convenções estabelecidas
      </criterios_revisao>
      
      <formato_saida>
        - Resumo geral (1-2 parágrafos)
        - Problemas críticos (se houver)
        - Sugestões de melhoria (priorizadas)
        - Pontos positivos
        - Código refatorado (se aplicável)
      </formato_saida>
    </revisao_codigo>
    ```

## 🏛️ Documentos Profissionais (ASOF)

### Documentos ASOF (`cwa`)

!!! snippet "Escrita profissional para o Serviço Exterior Brasileiro"
    ```xml
    <escrita_profissional_asof>
      <contexto>
        Tipo: {cursor}
        Audiência: [definir público-alvo]
        Objetivo: [informar/persuadir/documentar]
      </contexto>
      
      <diretrizes_linguagem>
        - Usar "Serviço Exterior Brasileiro" em vez de "diplomacia" para Oficiais de Chancelaria
        - Tom formal mas acessível
        - Precisão terminológica institucional
        - Linguagem clara e objetiva
        - Evitar jargão desnecessário
      </diretrizes_linguagem>
      
      <estrutura>
        1. Abertura: contexto + objetivo claro
        2. Desenvolvimento: argumentação estruturada
        3. Conclusão: síntese + próximos passos
      </estrutura>
      
      <padroes_qualidade>
        - Precisão absoluta - sem alucinações
        - Apenas fatos verificáveis
        - Fundamentação sólida
        - Formatação consistente
      </padroes_qualidade>
      
      <entregavel>
        Criar um artefato markdown para facilitar o uso externo.
      </entregavel>
    </escrita_profissional_asof>
    ```

## 🔧 Meta-Otimização

### Otimizar Prompt (`cmo`)

!!! snippet "Análise e otimização de prompts existentes"
    ```xml
    <otimizacao_prompt>
      Analise este prompt e identifique melhorias específicas:
      
      PROMPT ATUAL: {cursor}
      
      COMPORTAMENTO OBSERVADO: [descrever resultado atual]
      COMPORTAMENTO DESEJADO: [descrever resultado ideal]
      
      <criterios_otimizacao>
        1. Eliminar ambiguidades e contradições
        2. Melhorar a clareza das instruções
        3. Otimizar para o resultado desejado
        4. Manter a simplicidade
        5. Considerar características específicas do Claude Sonnet 4
      </criterios_otimizacao>
      
      <formato_saida>
        - Diagnóstico: problemas identificados
        - Soluções: mudanças específicas sugeridas
        - Prompt revisado: versão otimizada
        - Explicação: raciocínio por trás das mudanças
      </formato_saida>
    </otimizacao_prompt>
    ```

## ⚙️ Configuração no Raycast

### Estrutura de Grupos

| Grupo | Ícone | Cor | Snippets |
|-------|-------|-----|----------|
| Claude - Análise de Dados | 📊 | Azul | `cdd`, `cdq` |
| Claude - Pesquisa | 🔍 | Verde | `crr`, `crf` |
| Claude - Desenvolvimento | 💻 | Laranja | `cvf`, `cvr` |
| Claude - ASOF | 🏛️ | Roxo | `cwa` |
| Claude - Meta | 🔧 | Cinza | `cmo` |

### Atalhos Recomendados

- **Raycast Principal:** ++cmd+space++ (padrão)
- **Snippets Direto:** ++cmd+shift+semicolon++

### Configurações de Snippet

!!! tip "Otimizações Recomendadas"
    - ✅ Auto-expandir habilitado
    - ✅ Mostrar no menu habilitado  
    - ✅ Incluir na busca habilitado
    - ✅ Usar emojis para identificação visual

---

!!! success "Pronto para usar?"
    Copie os snippets desejados e configure no Raycast seguindo a estrutura de grupos sugerida. Cada snippet foi otimizado especificamente para as capacidades do Claude.