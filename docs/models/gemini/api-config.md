# Configurações de API - Gemini

Este guia contém configurações detalhadas e exemplos práticos para usar a API do Gemini de forma otimizada.

## 📋 Configurações Base

### Parâmetros Principais

```json
{
  "model": "gemini-1.5-pro",
  "esforco_de_raciocinio": "alto",
  "verbosidade": "média",
  "max_tokens": 2000,
  "temperature": 0.7,
  "top_p": 0.9,
  "top_k": 40
}
```

| Parâmetro | Função | Valores Recomendados |
|-----------|--------|---------------------|
| `model` | Seleciona o modelo | `gemini-1.5-pro`, `gemini-1.5-flash`, `gemini-2.0-flash` |
| `esforco_de_raciocinio` | Controla a profundidade do processamento | `alto`, `médio`, `mínimo` |
| `verbosidade` | Controla o nível de detalhe | `alta`, `média`, `baixa` |
| `max_tokens` | Limite de tokens na resposta | 1000-4000 dependendo da tarefa |
| `temperature` | Criatividade vs precisão | 0.1-0.3 (precisão), 0.7-0.9 (criatividade) |

## 🎯 Presets por Tipo de Tarefa

### Agência Complexa

=== "JSON"
    ```json
    {
      "model": "gemini-1.5-pro",
      "esforco_de_raciocinio": "alto",
      "verbosidade": "média",
      "max_tokens": 4000,
      "temperature": 0.7,
      "description": "Para tarefas agênticas complexas com múltiplas etapas"
    }
    ```

=== "cURL"
    ```bash
    curl -X POST "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent" \
    -H "Content-Type: application/json" \
    -H "x-goog-api-key: $GEMINI_API_KEY" \
    -d '{
      "contents": [{
        "parts": [{"text": "sua_consulta_aqui"}]
      }],
      "generationConfig": {
        "maxOutputTokens": 4000,
        "temperature": 0.7,
        "topP": 0.9
      },
      "systemInstruction": {
        "parts": [{"text": "esforco_de_raciocinio: alto\nverbosidade: média"}]
      }
    }'
    ```

=== "Python"
    ```python
    import google.generativeai as genai
    
    genai.configure(api_key="your_api_key")
    
    model = genai.GenerativeModel(
        'gemini-1.5-pro',
        generation_config={
            'max_output_tokens': 4000,
            'temperature': 0.7,
            'top_p': 0.9,
            'top_k': 40
        },
        system_instruction="esforco_de_raciocinio: alto\nverbosidade: média"
    )
    
    response = model.generate_content("sua_consulta_aqui")
    print(response.text)
    ```

### Desenvolvimento de Código

=== "JSON"
    ```json
    {
      "model": "gemini-1.5-pro",
      "esforco_de_raciocinio": "alto",
      "verbosidade": "alta",
      "max_tokens": 3000,
      "temperature": 0.3,
      "description": "Para desenvolvimento e análise de código"
    }
    ```

=== "Python"
    ```python
    model = genai.GenerativeModel(
        'gemini-1.5-pro',
        generation_config={
            'max_output_tokens': 3000,
            'temperature': 0.3,
            'top_p': 0.8
        },
        system_instruction="esforco_de_raciocinio: alto\nverbosidade: alta\nFoco em código limpo e bem documentado."
    )
    ```

### Consultas Rápidas

=== "JSON"
    ```json
    {
      "model": "gemini-1.5-flash",
      "esforco_de_raciocinio": "mínimo",
      "verbosidade": "baixa",
      "max_tokens": 1000,
      "temperature": 0.5,
      "description": "Para consultas factuais rápidas"
    }
    ```

=== "Python"
    ```python
    model = genai.GenerativeModel(
        'gemini-1.5-flash',
        generation_config={
            'max_output_tokens': 1000,
            'temperature': 0.5
        },
        system_instruction="esforco_de_raciocinio: mínimo\nverbosidade: baixa\nResposta direta e concisa."
    )
    ```

### Pesquisa Abrangente

=== "JSON"
    ```json
    {
      "model": "gemini-1.5-pro",
      "esforco_de_raciocinio": "alto",
      "verbosidade": "média",
      "max_tokens": 4000,
      "temperature": 0.6,
      "description": "Para pesquisa com múltiplas fontes"
    }
    ```

=== "Python"
    ```python
    model = genai.GenerativeModel(
        'gemini-1.5-pro',
        generation_config={
            'max_output_tokens': 4000,
            'temperature': 0.6,
            'top_p': 0.9
        },
        system_instruction="esforco_de_raciocinio: alto\nverbosidade: média\nUse múltiplas fontes e cite adequadamente."
    )
    ```

### Análise Multimodal

=== "JSON"
    ```json
    {
      "model": "gemini-1.5-pro",
      "esforco_de_raciocinio": "alto",
      "verbosidade": "alta",
      "max_tokens": 3500,
      "temperature": 0.4,
      "description": "Para análise de texto + imagem"
    }
    ```

=== "Python"
    ```python
    import PIL.Image
    
    model = genai.GenerativeModel(
        'gemini-1.5-pro',
        generation_config={
            'max_output_tokens': 3500,
            'temperature': 0.4
        }
    )
    
    # Análise de imagem + texto
    image = PIL.Image.open('caminho/para/imagem.jpg')
    response = model.generate_content([
        "Analise esta imagem em detalhes:",
        image
    ])
    ```

## ⚙️ Controles Únicos do Gemini

### Esforço de Raciocínio

!!! tip "Quando usar cada nível"
    
    **Alto (`"esforco_de_raciocinio": "alto"`)**
    
    - ✅ Tarefas complexas multi-etapas
    - ✅ Workflows agênticos
    - ✅ Geração e depuração de código
    - ✅ Pesquisa com múltiplas fontes
    - ✅ Análise profunda de documentos
    
    **Médio (`"esforco_de_raciocinio": "médio"`)**
    
    - ✅ Tarefas analíticas padrão
    - ✅ Codificação de complexidade moderada
    - ✅ Equilíbrio velocidade/qualidade
    
    **Mínimo (`"esforco_de_raciocinio": "mínimo"`)**
    
    - ✅ Consultas factuais rápidas
    - ✅ Snippets de código simples
    - ✅ Quando velocidade é prioridade

### Controle de Verbosidade

```json
{
  "verbosidade": "alta",    // Explicações abrangentes
  "verbosidade": "média",   // Equilíbrio detalhes/brevidade  
  "verbosidade": "baixa"    // Respostas concisas
}
```

## 🔄 Configurações Avançadas

### Contexto Extenso

```python
# Aproveitando os 2M tokens de contexto
model = genai.GenerativeModel(
    'gemini-1.5-pro',
    generation_config={'max_output_tokens': 8000}
)

# Processamento de documento longo
with open('documento_extenso.txt', 'r') as f:
    documento = f.read()

response = model.generate_content(f"""
Analise este documento completo:

{documento}

Forneça um resumo executivo e principais insights.
""")
```

### Multimodalidade

```python
# Análise de múltiplas imagens
imagens = [
    PIL.Image.open('grafico1.png'),
    PIL.Image.open('grafico2.png'),
    PIL.Image.open('tabela.png')
]

response = model.generate_content([
    "Compare estes três elementos visuais e extraia insights:",
    *imagens
])
```

### Função Calling

```python
import google.generativeai as genai
from google.generativeai.types import FunctionDeclaration, Tool

# Definir função personalizada
def calcular_roi(investimento: float, retorno: float) -> float:
    """Calcula o ROI (Return on Investment)"""
    return ((retorno - investimento) / investimento) * 100

# Configurar ferramenta
calculator_tool = Tool(
    function_declarations=[
        FunctionDeclaration(
            name="calcular_roi",
            description="Calcula o retorno sobre investimento",
            parameters={
                "type": "object",
                "properties": {
                    "investimento": {"type": "number", "description": "Valor investido"},
                    "retorno": {"type": "number", "description": "Valor retornado"}
                },
                "required": ["investimento", "retorno"]
            }
        )
    ]
)

model = genai.GenerativeModel(
    'gemini-1.5-pro',
    tools=[calculator_tool]
)
```

## 📊 Monitoramento e Otimização

### Métricas Importantes

```python
import time

# Medindo latência
start_time = time.time()
response = model.generate_content("sua_consulta")
latency = time.time() - start_time

print(f"Latência: {latency:.2f}s")
print(f"Tokens de entrada: {model.count_tokens('sua_consulta').total_tokens}")
print(f"Tokens de saída: {len(response.text.split())}")
```

### Otimização de Custos

!!! warning "Gestão de Custos"
    
    **Gemini 1.5 Flash vs Pro:**
    
    - Use **Flash** para consultas simples (mais rápido, mais barato)
    - Use **Pro** apenas quando precisar de qualidade máxima
    - Monitore `max_tokens` para controlar custos
    - Configure timeouts adequados

### Tratamento de Erros

```python
from google.api_core import exceptions
import time

def chamada_robusta(model, prompt, max_tentativas=3):
    for tentativa in range(max_tentativas):
        try:
            response = model.generate_content(prompt)
            return response.text
        except exceptions.ResourceExhausted:
            print(f"Rate limit atingido, aguardando... (tentativa {tentativa + 1})")
            time.sleep(2 ** tentativa)  # Backoff exponencial
        except exceptions.DeadlineExceeded:
            print(f"Timeout na tentativa {tentativa + 1}")
            time.sleep(1)
        except Exception as e:
            print(f"Erro inesperado: {e}")
            if tentativa == max_tentativas - 1:
                raise
    
    raise Exception("Máximo de tentativas excedido")
```

## 🛠️ Ferramentas e Integrações

### Integração com Raycast

```json
{
  "name": "Gemini Pro Query",
  "description": "Consulta rápida ao Gemini 1.5 Pro",
  "config": {
    "model": "gemini-1.5-pro",
    "esforco_de_raciocinio": "médio",
    "max_tokens": 2000,
    "temperature": 0.7
  }
}
```

### CLI Personalizado

```bash
#!/bin/bash
# gemini-cli.sh

API_KEY="sua_chave_aqui"
MODEL="gemini-1.5-pro"

curl -X POST \
  "https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent" \
  -H "Content-Type: application/json" \
  -H "x-goog-api-key: ${API_KEY}" \
  -d "{
    \"contents\": [{
      \"parts\": [{\"text\": \"$1\"}]
    }],
    \"generationConfig\": {
      \"maxOutputTokens\": 2000,
      \"temperature\": 0.7
    }
  }" | jq -r '.candidates[0].content.parts[0].text'
```

---

!!! success "Configuração Completa"
    Com essas configurações, você pode aproveitar ao máximo as capacidades únicas do Gemini, incluindo contexto extenso, multimodalidade e controle granular de raciocínio.