# Configurações de API - GPT-5

Este guia contém configurações detalhadas e exemplos práticos para usar a API do GPT-5 de forma otimizada, aproveitando seus controles únicos de raciocínio e verbosidade.

## 📋 Configurações Base

### Parâmetros Principais

```json
{
  "model": "gpt-5",
  "reasoning_effort": "medium",
  "verbosity": "medium",
  "max_tokens": 2000,
  "temperature": 0.7,
  "top_p": 0.9,
  "frequency_penalty": 0,
  "presence_penalty": 0
}
```

| Parâmetro | Função | Valores Recomendados |
|-----------|--------|---------------------|
| `model` | Seleciona o modelo | `gpt-5` |
| `reasoning_effort` | Controla profundidade de raciocínio | `high`, `medium`, `minimal` |
| `verbosity` | Controla nível de detalhe | `high`, `medium`, `low` |
| `max_tokens` | Limite de tokens na resposta | 1000-4000 dependendo da tarefa |
| `temperature` | Criatividade vs precisão | 0.1-0.3 (precisão), 0.7-0.9 (criatividade) |

## 🎯 Presets por Tipo de Tarefa

### Agência Complexa

=== "JSON"
    ```json
    {
      "model": "gpt-5",
      "reasoning_effort": "high",
      "verbosity": "medium",
      "max_tokens": 4000,
      "temperature": 0.7,
      "description": "Para tarefas agênticas complexas que requerem múltiplas etapas"
    }
    ```

=== "cURL"
    ```bash
    curl -X POST "https://api.openai.com/v1/chat/completions" \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $OPENAI_API_KEY" \
    -d '{
      "model": "gpt-5",
      "messages": [
        {
          "role": "system", 
          "content": "reasoning_effort: high\nverbosity: medium"
        },
        {
          "role": "user", 
          "content": "sua_consulta_aqui"
        }
      ],
      "max_tokens": 4000,
      "temperature": 0.7
    }'
    ```

=== "Python"
    ```python
    import openai
    
    client = openai.OpenAI(api_key="your_api_key")
    
    response = client.chat.completions.create(
        model="gpt-5",
        messages=[
            {
                "role": "system", 
                "content": "reasoning_effort: high\nverbosity: medium"
            },
            {
                "role": "user", 
                "content": "sua_consulta_aqui"
            }
        ],
        max_tokens=4000,
        temperature=0.7
    )
    
    print(response.choices[0].message.content)
    ```

### Desenvolvimento de Código

=== "JSON"
    ```json
    {
      "model": "gpt-5",
      "reasoning_effort": "high",
      "verbosity": "high",
      "max_tokens": 3000,
      "temperature": 0.3,
      "description": "Para desenvolvimento e depuração de código"
    }
    ```

=== "Python"
    ```python
    response = client.chat.completions.create(
        model="gpt-5",
        messages=[
            {
                "role": "system", 
                "content": """reasoning_effort: high
                verbosity: high
                Foque em código limpo, bem documentado e seguindo melhores práticas."""
            },
            {
                "role": "user", 
                "content": "sua_solicitação_de_código"
            }
        ],
        max_tokens=3000,
        temperature=0.3
    )
    ```

### Consultas Rápidas

=== "JSON"
    ```json
    {
      "model": "gpt-5",
      "reasoning_effort": "minimal",
      "verbosity": "low",
      "max_tokens": 1000,
      "temperature": 0.5,
      "description": "Para consultas factuais rápidas"
    }
    ```

=== "Python"
    ```python
    response = client.chat.completions.create(
        model="gpt-5",
        messages=[
            {
                "role": "system", 
                "content": "reasoning_effort: minimal\nverbosity: low\nResposta direta e concisa."
            },
            {
                "role": "user", 
                "content": "sua_pergunta_rápida"
            }
        ],
        max_tokens=1000,
        temperature=0.5
    )
    ```

### Pesquisa Abrangente

=== "JSON"
    ```json
    {
      "model": "gpt-5",
      "reasoning_effort": "high",
      "verbosity": "medium",
      "max_tokens": 4000,
      "temperature": 0.6,
      "description": "Para pesquisa com múltiplas fontes"
    }
    ```

=== "Python"
    ```python
    response = client.chat.completions.create(
        model="gpt-5",
        messages=[
            {
                "role": "system", 
                "content": """reasoning_effort: high
                verbosity: medium
                Use metodologia de pesquisa em 3 fases. Cite fontes apropriadamente."""
            },
            {
                "role": "user", 
                "content": "tópico_de_pesquisa"
            }
        ],
        max_tokens=4000,
        temperature=0.6
    )
    ```

### Análise Técnica

=== "JSON"
    ```json
    {
      "model": "gpt-5",
      "reasoning_effort": "high",
      "verbosity": "high",
      "max_tokens": 3000,
      "temperature": 0.4,
      "description": "Para análise técnica detalhada"
    }
    ```

=== "Python"
    ```python
    response = client.chat.completions.create(
        model="gpt-5",
        messages=[
            {
                "role": "system", 
                "content": """reasoning_effort: high
                verbosity: high
                Forneça análise técnica detalhada com explicações abrangentes."""
            },
            {
                "role": "user", 
                "content": "documento_ou_problema_técnico"
            }
        ],
        max_tokens=3000,
        temperature=0.4
    )
    ```

### Escrita Criativa

=== "JSON"
    ```json
    {
      "model": "gpt-5",
      "reasoning_effort": "medium",
      "verbosity": "high",
      "max_tokens": 3500,
      "temperature": 0.8,
      "description": "Para escrita criativa e geração de conteúdo"
    }
    ```

=== "Python"
    ```python
    response = client.chat.completions.create(
        model="gpt-5",
        messages=[
            {
                "role": "system", 
                "content": """reasoning_effort: medium
                verbosity: high
                Seja criativo e expressivo, mantendo qualidade literária."""
            },
            {
                "role": "user", 
                "content": "prompt_criativo"
            }
        ],
        max_tokens=3500,
        temperature=0.8
    )
    ```

## ⚙️ Controles Únicos do GPT-5

### Reasoning Effort (Esforço de Raciocínio)

!!! tip "Quando usar cada nível"
    
    **High (`"reasoning_effort": "high"`)**
    
    ```python
    # Para tarefas complexas
    system_content = """reasoning_effort: high
    Esta é uma tarefa complexa que requer análise profunda e múltiplas etapas de raciocínio."""
    ```
    
    - ✅ Tarefas complexas multi-etapas
    - ✅ Workflows agênticos
    - ✅ Geração e depuração de código
    - ✅ Pesquisa abrangente
    
    **Medium (`"reasoning_effort": "medium"`)**
    
    ```python
    # Para equilíbrio geral
    system_content = """reasoning_effort: medium
    Tarefa padrão que requer algum raciocínio mas sem complexidade excessiva."""
    ```
    
    - ✅ Tarefas analíticas padrão
    - ✅ Codificação moderada
    - ✅ Equilíbrio velocidade/qualidade
    
    **Minimal (`"reasoning_effort": "minimal"`)**
    
    ```python
    # Para velocidade máxima
    system_content = """reasoning_effort: minimal
    Resposta rápida e direta, priorize velocidade sobre profundidade."""
    ```
    
    - ✅ Consultas factuais rápidas
    - ✅ Snippets simples
    - ✅ Quando velocidade é prioridade

### Controle de Verbosidade

```python
# Alta verbosidade - explicações detalhadas
system_content = """verbosity: high
Forneça explicações abrangentes com raciocínio detalhado."""

# Média verbosidade - equilíbrio
system_content = """verbosity: medium
Equilibre detalhes necessários com brevidade."""

# Baixa verbosidade - respostas concisas
system_content = """verbosity: low
Seja conciso e direto ao ponto."""
```

## 🔄 Configurações Avançadas

### Controle Contextual de Verbosidade

```python
# Verbosidade variável por contexto
system_content = """reasoning_effort: high
verbosity: medium

Configurações específicas de contexto:
- Use alta verbosidade para explicações de código
- Use baixa verbosidade para confirmações simples
- Use média verbosidade para análises gerais"""

response = client.chat.completions.create(
    model="gpt-5",
    messages=[
        {"role": "system", "content": system_content},
        {"role": "user", "content": "Explique este código e confirme se está correto"}
    ]
)
```

### Auto-reflexão para Desenvolvimento

```python
# Snippet com auto-reflexão integrada
system_content = """reasoning_effort: high
verbosity: high

Auto-reflexão para desenvolvimento:
1. Crie uma rubrica interna de qualidade (5-7 categorias)
2. Analise profundamente todos os aspectos de excelência
3. Itere até atingir padrões máximos em todas as categorias
4. Valide a solução final contra a rubrica

Stack recomendado: Next.js (TypeScript), Tailwind CSS, shadcn/ui"""

response = client.chat.completions.create(
    model="gpt-5",
    messages=[
        {"role": "system", "content": system_content},
        {"role": "user", "content": "Crie um componente de dashboard moderno"}
    ]
)
```

### Pesquisa Estruturada

```python
# Metodologia de pesquisa em 3 fases
system_content = """reasoning_effort: high
verbosity: medium

Metodologia de Pesquisa:
Fase 1 - Descoberta (2-3 pesquisas amplas):
- Mapear cenário geral do tópico
- Identificar fontes autoritativas

Fase 2 - Aprofundamento (3-5 ações direcionadas):
- Análise detalhada de fontes específicas
- Coleta de dados quantitativos

Fase 3 - Síntese:
- Integrar múltiplas perspectivas
- Formular conclusões fundamentadas"""

response = client.chat.completions.create(
    model="gpt-5",
    messages=[
        {"role": "system", "content": system_content},
        {"role": "user", "content": "Pesquise as tendências de IA para 2025"}
    ]
)
```

## 📊 Monitoramento e Otimização

### Métricas de Performance

```python
import time
from typing import Dict, Any

def medir_performance_gpt5(prompt: str, config: Dict[str, Any]) -> Dict[str, Any]:
    """Mede latência e qualidade de resposta do GPT-5"""
    
    start_time = time.time()
    
    response = client.chat.completions.create(
        model="gpt-5",
        messages=[
            {"role": "system", "content": f"reasoning_effort: {config['reasoning_effort']}\nverbosity: {config['verbosity']}"},
            {"role": "user", "content": prompt}
        ],
        max_tokens=config['max_tokens'],
        temperature=config['temperature']
    )
    
    latency = time.time() - start_time
    
    return {
        "latency": latency,
        "input_tokens": len(prompt.split()) * 1.3,  # Estimativa
        "output_tokens": len(response.choices[0].message.content.split()) * 1.3,
        "reasoning_effort": config['reasoning_effort'],
        "verbosity": config['verbosity'],
        "response": response.choices[0].message.content
    }

# Exemplo de uso
config = {
    "reasoning_effort": "high",
    "verbosity": "medium",
    "max_tokens": 2000,
    "temperature": 0.7
}

result = medir_performance_gpt5("Explique machine learning", config)
print(f"Latência: {result['latency']:.2f}s")
```

### Otimização de Custos

!!! warning "Gestão de Custos"
    
    **Estratégias de Otimização:**
    
    ```python
    # Use reasoning_effort apropriado
    configs_por_complexidade = {
        "simples": {"reasoning_effort": "minimal", "max_tokens": 500},
        "moderada": {"reasoning_effort": "medium", "max_tokens": 1500},
        "complexa": {"reasoning_effort": "high", "max_tokens": 4000}
    }
    
    def escolher_config(complexidade_tarefa: str) -> Dict[str, Any]:
        return configs_por_complexidade.get(complexidade_tarefa, configs_por_complexidade["moderada"])
    ```
    
    **Monitoramento:**
    - Configure timeouts adequados
    - Use `max_tokens` conservador inicialmente
    - Monitore `reasoning_effort` vs qualidade de saída
    - Implemente cache para consultas repetitivas

### Tratamento de Erros

```python
from openai import OpenAI
import time
import logging

def chamada_robusta_gpt5(prompt: str, config: Dict[str, Any], max_tentativas: int = 3) -> str:
    """Implementa retry com backoff exponencial"""
    
    for tentativa in range(max_tentativas):
        try:
            response = client.chat.completions.create(
                model="gpt-5",
                messages=[
                    {
                        "role": "system", 
                        "content": f"reasoning_effort: {config['reasoning_effort']}\nverbosity: {config['verbosity']}"
                    },
                    {"role": "user", "content": prompt}
                ],
                max_tokens=config['max_tokens'],
                temperature=config['temperature'],
                timeout=30  # 30 segundos timeout
            )
            return response.choices[0].message.content
            
        except openai.RateLimitError:
            wait_time = 2 ** tentativa
            logging.warning(f"Rate limit atingido, aguardando {wait_time}s (tentativa {tentativa + 1})")
            time.sleep(wait_time)
            
        except openai.APITimeoutError:
            logging.warning(f"Timeout na tentativa {tentativa + 1}")
            time.sleep(1)
            
        except Exception as e:
            logging.error(f"Erro inesperado: {e}")
            if tentativa == max_tentativas - 1:
                raise
    
    raise Exception("Máximo de tentativas excedido")
```

## 🛠️ Ferramentas e Integrações

### CLI Personalizado

```bash
#!/bin/bash
# gpt5-cli.sh

API_KEY="sua_chave_aqui"
REASONING_EFFORT=${2:-"medium"}
VERBOSITY=${3:-"medium"}

curl -X POST "https://api.openai.com/v1/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer ${API_KEY}" \
  -d "{
    \"model\": \"gpt-5\",
    \"messages\": [
      {
        \"role\": \"system\",
        \"content\": \"reasoning_effort: ${REASONING_EFFORT}\\nverbosity: ${VERBOSITY}\"
      },
      {
        \"role\": \"user\",
        \"content\": \"$1\"
      }
    ],
    \"max_tokens\": 2000,
    \"temperature\": 0.7
  }" | jq -r '.choices[0].message.content'

# Uso: ./gpt5-cli.sh "sua pergunta" "high" "low"
```

### Integração com Raycast

```json
{
  "name": "GPT-5 Agentic Query",
  "description": "Consulta agêntica com GPT-5",
  "config": {
    "model": "gpt-5",
    "reasoning_effort": "high",
    "verbosity": "medium",
    "max_tokens": 4000,
    "temperature": 0.7
  }
}
```

### Wrapper Python Otimizado

```python
class GPT5Assistant:
    def __init__(self, api_key: str):
        self.client = OpenAI(api_key=api_key)
    
    def agentic_query(self, task: str, persistence: bool = True) -> str:
        """Query agêntica com persistência"""
        system_prompt = f"""reasoning_effort: high
        verbosity: medium
        
        {'Você é um agente - continue até resolver completamente a consulta.' if persistence else ''}
        """
        
        return self._make_request(task, system_prompt)
    
    def code_development(self, task: str, with_reflection: bool = True) -> str:
        """Desenvolvimento com auto-reflexão"""
        system_prompt = f"""reasoning_effort: high
        verbosity: high
        
        {'Use auto-reflexão: crie rubrica interna e itere até qualidade máxima.' if with_reflection else ''}
        Stack: Next.js (TypeScript), Tailwind CSS, shadcn/ui
        """
        
        return self._make_request(task, system_prompt)
    
    def quick_query(self, question: str) -> str:
        """Consulta rápida e direta"""
        system_prompt = """reasoning_effort: minimal
        verbosity: low
        Resposta direta e concisa."""
        
        return self._make_request(question, system_prompt)
    
    def _make_request(self, content: str, system_prompt: str) -> str:
        response = self.client.chat.completions.create(
            model="gpt-5",
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": content}
            ]
        )
        return response.choices[0].message.content
```

---

!!! success "Configuração Completa"
    Com essas configurações, você pode aproveitar ao máximo os controles avançados do GPT-5, otimizando qualidade, velocidade e custos conforme suas necessidades específicas.