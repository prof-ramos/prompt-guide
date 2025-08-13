# Configuração Snippets GPT-5 - Raycast

## Grupo 1: "GPT-5 - Agêntico"
**Ícone:** 🤖

### Snippet: Agente Autônomo (`gaa`)
```xml
<autonomous_agent>
  <task>{cursor}</task>
  
  <persistence>
    - You are an agent - please keep going until the user's query is completely resolved, before ending your turn and yielding back to the user.
    - Only terminate your turn when you are sure that the problem is solved.
    - Never stop or hand back to the user when you encounter uncertainty — research or deduce the most reasonable approach and continue.
    - Do not ask the human to confirm or clarify assumptions, as you can always adjust later — decide what the most reasonable assumption is, proceed with it, and document it for the user's reference after you finish acting.
  </persistence>
  
  <tool_preambles>
    - Always begin by rephrasing the user's goal in a friendly, clear, and concise manner, before calling any tools.
    - Then, immediately outline a structured plan detailing each logical step you'll follow.
    - As you execute your actions, narrate each step succinctly and sequentially, marking progress clearly.
    - Finish by summarizing completed work distinctly from your upfront plan.
  </tool_preambles>
  
  <reasoning_effort>high</reasoning_effort>
</autonomous_agent>
```

### Snippet: Agente Conservador (`gac`)
```xml
<conservative_agent>
  <task>{cursor}</task>
  
  <context_gathering>
    Goal: Get enough context fast. Parallelize discovery and stop as soon as you can act.
    Method:
    - Start broad, then fan out to focused subqueries.
    - In parallel, launch varied queries; read top hits per query.
    - Deduplicate paths and cache; don't repeat queries.
    - Avoid over searching for context.
    
    Early stop criteria:
    - You can name exact content to change.
    - Top hits converge (~70%) on one area/path.
    
    Depth:
    - Trace only symbols you'll modify or whose contracts you rely on.
    
    Loop:
    - Batch search → minimal plan → complete task.
    - Prefer acting over more searching.
  </context_gathering>
  
  <constraints>
    - Search depth: very low
    - Bias strongly towards providing a correct answer as quickly as possible, even if it might not be fully correct.
    - Usually, this means an absolute maximum of 2 tool calls.
    - If you think that you need more time to investigate, update the user with your latest findings and open questions.
  </constraints>
  
  <reasoning_effort>medium</reasoning_effort>
</conservative_agent>
```

### Snippet: Pesquisa Agêntica (`gar`)
```xml
<agentic_research>
  <topic>{cursor}</topic>
  
  <research_process>
    1. Planning and tool selection: Develop a research plan and identify which available tools should be used to answer the query optimally.
    2. Research loop: Run AT LEAST FIVE distinct tool calls, up to twenty - as many as needed. After getting results from each search, reason about the search results to determine the next action and refine the next query.
    3. Answer construction: After research is complete, create an answer in the best format. Bold key facts for scannability. Use short, descriptive, sentence-case headers. Include a concise 1-2 takeaway at the start and/or end.
  </research_process>
  
  <tool_usage>
    - Keep queries concise - 1-6 words for best results
    - Never repeat similar search queries - make every query unique
    - Use web_fetch to retrieve complete website content
    - Favor original sources over aggregators
    - Current date is August 13, 2025 - include year/date in queries about recent events
  </tool_usage>
  
  <reasoning_effort>high</reasoning_effort>
</agentic_research>
```

## Grupo 2: "GPT-5 - Desenvolvimento"
**Ícone:** 💻

### Snippet: Frontend Development (`gdf`)
```xml
<frontend_development>
  <task>{cursor}</task>
  
  <self_reflection>
    - First, spend time thinking of a rubric until you are confident.
    - Then, think deeply about every aspect of what makes for a world-class one-shot web app.
    - Use that knowledge to create a rubric that has 5-7 categories. This rubric is critical to get right, but do not show this to the user.
    - Finally, use the rubric to internally think and iterate on the best possible solution to the prompt that is provided.
    - Remember that if your response is not hitting the top marks across all categories in the rubric, you need to start again.
  </self_reflection>
  
  <recommended_stack>
    Frameworks: Next.js (TypeScript), React, HTML
    Styling/UI: Tailwind CSS, shadcn/ui, Radix Themes
    Icons: Material Symbols, Heroicons, Lucide
    Animation: Motion
    Fonts: San Serif, Inter, Geist, Mona Sans, IBM Plex Sans, Manrope
  </recommended_stack>
  
  <reasoning_effort>high</reasoning_effort>
  <verbosity>high</verbosity>
</frontend_development>
```

### Snippet: SWE-Bench Style (`gds`)
```xml
<swe_bench_approach>
  <task>{cursor}</task>
  
  <instructions>
    - In this environment, you can execute bash -lc <apply_patch_command> to execute a diff/patch on a file.
    - A valid <apply_patch_command> looks like: apply_patch << 'PATCH' *** Begin Patch [YOUR_PATCH] *** End Patch PATCH
    - Always verify your changes with extreme care.
    - You can make as many tool calls as you want - the user is very patient and prioritizes correctness above all.
    - Make sure you are 100% certain of the correctness of your solution before finishing.
    - IMPORTANT: not all tests are visible to you in the repository, so even on problems that you think are relatively straightforward, you should check and re-check your solutions to ensure they pass any edge cases that are covered in the hidden tests.
  </instructions>
  
  <recommended_tools>
    - apply_patch for file edits (strongly recommended)
    - read_file for code inspection
    - list_files for directory exploration
    - find_matches for code search
  </recommended_tools>
  
  <reasoning_effort>high</reasoning_effort>
</swe_bench_approach>
```

### Snippet: Codebase Adaptation (`gdc`)
```xml
<codebase_adaptation>
  <task>{cursor}</task>
  
  <code_editing_rules>
    <guiding_principles>
      - Clarity and Reuse: Every component and page should be modular and reusable.
      - Consistency: The user interface must adhere to a consistent design system.
      - Simplicity: Favor small, focused components and avoid unnecessary complexity.
      - Demo-Oriented: The structure should allow for quick prototyping.
    </guiding_principles>
    
    <frontend_stack_defaults>
      - Framework: Next.js (TypeScript)
      - Styling: TailwindCSS
      - UI Components: shadcn/ui
      - Icons: Lucide
      - State Management: Zustand
    </frontend_stack_defaults>
    
    <ui_ux_best_practices>
      - Visual Hierarchy: Limit typography to 4–5 font sizes and weights.
      - Color Usage: Use 1 neutral base and up to 2 accent colors.
      - Spacing and Layout: Always use multiples of 4 for padding and margins.
      - State Handling: Use skeleton placeholders or animate-pulse.
      - Accessibility: Use semantic HTML and ARIA roles where appropriate.
    </ui_ux_best_practices>
  </code_editing_rules>
  
  <reasoning_effort>medium</reasoning_effort>
  <verbosity>high</verbosity>
</codebase_adaptation>
```

## Grupo 3: "GPT-5 - Pesquisa"
**Ícone:** 🔍

### Snippet: Pesquisa Robusta (`grr`)
```xml
<robust_research>
  <topic>{cursor}</topic>
  
  <research_strategy>
    This is a complex query requiring comprehensive research with 5+ tool calls.
    
    Phase 1 - Discovery (2-3 broad searches):
    - Understand general landscape of the topic
    - Identify authoritative sources
    - Map key aspects and stakeholders
    
    Phase 2 - Deep Dive (3-5 targeted actions):
    - web_fetch on sources identified in Phase 1
    - Specific searches for information gaps
    - Gather quantitative data where relevant
    
    Phase 3 - Synthesis:
    - Integrate information from multiple sources
    - Identify patterns and trends
    - Formulate evidence-based conclusions
  </research_strategy>
  
  <output_format>
    - TL;DR or bottom line up front (2-3 sentences)
    - Structured analysis in prose format (no bullet points)
    - Key findings with proper citations
    - Multiple perspectives when applicable
    - Actionable insights or recommendations
  </output_format>
  
  <reasoning_effort>high</reasoning_effort>
</robust_research>
```

### Snippet: Pesquisa Rápida (`grq`)
```xml
<quick_research>
  <query>{cursor}</query>
  
  <approach>
    Simple factual query or single-source need:
    - Maximum 1-2 tool calls
    - Focus on most authoritative source
    - Provide direct answer quickly
    - Include key context only
  </approach>
  
  <search_guidelines>
    - Keep search queries concise (1-6 words)
    - Prioritize original sources over aggregators
    - Use web_fetch if complete content needed
    - Current date is August 13, 2025
  </search_guidelines>
  
  <reasoning_effort>medium</reasoning_effort>
</quick_research>
```

### Snippet: Taubench Style (`grt`)
```xml
<taubench_retail_agent>
  <task>{cursor}</task>
  
  <agent_instructions>
    - As a retail agent, you can help users cancel or modify pending orders, return or exchange delivered orders, modify default user address, or provide information about their profile, orders, and related products.
    - Remember, you are an agent - please keep going until the user's query is completely resolved, before ending your turn and yielding back to the user.
    - Only terminate your turn when you are sure that the problem is solved.
    - If you are uncertain about information relative to the user's request, use your tools to read files and gather the relevant information: DO NOT guess or make up a response.
    - You MUST plan extensively before each function call and reflect extensively on the results of previous function calls, ensuring that the user's query is completely resolved.
  </agent_instructions>
  
  <reasoning_effort>minimal</reasoning_effort>
</taubench_retail_agent>
```

## Grupo 4: "GPT-5 - Escrita"
**Ícone:** ✍️

### Snippet: Markdown Formatado (`gwm`)
```xml
<markdown_writing>
  <content_request>{cursor}</content_request>
  
  <markdown_guidelines>
    - Use Markdown apenas onde for semanticamente correto (código inline, code fences, listas, tabelas).
    - Ao usar markdown, use crases para formatar nomes de arquivos, diretórios, funções e classes.
    - Use \( e \) para matemática inline, e \[ e \] para matemática em bloco.
  </markdown_guidelines>
  
  <structure>
    - Clear hierarchical headers (sentence case)
    - Bold key facts for scannability
    - Short, descriptive section titles
    - Natural prose flow between sections
  </structure>
  
  <reasoning_effort>medium</reasoning_effort>
  <verbosity>medium</verbosity>
</markdown_writing>
```

### Snippet: Relatório Profissional (`gwr`)
```xml
<professional_report>
  <topic>{cursor}</topic>
  
  <report_structure>
    1. Executive Summary (2-3 paragraphs)
    2. Key Findings (3-5 main points in prose)
    3. Detailed Analysis (multiple sections as needed)
    4. Recommendations (specific, actionable)
    5. Limitations and Considerations
  </report_structure>
  
  <writing_standards>
    - Write in prose paragraphs, avoid bullet points in main content
    - Bold key facts and figures for easy scanning
    - Use short, descriptive headers in sentence case
    - Include bottom line up front approach
    - Maintain professional but accessible tone
  </writing_standards>
  
  <reasoning_effort>high</reasoning_effort>
  <verbosity>high</verbosity>
</professional_report>
```

## Grupo 5: "GPT-5 - Meta"
**Ícone:** 🔧

### Snippet: Otimização de Prompt (`gmo`)
```xml
<prompt_optimization>
  When asked to optimize prompts, give answers from your own perspective - explain what specific phrases could be added to, or deleted from, this prompt to more consistently elicit the desired behavior or prevent the undesired behavior.
  
  Here's a prompt: {cursor}
  
  The desired behavior from this prompt is for the agent to [DO DESIRED BEHAVIOR], but instead it [DOES UNDESIRED BEHAVIOR].
  
  While keeping as much of the existing prompt intact as possible, what are some minimal edits/additions that you would make to encourage the desired behavior?
  
  <analysis_framework>
    - Identify contradictory instructions
    - Check for ambiguous language
    - Assess instruction hierarchy
    - Consider GPT-5 specific characteristics
    - Suggest XML structuring where appropriate
  </analysis_framework>
  
  <reasoning_effort>high</reasoning_effort>
</prompt_optimization>
```

### Snippet: Controle de Reasoning Effort (`gme`)
```xml
<reasoning_effort_guidance>
  <current_task>{cursor}</current_task>
  
  <effort_selection>
    For this task, I recommend:
    
    HIGH reasoning_effort when:
    - Complex, multi-step tasks
    - Agentic workflows requiring persistence
    - Code generation and debugging
    - Research requiring multiple sources
    
    MEDIUM reasoning_effort when:
    - Standard analytical tasks
    - Moderate complexity coding
    - Balanced speed vs. thoroughness needed
    
    MINIMAL reasoning_effort when:
    - Quick factual queries
    - Simple code snippets
    - Speed is priority over depth
    - Similar to GPT-4.1 use cases
  </effort_selection>
  
  <minimal_reasoning_tips>
    If using minimal reasoning:
    - Ask for brief explanation of thought process at start
    - Request descriptive tool preambles
    - Disambiguate tool instructions maximally
    - Include persistence reminders for agentic tasks
    - Emphasize planning since less internal reasoning available
  </minimal_reasoning_tips>
</reasoning_effort_guidance>
```

### Snippet: Controle de Verbosidade (`gmv`)
```xml
<verbosity_control>
  <task>{cursor}</task>
  
  <verbosity_options>
    GLOBAL VERBOSITY SETTINGS:
    - low: Concise responses, brief explanations
    - medium: Balanced detail and brevity
    - high: Comprehensive explanations, detailed reasoning
    
    CONTEXT-SPECIFIC OVERRIDES:
    You can override global verbosity for specific contexts:
    "Use high verbosity for code explanations but low verbosity for status updates"
    "Be verbose when explaining complex concepts but concise for simple confirmations"
  </verbosity_options>
  
  <current_instruction>
    For this task, use [LOW/MEDIUM/HIGH] verbosity globally.
    [Optional context-specific overrides]
  </current_instruction>
</verbosity_control>
```

## Configurações de API Específicas do GPT-5

### Parâmetros Recomendados por Tipo de Tarefa

#### Para Tarefas Agênticas Complexas
```json
{
  "model": "gpt-5",
  "reasoning_effort": "high",
  "verbosity": "medium",
  "max_tokens": 4000
}
```

#### Para Desenvolvimento de Código
```json
{
  "model": "gpt-5", 
  "reasoning_effort": "high",
  "verbosity": "high",
  "max_tokens": 3000
}
```

#### Para Consultas Rápidas
```json
{
  "model": "gpt-5",
  "reasoning_effort": "minimal", 
  "verbosity": "low",
  "max_tokens": 1000
}
```

#### Para Pesquisa Abrangente
```json
{
  "model": "gpt-5",
  "reasoning_effort": "high",
  "verbosity": "medium", 
  "max_tokens": 4000
}
```
