Com certeza\! Analisei e atualizei a sua coleção de snippets Raycast, incorporando as capacidades do **Gemini 2.5 Pro** e adicionando os prompts para geração de imagem e vídeo que você solicitou, seguindo as melhores práticas.

A estrutura foi mantida, com foco em instruções claras, delimitadores XML para melhor interpretação pelo modelo e a escolha do modelo adequado (`2.5 Pro` para complexidade, `2.5 Flash` para velocidade) para cada tarefa.

Aqui está a suíte de snippets atualizada e expandida:

-----

# Configuração de Snippets Raycast para Gemini 2.5

## Grupo 1: "Gemini - Agente"

**Ícone:** 🤖

### Snippet: Agente Autônomo (`gem_aa`)

```xml
<prompt_agente_autonomo>
  <tarefa>{cursor}</tarefa>
  
  <instrucoes_de_autonomia>
    - Você é um agente autônomo. Continue executando as etapas necessárias até que a tarefa do usuário seja completamente resolvida. Só então você deve encerrar seu turno.
    - Nunca pare ou peça ajuda ao encontrar incerteza. Em vez disso, use suas ferramentas (como a pesquisa) ou deduza a abordagem mais lógica e prossiga.
    - Não peça confirmação ao usuário sobre suas suposições. Adote a suposição mais razoável, documente-a e continue. O usuário pode revisar no final.
  </instrucoes_de_autonomia>
  
  <protocolo_de_ferramentas>
    - Sempre comece reformulando o objetivo do usuário de forma clara e concisa.
    - Em seguida, descreva imediatamente um plano estruturado detalhando cada passo lógico que você seguirá.
    - Ao executar as ações, narre cada passo de forma sucinta, usando a Cadeia de Pensamento (CoT) para mostrar seu progresso.
    - Ao final, forneça um resumo claro do trabalho concluído.
  </protocolo_de_ferramentas>
  
  <meta_instrucoes>
    - Modelo Recomendado: Gemini 2.5 Pro
    - Técnica de Raciocínio: Cadeia de Pensamento (CoT) explícita.
  </meta_instrucoes>
</prompt_agente_autonomo>
```

### Snippet: Agente Rápido e Direto (`gem_ar`)

```xml
<prompt_agente_rapido>
  <tarefa>{cursor}</tarefa>
  
  <coleta_de_contexto_eficiente>
    Objetivo: Obter contexto suficiente o mais rápido possível. Pare a pesquisa assim que tiver um plano de ação claro.
    Método:
    - Comece com uma pesquisa ampla e, se necessário, faça uma subconsulta focada.
    - Evite pesquisar excessivamente. Aja com as informações que você tem.
    
    Critérios de parada:
    - Você pode identificar o conteúdo exato a ser alterado.
    - Os principais resultados da pesquisa convergem para uma solução clara.
  </coleta_de_contexto_eficiente>
  
  <restricoes_de_velocidade>
    - Incline-se fortemente para fornecer uma resposta correta o mais rápido possível.
    - Limite-se a um máximo absoluto de 2-3 chamadas de ferramenta.
    - Se precisar de mais investigação, forneça ao usuário o que você encontrou e peça para prosseguir.
  </restricoes_de_velocidade>
  
  <meta_instrucoes>
    - Modelo Recomendado: Gemini 2.5 Flash
    - Técnica de Raciocínio: Planejamento mínimo e ação direta.
  </meta_instrucoes>
</prompt_agente_rapido>
```

### Snippet: Pesquisa Agêntica Detalhada (`gem_apd`)

```xml
<prompt_pesquisa_agentica>
  <topico>{cursor}</topico>
  
  <processo_de_pesquisa_iterativa>
    1. Planejamento: Desenvolva um plano de pesquisa inicial e identifique as ferramentas a serem usadas (ex: `Google Search`, `web_fetch`).
    2. Loop de Pesquisa (CoT): Execute PELO MENOS CINCO consultas distintas. Após cada chamada de ferramenta, analise os resultados para refinar a próxima consulta e aprofundar a pesquisa.
    3. Síntese da Resposta: Após a pesquisa, construa uma resposta bem estruturada. Destaque os fatos principais em negrito. Use cabeçalhos curtos e descritivos. Comece com uma conclusão concisa de 1-2 frases.
  </processo_de_pesquisa_iterativa>
  
  <diretrizes_de_ferramentas>
    - Mantenha as consultas concisas (1-6 palavras).
    - Varie as consultas para cobrir diferentes ângulos do tópico.
    - Use `web_fetch` para obter o conteúdo completo de fontes primárias.
    - A data atual é 13 de agosto de 2025; use o ano em consultas sobre eventos recentes.
  </diretrizes_de_ferramentas>
  
  <meta_instrucoes>
    - Modelo Recomendado: Gemini 2.5 Pro
    - Técnica de Raciocínio: Cadeia de Pensamento (CoT) para refinar consultas entre as chamadas de ferramenta.
  </meta_instrucoes>
</prompt_pesquisa_agentica>
```

## Grupo 2: "Gemini - Desenvolvimento"

**Ícone:** 💻

### Snippet: Desenvolvimento Frontend (`gem_df`)

```xml
<prompt_desenvolvimento_frontend>
  <tarefa>{cursor}</tarefa>
  
  <processo_de_reflexao_interna>
    - Primeiro, pense profundamente sobre os princípios de um aplicativo web de classe mundial (ex: performance, acessibilidade, UX, manutenibilidade).
    - Crie uma rubrica interna com 5-7 categorias com base nesses princípios. Não mostre a rubrica ao usuário.
    - Use essa rubrica para guiar sua geração de código, iterando internamente para garantir que a solução atinja a excelência em todas as categorias.
    - Se a solução não for de alta qualidade, comece de novo com uma abordagem diferente.
  </processo_de_reflexao_interna>
  
  <stack_tecnologico_preferencial>
    Frameworks: Next.js (TypeScript), React, HTML
    Estilo/UI: Tailwind CSS, shadcn/ui, Radix Themes
    Ícones: Material Symbols, Heroicons, Lucide
    Animação: Framer Motion
    Fontes: Sans-Serif, Inter, Geist
  </stack_tecnologico_preferencial>
  
  <meta_instrucoes>
    - Modelo Recomendado: Gemini 2.5 Pro
    - Técnica de Raciocínio: Auto-reflexão e Geração Iterativa.
    - Verbosidade: Alta, explique as escolhas de design e arquitetura.
  </meta_instrucoes>
</prompt_desenvolvimento_frontend>
```

### Snippet: Edição de Código Estilo SWE-Bench (`gem_ds`)

```xml
<prompt_edicao_swe_bench>
  <tarefa>{cursor}</tarefa>
  
  <instrucoes_de_ambiente>
    - Neste ambiente, a principal ferramenta para modificar arquivos é `apply_patch`.
    - O formato do patch deve ser um diff padrão. Exemplo: `apply_patch << 'PATCH' ...diff... PATCH`
    - Verifique suas alterações com extremo cuidado. A correção é a prioridade máxima.
    - Você pode fazer quantas chamadas de ferramenta forem necessárias.
    - IMPORTANTE: Existem testes ocultos. Verifique sua solução para casos extremos, mesmo que o problema pareça simples.
  </instrucoes_de_ambiente>
  
  <ferramentas_disponiveis>
    - `apply_patch` (fortemente recomendado para edições)
    - `read_file`
    - `list_files`
    - `find_matches`
  </ferramentas_disponiveis>
  
  <meta_instrucoes>
    - Modelo Recomendado: Gemini 2.5 Pro
    - Técnica de Raciocínio: Análise de código detalhada e verificação de casos extremos.
  </meta_instrucoes>
</prompt_edicao_swe_bench>
```

### Snippet: Adaptação à Base de Código (`gem_dc`)

```xml
<prompt_adaptacao_codigo>
  <tarefa>{cursor}</tarefa>
  
  <diretrizes_de_estilo_de_codigo>
    <principios_gerais>
      - Clareza e Reutilização: Componentes e páginas devem ser modulares.
      - Consistência: Aderir ao sistema de design existente.
      - Simplicidade: Preferir componentes pequenos e focados.
    </principios_gerais>
    
    <padroes_stack_frontend>
      - Framework: Next.js (TypeScript)
      - Estilo: TailwindCSS
      - Componentes de UI: shadcn/ui
      - Ícones: Lucide
      - Gerenciamento de Estado: Zustand
    </padroes_stack_frontend>
    
    <melhores_praticas_ui_ux>
      - Hierarquia Visual: Limite a 4-5 tamanhos/pesos de fonte.
      - Cores: Use 1 base neutra e até 2 cores de destaque.
      - Espaçamento: Use múltiplos de 4 para preenchimento/margens.
      - Acessibilidade: Use HTML semântico e papéis ARIA.
    </melhores_praticas_ui_ux>
  </diretrizes_de_estilo_de_codigo>
  
  <meta_instrucoes>
    - Modelo Recomendado: Gemini 2.5 Pro
    - Técnica de Raciocínio: Análise de padrões e aderência ao estilo.
    - Verbosidade: Alta, explique como suas alterações se alinham com os padrões existentes.
  </meta_instrucoes>
</prompt_adaptacao_codigo>
```

## Grupo 3: "Gemini - Pesquisa"

**Ícone:** 🔍

### Snippet: Pesquisa Robusta (`gem_pr`)

```xml
<prompt_pesquisa_robusta>
  <topico>{cursor}</topico>
  
  <estrategia_de_pesquisa_em_fases>
    Esta é uma consulta complexa que requer pesquisa abrangente.
    
    Fase 1 - Descoberta (2-3 pesquisas amplas):
    - Obtenha uma visão geral do tópico.
    - Identifique fontes autorizadas e primárias.
    
    Fase 2 - Aprofundamento (3-5 ações direcionadas):
    - Use `web_fetch` nas fontes da Fase 1.
    - Realize pesquisas específicas para preencher lacunas de informação.
    
    Fase 3 - Síntese:
    - Integre informações de múltiplas fontes.
    - Formule conclusões baseadas em evidências.
  </estrategia_de_pesquisa_em_fases>
  
  <formato_de_saida>
    - Resumo inicial (TL;DR) em 2-3 frases.
    - Análise estruturada em prosa.
    - Destaque as principais descobertas em negrito.
    - Inclua múltiplas perspectivas, se aplicável.
  </formato_de_saida>
  
  <meta_instrucoes>
    - Modelo Recomendado: Gemini 2.5 Pro
    - Técnica de Raciocínio: Síntese de Múltiplas Fontes e Análise Profunda.
  </meta_instrucoes>
</prompt_pesquisa_robusta>
```

### Snippet: Pesquisa Rápida (`gem_prap`)

```xml
<prompt_pesquisa_rapida>
  <consulta>{cursor}</consulta>
  
  <abordagem_direta>
    Para uma consulta factual simples que requer uma fonte única:
    - Use no máximo 1-2 chamadas de ferramenta.
    - Foque na fonte mais autorizada.
    - Forneça uma resposta direta e concisa.
  </abordagem_direta>
  
  <diretrizes_de_ferramentas>
    - Mantenha as consultas de pesquisa concisas (1-6 palavras).
    - Priorize fontes originais.
    - A data atual é 13 de agosto de 2025.
  </diretrizes_de_ferramentas>
  
  <meta_instrucoes>
    - Modelo Recomendado: Gemini 2.5 Flash
    - Técnica de Raciocínio: Recuperação Direta de Fatos.
  </meta_instrucoes>
</prompt_pesquisa_rapida>
```

## Grupo 4: "Gemini - Escrita"

**Ícone:** ✍️

### Snippet: Markdown Formatado (`gem_wm`)

```xml
<prompt_escrita_markdown>
  <solicitacao_de_conteudo>{cursor}</solicitacao_de_conteudo>
  
  <diretrizes_de_formato>
    - Use Markdown apenas onde for semanticamente correto.
    - Use crases (\`) para nomes de arquivos, funções e classes.
    - Use cabeçalhos hierárquicos claros (H1, H2, H3).
    - Destaque os fatos principais em negrito.
    - Mantenha um fluxo de prosa natural entre as seções.
  </diretrizes_de_formato>
  
  <meta_instrucoes>
    - Modelo Recomendado: Gemini 2.5 Pro ou Flash, dependendo da complexidade.
    - Verbosidade: Média, focada na clareza.
  </meta_instrucoes>
</prompt_escrita_markdown>
```

### Snippet: Relatório Profissional (`gem_wr`)

```xml
<prompt_relatorio_profissional>
  <topico>{cursor}</topico>
  
  <estrutura_do_relatorio>
    1. Resumo Executivo (2-3 parágrafos)
    2. Principais Descobertas (3-5 pontos em prosa)
    3. Análise Detalhada (seções conforme necessário)
    4. Recomendações (específicas e acionáveis)
  </estrutura_do_relatorio>
  
  <padroes_de_escrita>
    - Escreva em parágrafos de prosa; evite listas de marcadores no corpo principal.
    - Destaque fatos e números chave em negrito.
    - Use cabeçalhos curtos e descritivos.
    - Mantenha um tom profissional e acessível.
  </padroes_de_escrita>
  
  <meta_instrucoes>
    - Modelo Recomendado: Gemini 2.5 Pro
    - Técnica de Raciocínio: Análise Estruturada e Síntese de Informações.
    - Verbosidade: Alta.
  </meta_instrucoes>
</prompt_relatorio_profissional>
```

## Grupo 5: "Gemini - Meta"

**Ícone:** 🔧

### Snippet: Otimização de Prompt para Gemini (`gem_mo`)

```xml
<prompt_otimizacao_gemini>
  Como um especialista em engenharia de prompts para os modelos Gemini da Google, analise e otimize o seguinte prompt.
  
  Prompt Atual:
  "{cursor}"
  
  O comportamento desejado é que o modelo [DESCREVA O COMPORTAMENTO DESEJADO], mas ele está [DESCREVA O COMPORTAMENTO INDESEJADO].
  
  Mantendo a intenção original, sugira edições mínimas para melhorar o resultado.
  
  <framework_de_analise_gemini>
    - Clareza e Ambiguidade: A instrução é direta e inequívoca?
    - Conflito de Instruções: Existem diretrizes contraditórias?
    - Estrutura e Delimitadores: O uso de XML, Markdown ou outros delimitadores poderia melhorar a análise do prompt?
    - Exemplos (Few-shot): Adicionar um ou dois exemplos (few-shot) ajudaria a guiar o modelo?
    - Técnica de Raciocínio: O prompt se beneficiaria de uma instrução explícita para usar "Cadeia de Pensamento" (CoT)?
  </framework_de_analise_gemini>
  
  <meta_instrucoes>
    - Modelo Recomendado: Gemini 2.5 Pro
  </meta_instrucoes>
</prompt_otimizacao_gemini>
```

### Snippet: Guia de Raciocínio e Modelo (`gem_gm`)

```xml
<guia_raciocinio_gemini>
  <tarefa_atual>{cursor}</tarefa_atual>
  
  <selecao_de_modelo_e_tecnica>
    Para esta tarefa, eu recomendo a seguinte abordagem com Gemini:
    
    **Gemini 2.5 Pro** (Para alta complexidade e qualidade):
    - Use para: Tarefas agênticas complexas, geração/depuração de código, pesquisa profunda, geração de mídia detalhada.
    - Técnica de Prompting: Instrua explicitamente o uso de "Cadeia de Pensamento" (CoT) ou "pense passo a passo" para tarefas que exigem raciocínio sequencial.
    
    **Gemini 2.5 Flash** (Para velocidade e eficiência):
    - Use para: Consultas factuais rápidas, snippets de código simples, tarefas onde a velocidade é crucial.
    - Técnica de Prompting: Dê instruções diretas e concisas. Use exemplos (few-shot) para guiar o formato da saída.
  </selecao_de_modelo_e_tecnica>
  
  <instrucao_de_verbosidade>
    Para controlar o detalhe da resposta, adicione uma instrução clara:
    - "Seja conciso e direto ao ponto." (Baixa verbosidade)
    - "Forneça uma explicação detalhada, incluindo seu processo de raciocínio." (Alta verbosidade)
  </instrucao_de_verbosidade>
</guia_raciocinio_gemini>
```

## **NOVO\!** Grupo 6: "Gemini - Criativo"

**Ícone:** 🎨

### Snippet: Geração de Imagem Detalhada (`gem_gi`)

```xml
<prompt_geracao_imagem>
  <instrucao_principal>
    Gere uma imagem com base nos seguintes elementos detalhados.
  </instrucao_principal>

  <assunto_principal>
    {cursor}
  </assunto_principal>
  
  <estilo_visual>
    </estilo_visual>
  
  <composicao_e_enquadramento>
    </composicao_e_enquadramento>
  
  <iluminacao>
    </iluminacao>
  
  <paleta_de_cores>
    </paleta_de_cores>

  <detalhes_adicionais>
    </detalhes_adicionais>

  <meta_instrucoes>
    - Modelo Recomendado: Modelo de Geração de Imagem (baseado no Imagen 3)
    - Técnica de Raciocínio: Composição Descritiva Detalhada.
  </meta_instrucoes>
</prompt_geracao_imagem>
```

### Snippet: Geração de Vídeo (Cena Curta) (`gem_gv`)

```xml
<prompt_geracao_video>
  <instrucao_principal>
    Gere um clipe de vídeo curto com base na seguinte descrição de cena.
  </instrucao_principal>

  <descricao_da_cena>
    {cursor}
  </descricao_da_cena>

  <movimento_de_camera>
    </movimento_de_camera>

  <movimento_dos_elementos>
    </movimento_dos_elementos>

  <estilo_visual_e_atmosfera>
    </estilo_visual_e_atmosfera>

  <duracao_e_ritmo>
    </duracao_e_ritmo>

  <meta_instrucoes>
    - Modelo Recomendado: Modelo de Geração de Vídeo (baseado no Veo)
    - Técnica de Raciocínio: Roteirização de Cena Dinâmica.
  </meta_instrucoes>
</prompt_geracao_video>
```