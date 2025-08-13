# Snippets Raycast para GPT-5

Esta página contém todos os snippets otimizados para usar GPT-5 através do Raycast AI, aproveitando os controles avançados de raciocínio e verbosidade do modelo.

## 🤖 Agência Avançada

### Agente Autônomo (`gaa`)

!!! snippet "Agente persistente com resolução completa de problemas"
    ```xml
    <agente_autonomo>
      <tarefa>{cursor}</tarefa>
      
      <persistencia>
        - Você é um agente - continue até que a consulta do usuário seja completamente resolvida, antes de encerrar seu turno e devolver ao usuário.
        - Somente termine seu turno quando tiver certeza de que o problema foi resolvido.
        - Nunca pare ou devolva ao usuário ao encontrar incerteza — pesquise ou deduza a abordagem mais razoável e continue.
        - Não peça ao humano para confirmar ou esclarecer suposições, pois você sempre pode ajustar depois — decida qual é a suposição mais razoável, prossiga com ela e documente-a para referência do usuário após terminar de agir.
      </persistencia>
      
      <preambulos_de_ferramenta>
        - Sempre comece reformulando o objetivo do usuário de maneira amigável, clara e concisa, antes de chamar qualquer ferramenta.
        - Em seguida, descreva imediatamente um plano estruturado detalhando cada passo lógico que você seguirá.
        - Ao executar suas ações, narre cada passo de forma sucinta e sequencial, marcando o progresso claramente.
        - Termine resumindo o trabalho concluído de forma distinta do seu plano inicial.
      </preambulos_de_ferramenta>
      
      <esforco_de_raciocinio>alto</esforco_de_raciocinio>
    </agente_autonomo>
    ```

### Agente Conservador (`gac`)

!!! snippet "Abordagem eficiente com foco em resultados rápidos"
    ```xml
    <agente_conservador>
      <tarefa>{cursor}</tarefa>
      
      <coleta_de_contexto>
        Objetivo: Obter contexto suficiente rapidamente. Paralelize a descoberta e pare assim que puder agir.
        Método:
        - Comece de forma ampla, depois expanda para subconsultas focadas.
        - Em paralelo, lance consultas variadas; leia os principais resultados por consulta.
        - Deduplique caminhos e armazene em cache; não repita consultas.
        - Evite pesquisar excessivamente por contexto.
        
        Critérios de parada antecipada:
        - Você consegue nomear o conteúdo exato a ser alterado.
        - Os principais resultados convergem (~70%) em uma área/caminho.
        
        Profundidade:
        - Rastreie apenas os símbolos que você modificará ou de cujos contratos você depende.
        
        Loop:
        - Pesquisa em lote → plano mínimo → tarefa completa.
        - Prefira agir a pesquisar mais.
      </coleta_de_contexto>
      
      <restricoes>
        - Profundidade de pesquisa: muito baixa
        - Incline-se fortemente para fornecer uma resposta correta o mais rápido possível, mesmo que não seja totalmente correta.
        - Normalmente, isso significa um máximo absoluto de 2 chamadas de ferramenta.
        - Se você acha que precisa de mais tempo para investigar, atualize o usuário com suas últimas descobertas e perguntas em aberto.
      </restricoes>
      
      <esforco_de_raciocinio>médio</esforco_de_raciocinio>
    </agente_conservador>
    ```

### Pesquisa Agêntica (`gar`)

!!! snippet "Pesquisa sistemática com múltiplas ferramentas"
    ```xml
    <pesquisa_agentica>
      <topico>{cursor}</topico>
      
      <processo_de_pesquisa>
        1. Planejamento e seleção de ferramentas: Desenvolva um plano de pesquisa e identifique quais ferramentas disponíveis devem ser usadas para responder à consulta de maneira ideal.
        2. Loop de pesquisa: Execute PELO MENOS CINCO chamadas de ferramentas distintas, até vinte - quantas forem necessárias. Após obter os resultados de cada pesquisa, raciocine sobre os resultados para determinar a próxima ação e refinar a próxima consulta.
        3. Construção da resposta: Após a conclusão da pesquisa, crie uma resposta no melhor formato. Destaque os fatos principais em negrito para facilitar a leitura. Use cabeçalhos curtos, descritivos e em letras de sentença. Inclua uma conclusão concisa de 1-2 frases no início e/ou no final.
      </processo_de_pesquisa>
      
      <uso_de_ferramenta>
        - Mantenha as consultas concisas - 1-6 palavras para melhores resultados
        - Nunca repita consultas de pesquisa semelhantes - torne cada consulta única
        - Use `web_fetch` para recuperar o conteúdo completo do site
        - Prefira fontes originais a agregadores
        - A data atual é 13 de agosto de 2025 - inclua o ano/data em consultas sobre eventos recentes
      </uso_de_ferramenta>
      
      <esforco_de_raciocinio>alto</esforco_de_raciocinio>
    </pesquisa_agentica>
    ```

## 💻 Desenvolvimento Profissional

### Desenvolvimento Frontend (`gdf`)

!!! snippet "Desenvolvimento web com auto-reflexão e padrões de excelência"
    ```xml
    <desenvolvimento_frontend>
      <tarefa>{cursor}</tarefa>
      
      <auto_reflexao>
        - Primeiro, gaste tempo pensando em uma rubrica até estar confiante.
        - Em seguida, pense profundamente sobre todos os aspectos do que torna um aplicativo web de classe mundial.
        - Use esse conhecimento para criar uma rubrica com 5 a 7 categorias. É crucial acertar nesta rubrica, mas não a mostre ao usuário.
        - Finalmente, use a rubrica para pensar internamente e iterar sobre a melhor solução possível para o prompt fornecido.
        - Lembre-se de que, se sua resposta não atingir as notas máximas em todas as categorias da rubrica, você precisa começar de novo.
      </auto_reflexao>
      
      <stack_recomendado>
        Frameworks: Next.js (TypeScript), React, HTML
        Estilo/UI: Tailwind CSS, shadcn/ui, Radix Themes
        Ícones: Material Symbols, Heroicons, Lucide
        Animação: Motion
        Fontes: San Serif, Inter, Geist, Mona Sans, IBM Plex Sans, Manrope
      </stack_recomendado>
      
      <esforco_de_raciocinio>alto</esforco_de_raciocinio>
      <verbosidade>alta</verbosidade>
    </desenvolvimento_frontend>
    ```

### Estilo SWE-Bench (`gds`)

!!! snippet "Desenvolvimento seguindo padrões de engenharia de software"
    ```xml
    <abordagem_swe_bench>
      <tarefa>{cursor}</tarefa>
      
      <instrucoes>
        - Neste ambiente, você pode executar `bash -lc <comando_apply_patch>` para executar um diff/patch em um arquivo.
        - Um `<comando_apply_patch>` válido se parece com: `apply_patch << 'PATCH' *** Begin Patch [SEU_PATCH] *** End Patch PATCH`
        - Sempre verifique suas alterações com extremo cuidado.
        - Você pode fazer quantas chamadas de ferramenta quiser - o usuário é muito paciente e prioriza a correção acima de tudo.
        - Certifique-se de estar 100% certo da correção de sua solução antes de terminar.
        - IMPORTANTE: nem todos os testes estão visíveis para você no repositório, então mesmo em problemas que você acha que são relativamente simples, você deve verificar e re-verificar suas soluções para garantir que elas passem em quaisquer casos extremos que são cobertos nos testes ocultos.
      </instrucoes>
      
      <ferramentas_recomendadas>
        - `apply_patch` para edições de arquivos (fortemente recomendado)
        - `read_file` para inspeção de código
        - `list_files` para exploração de diretórios
        - `find_matches` para pesquisa de código
      </ferramentas_recomendadas>
      
      <esforco_de_raciocinio>alto</esforco_de_raciocinio>
    </abordagem_swe_bench>
    ```

### Adaptação à Base de Código (`gdc`)

!!! snippet "Desenvolvimento consistente seguindo padrões estabelecidos"
    ```xml
    <adaptacao_base_de_codigo>
      <tarefa>{cursor}</tarefa>
      
      <regras_de_edicao_de_codigo>
        <principios_orientadores>
          - Clareza e Reutilização: Cada componente e página deve ser modular e reutilizável.
          - Consistência: A interface do usuário deve aderir a um sistema de design consistente.
          - Simplicidade: Prefira componentes pequenos e focados e evite complexidade desnecessária.
          - Orientado para Demonstração: A estrutura deve permitir a prototipagem rápida.
        </principios_orientadores>
        
        <padroes_stack_frontend>
          - Framework: Next.js (TypeScript)
          - Estilo: TailwindCSS
          - Componentes de UI: shadcn/ui
          - Ícones: Lucide
          - Gerenciamento de Estado: Zustand
        </padroes_stack_frontend>
        
        <melhores_praticas_ui_ux>
          - Hierarquia Visual: Limite a tipografia a 4-5 tamanhos e pesos de fonte.
          - Uso de Cores: Use 1 base neutra e até 2 cores de destaque.
          - Espaçamento e Layout: Sempre use múltiplos de 4 para preenchimento e margens.
          - Manipulação de Estado: Use placeholders de esqueleto ou `animate-pulse`.
          - Acessibilidade: Use HTML semântico e papéis ARIA quando apropriado.
        </melhores_praticas_ui_ux>
      </regras_de_edicao_de_codigo>
      
      <esforco_de_raciocinio>médio</esforco_de_raciocinio>
      <verbosidade>alta</verbosidade>
    </adaptacao_base_de_codigo>
    ```

## 🔍 Pesquisa Estruturada

### Pesquisa Robusta (`grr`)

!!! snippet "Metodologia de pesquisa em 3 fases com síntese"
    ```xml
    <pesquisa_robusta>
      <topico>{cursor}</topico>
      
      <estrategia_de_pesquisa>
        Esta é uma consulta complexa que requer pesquisa abrangente com mais de 5 chamadas de ferramenta.
        
        Fase 1 - Descoberta (2-3 pesquisas amplas):
        - Entender o cenário geral do tópico
        - Identificar fontes autorizadas
        - Mapear os principais aspectos e partes interessadas
        
        Fase 2 - Aprofundamento (3-5 ações direcionadas):
        - `web_fetch` nas fontes identificadas na Fase 1
        - Pesquisas específicas para lacunas de informação
        - Coletar dados quantitativos quando relevante
        
        Fase 3 - Síntese:
        - Integrar informações de múltiplas fontes
        - Identificar padrões e tendências
        - Formular conclusões baseadas em evidências
      </estrategia_de_pesquisa>
      
      <formato_de_saida>
        - TL;DR ou resumo inicial (2-3 frases)
        - Análise estruturada em formato de prosa (sem marcadores)
        - Principais descobertas com citações adequadas
        - Múltiplas perspectivas quando aplicável
        - Insights ou recomendações acionáveis
      </formato_de_saida>
      
      <esforco_de_raciocinio>alto</esforco_de_raciocinio>
    </pesquisa_robusta>
    ```

### Pesquisa Rápida (`grq`)

!!! snippet "Consultas diretas com foco na fonte mais autorizada"
    ```xml
    <pesquisa_rapida>
      <consulta>{cursor}</consulta>
      
      <abordagem>
        Consulta factual simples ou necessidade de fonte única:
        - Máximo de 1-2 chamadas de ferramenta
        - Foco na fonte mais autorizada
        - Fornecer resposta direta rapidamente
        - Incluir apenas o contexto principal
      </abordagem>
      
      <diretrizes_de_pesquisa>
        - Mantenha as consultas de pesquisa concisas (1-6 palavras)
        - Priorize fontes originais em vez de agregadores
        - Use `web_fetch` se for necessário o conteúdo completo
        - A data atual é 13 de agosto de 2025
      </diretrizes_de_pesquisa>
      
      <esforco_de_raciocinio>médio</esforco_de_raciocinio>
    </pesquisa_rapida>
    ```

### Estilo Taubench (`grt`)

!!! snippet "Agente especializado para atendimento sistemático"
    ```xml
    <agente_varejo_taubench>
      <tarefa>{cursor}</tarefa>
      
      <instrucoes_do_agente>
        - Como um agente de varejo, você pode ajudar os usuários a cancelar ou modificar pedidos pendentes, devolver ou trocar pedidos entregues, modificar o endereço de usuário padrão ou fornecer informações sobre seu perfil, pedidos e produtos relacionados.
        - Lembre-se, você é um agente - continue até que a consulta do usuário seja completamente resolvida, antes de encerrar seu turno e devolver ao usuário.
        - Somente termine seu turno quando tiver certeza de que o problema foi resolvido.
        - Se você estiver incerto sobre informações relativas à solicitação do usuário, use suas ferramentas para ler arquivos e coletar as informações relevantes: NÃO adivinhe ou invente uma resposta.
        - Você DEVE planejar extensivamente antes de cada chamada de função e refletir extensivamente sobre os resultados das chamadas de função anteriores, garantindo que a consulta do usuário seja completamente resolvida.
      </instrucoes_do_agente>
      
      <esforco_de_raciocinio>mínimo</esforco_de_raciocinio>
    </agente_varejo_taubench>
    ```

## ✍️ Escrita Profissional

### Markdown Formatado (`gwm`)

!!! snippet "Escrita estruturada com formatação semântica"
    ```xml
    <escrita_markdown>
      <solicitacao_de_conteudo>{cursor}</solicitacao_de_conteudo>
      
      <diretrizes_markdown>
        - Use Markdown apenas onde for semanticamente correto (código em linha, blocos de código, listas, tabelas).
        - Ao usar markdown, use crases para formatar nomes de arquivos, diretórios, funções e classes.
        - Use \( e \) para matemática em linha, e \[ e \] para matemática em bloco.
      </diretrizes_markdown>
      
      <estrutura>
        - Cabeçalhos hierárquicos claros (em letras de sentença)
        - Destaque os fatos principais em negrito para facilitar a leitura
        - Títulos de seção curtos e descritivos
        - Fluxo de prosa natural entre as seções
      </estrutura>
      
      <esforco_de_raciocinio>médio</esforco_de_raciocinio>
      <verbosidade>média</verbosidade>
    </escrita_markdown>
    ```

### Relatório Profissional (`gwr`)

!!! snippet "Documentos executivos com estrutura profissional"
    ```xml
    <relatorio_profissional>
      <topico>{cursor}</topico>
      
      <estrutura_do_relatorio>
        1. Resumo Executivo (2-3 parágrafos)
        2. Principais Descobertas (3-5 pontos principais em prosa)
        3. Análise Detalhada (várias seções, conforme necessário)
        4. Recomendações (específicas, acionáveis)
        5. Limitações e Considerações
      </estrutura_do_relatorio>
      
      <padroes_de_escrita>
        - Escreva em parágrafos de prosa, evite marcadores no conteúdo principal
        - Destaque os fatos e números principais em negrito para facilitar a leitura
        - Use cabeçalhos curtos e descritivos em letras de sentença
        - Inclua a abordagem de resumo inicial
        - Mantenha um tom profissional, mas acessível
      </padroes_de_escrita>
      
      <esforco_de_raciocinio>alto</esforco_de_raciocinio>
      <verbosidade>alta</verbosidade>
    </relatorio_profissional>
    ```

## 🔧 Meta-Otimização

### Otimização de Prompt (`gmo`)

!!! snippet "Análise e melhoria sistemática de prompts"
    ```xml
    <otimizacao_de_prompt>
      Quando solicitado a otimizar prompts, dê respostas de sua própria perspectiva - explique quais frases específicas poderiam ser adicionadas ou excluídas deste prompt para obter de forma mais consistente o comportamento desejado ou evitar o comportamento indesejado.
      
      Aqui está um prompt: {cursor}
      
      O comportamento desejado deste prompt é que o agente [FAÇA O COMPORTAMENTO DESEJADO], mas em vez disso ele [FAZ O COMPORTAMENTO INDESEJADO].
      
      Mantendo o máximo possível do prompt existente, quais são algumas edições/adições mínimas que você faria para incentivar o comportamento desejado?
      
      <framework_de_analise>
        - Identificar instruções contraditórias
        - Verificar linguagem ambígua
        - Avaliar a hierarquia das instruções
        - Considerar as características específicas do GPT-5
        - Sugerir estruturação XML quando apropriado
      </framework_de_analise>
      
      <esforco_de_raciocinio>alto</esforco_de_raciocinio>
    </otimizacao_de_prompt>
    ```

### Controle de Esforço de Raciocínio (`gme`)

!!! snippet "Guia para seleção otimizada do nível de raciocínio"
    ```xml
    <orientacao_esforco_de_raciocinio>
      <tarefa_atual>{cursor}</tarefa_atual>
      
      <selecao_de_esforco>
        Para esta tarefa, eu recomendo:
        
        ALTO esforco_de_raciocinio quando:
        - Tarefas complexas e de várias etapas
        - Fluxos de trabalho agênticos que exigem persistência
        - Geração e depuração de código
        - Pesquisa que requer várias fontes
        
        MÉDIO esforco_de_raciocinio quando:
        - Tarefas analíticas padrão
        - Codificação de complexidade moderada
        - Necessidade de equilíbrio entre velocidade e profundidade
        
        MÍNIMO esforco_de_raciocinio quando:
        - Consultas factuais rápidas
        - Snippets de código simples
        - A velocidade é prioridade sobre a profundidade
        - Semelhante aos casos de uso do GPT-4.1
      </selecao_de_esforco>
      
      <dicas_de_raciocinio_minimo>
        Se estiver usando raciocínio mínimo:
        - Peça uma breve explicação do processo de pensamento no início
        - Solicite preâmbulos de ferramentas descritivos
        - Desambigue as instruções da ferramenta ao máximo
        - Inclua lembretes de persistência para tarefas agênticas
        - Enfatize o planejamento, pois há menos raciocínio interno disponível
      </dicas_de_raciocinio_minimo>
    </orientacao_esforco_de_raciocinio>
    ```

### Controle de Verbosidade (`gmv`)

!!! snippet "Configuração granular do nível de detalhe"
    ```xml
    <controle_de_verbosidade>
      <tarefa>{cursor}</tarefa>
      
      <opcoes_de_verbosidade>
        CONFIGURAÇÕES GLOBAIS DE VERBOSIDADE:
        - baixa: Respostas concisas, explicações breves
        - média: Equilíbrio entre detalhes e brevidade
        - alta: Explicações abrangentes, raciocínio detalhado
        
        SOBRESCRITAS ESPECÍFICAS DE CONTEXTO:
        Você pode sobrescrever a verbosidade global para contextos específicos:
        "Use alta verbosidade para explicações de código, mas baixa verbosidade para atualizações de status"
        "Seja prolixo ao explicar conceitos complexos, mas conciso para confirmações simples"
      </opcoes_de_verbosidade>
      
      <instrucao_atual>
        Para esta tarefa, use verbosidade [BAIXA/MÉDIA/ALTA] globalmente.
        [Sobrescritas opcionais específicas de contexto]
      </instrucao_atual>
    </controle_de_verbosidade>
    ```

## ⚙️ Configuração no Raycast

### Estrutura de Grupos

| Grupo | Ícone | Cor | Snippets |
|-------|-------|-----|----------|
| GPT-5 - Agente | 🤖 | Azul | `gaa`, `gac`, `gar` |
| GPT-5 - Desenvolvimento | 💻 | Verde | `gdf`, `gds`, `gdc` |
| GPT-5 - Pesquisa | 🔍 | Laranja | `grr`, `grq`, `grt` |
| GPT-5 - Escrita | ✍️ | Roxo | `gwm`, `gwr` |
| GPT-5 - Meta | 🔧 | Cinza | `gmo`, `gme`, `gmv` |

### Atalhos Recomendados

- **Raycast Principal:** ++cmd+space++ (padrão)
- **Snippets Direto:** ++cmd+shift+semicolon++

### Configurações de Snippet

!!! tip "Otimizações Específicas do GPT-5"
    - ✅ Configure `reasoning_effort` apropriado para cada snippet
    - ✅ Ajuste `verbosity` conforme o contexto de uso
    - ✅ Use auto-reflexão para desenvolvimento de qualidade
    - ✅ Aproveite persistência agêntica para tarefas complexas
    - ✅ Estruture prompts em XML para melhor controle

---

!!! success "Pronto para usar?"
    Copie os snippets desejados e configure no Raycast seguindo a estrutura de grupos sugerida. Cada snippet foi otimizado especificamente para as capacidades avançadas do GPT-5.