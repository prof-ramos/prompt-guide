# Gemini API para Chatbots - Prompts e Melhores Práticas

Este arquivo contém prompts e melhores práticas para usar a API Gemini em chatbots.

## Prompts para a API Gemini

### Conversação Aberta
```json
{
  "contents": [
    {
      "role": "user",
      "parts": [
        {
          "text": "Olá, como você está?"
        }
      ]
    }
  ]
}
```

### Perguntas e Respostas
```json
{
  "contents": [
    {
      "role": "user",
      "parts": [
        {
          "text": "Qual é a capital da França?"
        }
      ]
    }
  ]
}
```

### Geração de Diálogo
```json
{
  "contents": [
    {
      "role": "user",
      "parts": [
        {
          "text": "Gere um diálogo entre um cliente e um agente de atendimento ao cliente sobre um produto com defeito."
        }
      ]
    }
  ]
}
```

## Melhores Práticas

- **Gerenciamento de histórico de conversas:** Mantenha o histórico da conversa para que o chatbot possa se lembrar do que foi dito anteriormente e fornecer respostas mais contextuais.
- **Personalidade do chatbot:** Defina uma personalidade para o seu chatbot e use-a de forma consistente em todas as respostas.
- **Tratamento de fallback:** Implemente uma estratégia de fallback para lidar com perguntas que o chatbot não entende.
- **Escalação para humanos:** Forneça uma maneira para os usuários escalarem para um agente humano se não estiverem satisfeitos com as respostas do chatbot.
- **Teste e iteração:** Teste seu chatbot com usuários reais e use o feedback deles para iterar e melhorar o desempenho do chatbot.
