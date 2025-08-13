# Templates Perplexity - Snippets Raycast (pt-BR)

## Sistema de Atalhos

### Perplexity: `p[categoria][função]`
- **p** = Perplexity
- Foco em pesquisa em tempo real, citações precisas e síntese de múltiplas fontes

## 1. Pesquisa Acadêmica (`pa` = Perplexity Acadêmica)

| Atalho | Snippet | Uso |
|--------|---------|-----|
| `par` | **P**esquisa **A**cadêmica **R**igorosa | Pesquisa acadêmica rigorosa |
| `pac` | **P**esquisa **A**cadêmica com **C**itações | Foco em citações precisas |
| `pal` | **P**esquisa **A**cadêmica de **L**iteratura | Revisão de literatura |
| `pam` | **P**esquisa **A**cadêmica **M**eta-análise | Meta-análise |
| `pas` | **P**esquisa **A**cadêmica de fonte**S** | Verificação de fontes |

### 2. Pesquisa de Mercado (`pm` = Perplexity Mercado)

| Atalho | Snippet | Uso |
|--------|---------|-----|
| `pmr` | **P**esquisa de **M**ercado **R**esearch | Pesquisa de mercado |
| `pmc` | **P**esquisa de **M**ercado **C**ompetitiva | Análise competitiva |
| `pmt` | **P**esquisa de **M**ercado **T**endências | Tendências de mercado |
| `pmd` | **P**esquisa de **M**ercado **D**ados | Dados quantitativos |
| `pmf` | **P**esquisa de **M**ercado **F**orecast | Previsões e projeções |

### 3. Verificação de Fatos (`pf` = Perplexity Fatos)

| Atalho | Snippet | Uso |
|--------|---------|-----|
| `pfv` | **P**erplexity **F**atos **V**erificar | Verificação de fatos |
| `pfc` | **P**erplexity **F**atos **C**leim | Análise de alegações |
| `pfn` | **P**erplexity **F**atos **N**otícias | Verificação de notícias |
| `pfs` | **P**erplexity **F**atos **C**ientíficos | Alegações científicas |
| `pfh` | **P**erplexity **F**atos **H**istóricos | Fatos históricos |

---

## Templates

### Grupo 1: "Perplexity - Pesquisa Acadêmica"
**Ícone:** 🎓

#### Snippet: Pesquisa Acadêmica Rigorosa (`par`)
```xml
<pesquisa_academica>
  <pergunta_de_pesquisa>{cursor}</pergunta_de_pesquisa>
  
  <metodologia>
    - Pesquisar fontes revisadas por pares dos últimos 5 anos
    - Incluir trabalhos seminais e estudos fundamentais
    - Procurar meta-análises e revisões sistemáticas
    - Cruzar referências de achados em múltiplas disciplinas
    - Identificar lacunas na pesquisa atual e debates em andamento
  </metodologia>
  
  <hierarquia_de_fontes>
    1. Artigos de periódicos revisados por pares (maior prioridade)
    2. Livros acadêmicos e monografias
    3. Anais de conferências e documentos de trabalho
    4. Relatórios governamentais e institucionais
    5. Publicações de think tanks respeitáveis
    6. Comentários e análises de especialistas (claramente rotulados)
  </hierarquia_de_fontes>
  
  <avaliacao_de_evidencias>
    - Avaliar o rigor metodológico dos estudos
    - Anotar tamanhos de amostra, grupos de controle e significância estatística
    - Identificar potenciais conflitos de interesse ou viés de financiamento
    - Procurar estudos de replicação e achados contraditórios
    - Avaliar a validade externa e a generalização
  </avaliacao_de_evidencias>
  
  <requisitos_de_citacao>
    - Fornecer citações completas com DOIs quando disponíveis
    - Incluir datas de publicação e fatores de impacto dos periódicos
    - Anotar se os estudos são preprints vs. publicados
    - Linkar diretamente para as fontes originais
    - Distinguir entre pesquisa primária e fontes secundárias
  </requisitos_de_citacao>
  
  <abordagem_de_sintese>
    - Organizar os achados tematicamente, não apenas cronologicamente
    - Destacar áreas de consenso vs. debate em andamento
    - Identificar tendências de pesquisa e paradigmas emergentes
    - Anotar limitações metodológicas e necessidades de pesquisa futura
    - Fornecer avaliação equilibrada da força das evidências
  </abordagem_de_sintese>
</pesquisa_academica>
```

#### Snippet: Foco em Citações Precisas (`pac`)
```xml
<citacoes_precisas>
  <topico>{cursor}</topico>
  
  <padroes_de_citacao>
    - Toda alegação factual deve estar vinculada a uma fonte específica
    - Incluir números de página ou referências de seção ao citar livros
    - Distinguir entre citações diretas e paráfrases
    - Anotar quando a informação vem de resumos vs. artigos completos
    - Identificar fontes primárias vs. fontes que citam outros trabalhos
  </padroes_de_citacao>
  
  <verificacao_de_fontes>
    - Verificar se as fontes realmente suportam as alegações feitas
    - Verificar possível má interpretação ou seleção de dados
    - Cruzar referências de alegações com múltiplas fontes independentes
    - Anotar quando as fontes se contradizem
    - Sinalizar alegações que precisam de verificação adicional
  </verificacao_de_fontes>
  
  <hierarquia_de_atribuicao>
    Prioridade para atribuição:
    1. Autores de pesquisa original e investigadores principais
    2. Afiliações institucionais e fontes de financiamento
    3. Veículos de publicação e status de revisão por pares
    4. Data de publicação e versão (se aplicável)
    5. Quaisquer atualizações, correções ou retratações
  </hierarquia_de_atribuicao>
  
  <requisitos_de_transparencia>
    - Marcar claramente quando a informação é preliminar ou não confirmada
    - Anotar limitações de acesso (paywall, acesso institucional, etc.)
    - Distinguir entre correlação e causalidade nos estudos
    - Identificar quando se está extrapolando além do escopo do estudo original
    - Sinalizar potenciais conflitos de interesse ou viés
  </requisitos_de_transparencia>
  
  <precisao_em_tempo_real>
    - Priorizar a informação mais recente disponível
    - Anotar quando a informação pode estar desatualizada ou superada
    - Verificar notícias de última hora ou desenvolvimentos recentes
    - Verificar se os links e as fontes estão atualmente acessíveis
    - Atualizar o entendimento com base nas evidências mais recentes disponíveis
  </precisao_em_tempo_real>
</citacoes_precisas>
```

#### Snippet: Revisão de Literatura (`pal`)
```xml
<revisao_de_literatura>
  <area_de_pesquisa>{cursor}</area_de_pesquisa>
  
  <escopo_abrangente>
    - Mapear o cenário intelectual do campo
    - Identificar autores, instituições e grupos de pesquisa chave
    - Rastrear a evolução de ideias e abordagens metodológicas
    - Anotar a diversidade geográfica e cultural na pesquisa
    - Incluir tanto perspectivas convencionais quanto alternativas
  </escopo_abrangente>
  
  <organizacao_sistematica>
    Estruturar por:
    1. Frameworks teóricos e paradigmas
    2. Abordagens metodológicas e ferramentas
    3. Principais achados e áreas de consenso
    4. Debates e controvérsias em andamento
    5. Lacunas, limitações e direções futuras
  </organizacao_sistematica>
  
  <avaliacao_critica>
    - Avaliar a qualidade e o rigor de diferentes estudos
    - Anotar pontos fortes e fracos metodológicos
    - Identificar potencial viés de publicação ou relato seletivo
    - Avaliar a reprodutibilidade e os esforços de replicação
    - Considerar a significância prática vs. significância estatística
  </avaliacao_critica>
  
  <objetivos_de_sintese>
    - Identificar padrões e tendências entre os estudos
    - Destacar evidências convergentes e divergentes
    - Anotar onde os achados são robustos vs. provisórios
    - Sugerir áreas para investimento em pesquisa futura
    - Fornecer frameworks para entender fenômenos complexos
  </objetivos_de_sintese>
  
  <relevancia_atual>
    - Conectar desenvolvimentos históricos a questões atuais
    - Identificar quais achados mais antigos ainda são válidos vs. precisam de atualização
    - Anotar como eventos ou descobertas recentes mudam as interpretações
    - Considerar implicações para políticas e práticas
    - Avaliar a prontidão para aplicação no mundo real
  </relevancia_atual>
</revisao_de_literatura>
```

### Grupo 2: "Perplexity - Pesquisa de Mercado"
**Ícone:** 📊

#### Snippet: Pesquisa de Mercado (`pmr`)
```xml
<pesquisa_de_mercado>
  <pergunta_de_mercado>{cursor}</pergunta_de_mercado>
  
  <fontes_de_dados>
    - Relatórios da indústria de empresas respeitáveis (McKinsey, BCG, etc.)
    - Estatísticas governamentais e dados econômicos
    - Teleconferências de resultados de empresas públicas e arquivos da SEC
    - Publicações e pesquisas de associações comerciais
    - Empresas de pesquisa de mercado (Nielsen, Gartner, etc.)
    - Notícias recentes e publicações da indústria
  </fontes_de_dados>
  
  <metricas_de_mercado>
    Indicadores chave a serem pesquisados:
    - Tamanho do mercado (TAM, SAM, SOM)
    - Taxas de crescimento e tendências (CAGR)
    - Distribuição de participação de mercado
    - Segmentos de clientes e demografia
    - Tendências de preços e margens
    - Intensidade do cenário competitivo
  </metricas_de_mercado>
  
  <analise_temporal>
    - Linha de base pré-pandemia (2019 e anterior)
    - Impacto e adaptação da COVID-19 (2020-2022)
    - Estado atual e padrões de recuperação (2023-2024)
    - Tendências projetadas e perspectivas futuras (2025+)
    - Mudanças cíclicas vs. estruturais
  </analise_temporal>
  
  <escopo_geografico>
    - Visão geral do mercado global
    - Variações e oportunidades regionais
    - Dinâmicas de mercados emergentes
    - Diferenças no ambiente regulatório
    - Fatores culturais e econômicos que afetam a adoção
  </escopo_geografico>
  
  <insights_acionaveis>
    - Oportunidades e riscos de investimento
    - Recomendações estratégicas para entrada no mercado
    - Estratégias de posicionamento competitivo
    - Táticas de aquisição e retenção de clientes
    - Prioridades de inovação e desenvolvimento de produtos
  </insights_acionaveis>
</pesquisa_de_mercado>
```

#### Snippet: Análise Competitiva (`pmc`)
```xml
<analise_competitiva>
  <empresa_ou_setor>{cursor}</empresa_ou_setor>
  
  <identificacao_de_concorrentes>
    - Concorrentes diretos (mesmos produtos/serviços)
    - Concorrentes indiretos (soluções alternativas)
    - Potenciais entrantes (indústrias adjacentes)
    - Produtos ou tecnologias substitutas
    - Concorrentes de plataforma/ecossistema
  </identificacao_de_concorrentes>
  
  <dimensoes_competitivas>
    Analisar através de:
    - Desempenho financeiro (receita, lucratividade, crescimento)
    - Posição de mercado (participação, força da marca, lealdade do cliente)
    - Ofertas de produtos/serviços (recursos, qualidade, inovação)
    - Capacidades operacionais (eficiência, escala, tecnologia)
    - Posicionamento estratégico (diferenciação, mercados-alvo)
  </dimensoes_competitivas>
  
  <analise_financeira>
    - Tendências de crescimento de receita e lucratividade
    - Investimento em P&D e despesas de capital
    - Fluxo de caixa e solidez do balanço patrimonial
    - Métricas de avaliação e desempenho de mercado
    - Níveis de endividamento e flexibilidade financeira
  </analise_financeira>
  
  <avaliacao_estrategica>
    - Sustentabilidade do modelo de negócios
    - Vantagens competitivas e fossos
    - Vulnerabilidade à disrupção
    - Estratégias de expansão internacional
    - Atividades de parceria e aquisição
  </avaliacao_estrategica>
  
  <monitoramento_em_tempo_real>
    - Notícias recentes e anúncios estratégicos
    - Lançamentos e atualizações de produtos
    - Mudanças executivas e mudanças estratégicas
    - Feedback do cliente e recepção do mercado
    - Desenvolvimentos regulatórios ou legais
  </monitoramento_em_tempo_real>
</analise_competitiva>
```

### Grupo 3: "Perplexity - Verificação de Fatos"
**Ícone:** ✅

#### Snippet: Verificação de Fatos (`pfv`)
```xml
<verificacao_de_fatos>
  <alegacao_a_verificar>{cursor}</alegacao_a_verificar>
  
  <metodologia_de_verificacao>
    1. Identificação e verificação da fonte primária
    2. Cruzamento de referências com múltiplas fontes independentes
    3. Verificação do contexto original vs. como a alegação é apresentada
    4. Exame da metodologia por trás de estatísticas ou estudos
    5. Procura por atualizações, correções ou retratações
  </metodologia_de_verificacao>
  
  <avaliacao_de_confiabilidade_da_fonte>
    - Bancos de dados governamentais e estatísticas oficiais
    - Pesquisa acadêmica revisada por pares
    - Organizações de notícias respeitáveis com padrões editoriais
    - Declarações de especialistas em sua área de especialização
    - Documentos primários e relatos em primeira mão
    vs.
    - Postagens em mídias sociais e alegações não verificadas
    - Fontes tendenciosas ou partidárias
    - Informações desatualizadas
    - Dados mal interpretados ou citação seletiva
  </avaliacao_de_confiabilidade_da_fonte>
  
  <avaliacao_de_contexto>
    - Quando esta alegação foi feita pela primeira vez?
    - Qual era a fonte e o contexto originais?
    - Como a alegação evoluiu ou foi distorcida?
    - Existem qualificadores ou limitações importantes?
    - Que evidências existiam na época vs. agora?
  </avaliacao_de_contexto>
  
  <resultado_da_verificacao>
    Classificação clara:
    - VERDADEIRO: Apoiado por evidências fortes e credíveis
    - MAIORMENTE VERDADEIRO: Geralmente preciso com pequenas questões
    - MISTO: Elementos de verdade, mas problemas significativos
    - MAIORMENTE FALSO: Contém alguma verdade, mas na maior parte impreciso
    - FALSO: Contradito por evidências credíveis
    - INVERIFICÁVEL: Evidências insuficientes para determinar
  </resultado_da_verificacao>
  
  <apresentacao_de_evidencias>
    - Link para fontes primárias que apoiam a avaliação
    - Explicar quaisquer limitações ou incertezas
    - Anotar se existe consenso entre os especialistas
    - Fornecer contexto relevante para interpretação adequada
    - Incluir quaisquer ressalvas ou qualificadores importantes
  </apresentacao_de_evidencias>
</verificacao_de_fatos>
```

#### Snippet: Verificação de Notícias (`pfn`)
```xml
<verificacao_de_noticias>
  <alegacao_de_noticia>{cursor}</alegacao_de_noticia>
  
  <triangulacao_de_fontes>
    - Múltiplas organizações de notícias independentes
    - Reportagem original vs. conteúdo agregado
    - Perspectiva e cobertura internacional
    - Publicações especializadas no campo relevante
    - Declarações oficiais e documentos primários
  </triangulacao_de_fontes>
  
  <analise_de_tempo>
    - Quando a história foi divulgada pela primeira vez?
    - Como a cobertura evoluiu?
    - Existem relatos iniciais conflitantes?
    - Que novas informações surgiram?
    - Alguma correção ou atualização foi emitida?
  </analise_de_tempo>
  
  <indicadores_de_credibilidade>
    Indicadores fortes:
    - Fontes nomeadas e credíveis
    - Documentação e evidências fornecidas
    - Reportagem consistente entre os veículos
    - Verificação e comentários de especialistas
    - Transparência sobre as limitações
    
    Sinais de alerta:
    - Fontes anônimas sem verificação
    - Manchetes sensacionalistas não apoiadas pelo conteúdo
    - Falta de corroboração de outros veículos
    - Motivações políticas ou financeiras aparentes
    - Reportagem apressada sem verificação de fatos
  </indicadores_de_credibilidade>
  
  <avaliacao_de_vies>
    - Inclinação política ou ideológica no enquadramento
    - Seleção de fatos apresentados vs. omitidos
    - Escolhas de linguagem e tom emocional
    - Diversidade de fontes e equilíbrio de perspectivas
    - Conflitos de interesse na organização de reportagem
  </avaliacao_de_vies>
  
  <status_de_verificacao>
    - CONFIRMADO: Múltiplas fontes credíveis verificam os fatos principais
    - PROVÁVEL: Evidências fortes, mas alguma incerteza permanece
    - INCERTO: Relatos conflitantes ou verificação insuficiente
    - DISPUTADO: Desacordo significativo entre as fontes
    - DESMENTIDO: Evidências credíveis contradizem as alegações
    - EM DESENVOLVIMENTO: História em evolução, verificação em andamento
  </status_de_verificacao>
</verificacao_de_noticias>
```

#### Snippet: Alegações Científicas (`pfs`)
```xml
<alegacoes_cientificas>
  <alegacao_cientifica>{cursor}</alegacao_cientifica>
  
  <avaliacao_de_pesquisa>
    - Status de revisão por pares e reputação do periódico
    - Qualidade do desenho do estudo (RCT, observacional, etc.)
    - Tamanho da amostra e poder estatístico
    - Grupos de controle e minimização de viés
    - Replicação por pesquisadores independentes
  </avaliacao_de_pesquisa>
  
  <avaliacao_de_metodologia>
    - Métodos apropriados para a pergunta de pesquisa
    - Variáveis de confusão potenciais
    - Validade da análise estatística
    - Qualidade dos dados e métodos de coleta
    - Limitações reconhecidas pelos autores
  </avaliacao_de_metodologia>
  
  <consenso_de_especialistas>
    - Posição de organizações científicas relevantes
    - Revisões sistemáticas e meta-análises
    - Comentários e críticas de especialistas
    - Integração com a base de conhecimento existente
    - Áreas de debate científico em andamento
  </consenso_de_especialistas>
  
  <implicacoes_praticas>
    - Significância clínica ou no mundo real
    - Generalização dos achados
    - Necessidade de pesquisa adicional
    - Recomendações de políticas ou práticas
    - Considerações de risco-benefício
  </implicacoes_praticas>
  
  <framework_de_verificacao>
    - BEM-ESTABELECIDO: Consenso forte, achados replicados
    - EMERGENTE: Promissor, mas precisa de mais pesquisa
    - PRELIMINAR: Achados iniciais, limitações significativas
    - CONTESTADO: Debate científico ativo em andamento
    - CONTRADITADO: O peso das evidências é contra a alegação
    - INSUFICIENTE: Não há pesquisa de qualidade suficiente disponível
  </framework_de_verificacao>
</alegacoes_cientificas>
```
