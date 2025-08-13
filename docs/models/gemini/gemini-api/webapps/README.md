# Gemini API para Web Apps - Prompts e Melhores Práticas

Este arquivo contém prompts e melhores práticas para usar a API Gemini em aplicações web.

## Prompts para a API Gemini

### Geração de Texto
```json
{
  "contents": [
    {
      "role": "user",
      "parts": [
        {
          "text": "Escreva um email para um cliente em potencial apresentando nosso novo produto, o 'Super Widget'. Destaque seus principais recursos e benefícios."
        }
      ]
    }
  ]
}
```

### Análise de Sentimento
```json
{
  "contents": [
    {
      "role": "user",
      "parts": [
        {
          "text": "Analise o sentimento do seguinte texto: 'Estou muito feliz com a compra do meu novo carro. O atendimento ao cliente foi excelente e o carro é incrível!'"
        }
      ]
    }
  ]
}
```

### Tradução
```json
{
  "contents": [
    {
      "role": "user",
      "parts": [
        {
          "text": "Traduza a seguinte frase para o inglês: 'Olá, como você está?'"
        }
      ]
    }
  ]
}
```

## Melhores Práticas

- **Gerenciamento de chaves de API:** Nunca exponha suas chaves de API no lado do cliente. Use um servidor backend para fazer chamadas para a API Gemini e passe os resultados para o seu aplicativo da web.
- **Tratamento de erros:** Implemente um tratamento de erros robusto para lidar com falhas de rede, erros de API e outros problemas que possam ocorrer.
- **Otimização de desempenho:** Use técnicas de cache para armazenar em cache as respostas da API e reduzir o número de chamadas que você faz para a API Gemini.
- **Segurança:** Valide e sanitize todas as entradas do usuário antes de enviá-las para a API Gemini para evitar ataques de injeção de prompt.
- **Gerenciamento de custos:** Monitore seu uso da API e defina limites de orçamento para evitar cobranças inesperadas.
