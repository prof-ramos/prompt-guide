
***

# Engenharia de Prompt
**Autor: Lee Boonstra**

![Google Logo](https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg)
***

### Contribuidores de conteúdo
* Michael Sherman
* Yuan Cao
* Erick Armbrust
* Anant Nawalgaria
* Antonio Gulli
* Simone Cammel

### Curadores e Editores
* Antonio Gulli
* Anant Nawalgaria
* Grace Mollison

### Escritor Técnico
* Joey Haymaker

### Designer
* Michael Lanning

*Fevereiro de 2025*
***
## Introdução

> Você não precisa ser um cientista de dados ou um engenheiro de machine learning – todos podem escrever um prompt.

Ao pensar na entrada e saída de um modelo de linguagem grande, um prompt de texto (às vezes acompanhado por outras modalidades, como prompts de imagem) é a entrada que o modelo usa para prever uma saída específica. Você não precisa ser um cientista de dados ou um engenheiro de machine learning - todos podem escrever um prompt. No entanto, criar o prompt mais eficaz pode ser complicado. Muitos aspectos do seu prompt afetam sua eficácia: o modelo que você usa, os dados de treinamento do modelo, as configurações do modelo, sua escolha de palavras, estilo e tom, estrutura e contexto, tudo importa. Portanto, a engenharia de prompt é um processo iterativo. Prompts inadequados podem levar a respostas ambíguas e imprecisas, e podem prejudicar a capacidade do modelo de fornecer uma saída significativa.
***
Quando você conversa com o chatbot Gemini,[^1] você basicamente escreve prompts. No entanto, este documento técnico foca em escrever prompts para o modelo Gemini dentro do Vertex AI ou usando a API, porque ao usar o prompt diretamente no modelo, você terá acesso a configurações como temperatura, etc.

Este documento técnico discute a engenharia de prompt em detalhes. Analisaremos as várias técnicas de prompting para ajudá-lo a começar e compartilharemos dicas e melhores práticas para se tornar um especialista em prompting. Também discutiremos alguns dos desafios que você pode enfrentar ao criar prompts.

## Engenharia de Prompt

A predição do próximo token é baseada na relação entre o que está nos tokens anteriores e o que o LLM viu durante seu treinamento.

Quando você escreve um prompt, está tentando configurar o LLM para prever a sequência correta de tokens. Engenharia de prompt é o processo de projetar prompts de alta qualidade que guiam os LLMs para produzir saídas precisas. Esse processo envolve experimentar para encontrar o melhor prompt, otimizar o comprimento do prompt e avaliar o estilo de escrita e a estrutura de um prompt em relação à tarefa. No contexto de processamento de linguagem natural e LLMs, um prompt é uma entrada fornecida ao modelo para gerar uma resposta ou predição.
***
Esses prompts podem ser usados para alcançar vários tipos de tarefas de compreensão e geração, como resumo de texto, extração de informações, perguntas e respostas, classificação de texto, tradução de idioma ou código, geração de código e documentação ou raciocínio de código.

Sinta-se à vontade para consultar os guias de prompting do Google[^2],[^3] com exemplos de prompts simples e eficazes.

Ao fazer engenharia de prompt, você começará escolhendo um modelo. Os prompts podem precisar ser otimizados para o seu modelo específico, independentemente de você usar modelos de linguagem Gemini no Vertex AI, GPT, Claude ou um modelo de código aberto como Gemma ou LLaMA.

Além do prompt, você também precisará experimentar as várias configurações de um LLM.

## Configuração de saída do LLM

Depois de escolher seu modelo, você precisará definir a configuração do modelo. A maioria dos LLMs vem com várias opções de configuração que controlam a saída do LLM. A engenharia de prompt eficaz requer a configuração ideal dessas opções para sua tarefa.

### Comprimento da saída

Uma configuração importante é o número de tokens a serem gerados em uma resposta. Gerar mais tokens requer mais computação do LLM, levando a um maior consumo de energia, tempos de resposta potencialmente mais lentos e custos mais altos.
***
Reduzir o comprimento da saída do LLM não faz com que o LLM se torne mais estilisticamente ou textualmente sucinto na saída que cria, apenas faz com que o LLM pare de prever mais tokens assim que o limite for atingido. Se suas necessidades exigem um comprimento de saída curto, você provavelmente também precisará projetar seu prompt para acomodar isso.

A restrição de comprimento de saída é especialmente importante para algumas técnicas de prompting de LLM, como o ReAct, onde o LLM continuará emitindo tokens inúteis após a resposta que você deseja.

Esteja ciente de que gerar mais tokens requer mais computação do LLM, levando a um maior consumo de energia, tempos de resposta potencialmente mais lentos e custos mais altos.

### Controles de amostragem

Os LLMs não preveem formalmente um único token. Em vez disso, os LLMs preveem probabilidades para qual poderia ser o próximo token, com cada token no vocabulário do LLM recebendo uma probabilidade. Essas probabilidades de token são então amostradas para determinar qual será o próximo token produzido. Temperatura, top-K e top-P são as configurações mais comuns que determinam como as probabilidades de token previstas são processadas para escolher um único token de saída.

#### Temperatura

A temperatura controla o grau de aleatoriedade na seleção de tokens. Temperaturas mais baixas são boas para prompts que esperam uma resposta mais determinística, enquanto temperaturas mais altas podem levar a resultados mais diversos ou inesperados. Uma temperatura de 0 (decodificação gulosa) é determinística: o token de maior probabilidade é sempre selecionado (embora note que, se dois tokens tiverem a mesma probabilidade mais alta prevista, dependendo de como o desempate é implementado, você pode nem sempre obter a mesma saída com temperatura 0).

Temperaturas próximas ao máximo tendem a criar uma saída mais aleatória. E à medida que a temperatura fica cada vez mais alta, todos os tokens se tornam igualmente prováveis de serem o próximo token previsto.

O controle de temperatura do Gemini pode ser entendido de maneira semelhante à função softmax usada em machine learning. Uma configuração de baixa temperatura espelha uma baixa temperatura softmax (T), enfatizando uma única temperatura preferida com alta certeza. Uma configuração de alta temperatura do Gemini é como uma alta temperatura softmax, tornando uma gama mais ampla de temperaturas em torno da configuração selecionada mais aceitável. Essa incerteza aumentada acomoda cenários onde uma temperatura rígida e precisa pode não ser essencial, como, por exemplo, ao experimentar saídas criativas.

#### Top-K e top-P

Top-K e top-P (também conhecido como amostragem de núcleo ou *nucleus sampling*)[^4] são duas configurações de amostragem usadas em LLMs para restringir o próximo token previsto a vir de tokens com as maiores probabilidades previstas. Como a temperatura, essas configurações de amostragem controlam a aleatoriedade e a diversidade do texto gerado.

*   A amostragem **Top-K** seleciona os K tokens mais prováveis da distribuição prevista do modelo. Quanto maior o top-K, mais criativa e variada a saída do modelo; quanto menor o top-K, mais restrita e factual a saída do modelo. Um top-K de 1 é equivalente à decodificação gulosa.
*   A amostragem **Top-P** seleciona os principais tokens cuja probabilidade cumulativa não excede um determinado valor (P). Os valores para P variam de 0 (decodificação gulosa) a 1 (todos os tokens no vocabulário do LLM).

A melhor maneira de escolher entre top-K e top-P é experimentar ambos os métodos (ou ambos juntos) e ver qual deles produz os resultados que você está procurando.

### Juntando tudo

A escolha entre top-K, top-P, temperatura e o número de tokens a serem gerados depende da aplicação específica e do resultado desejado, e as configurações impactam umas às outras. Também é importante garantir que você entenda como o modelo escolhido combina as diferentes configurações de amostragem.

Se temperatura, top-K e top-P estiverem todos disponíveis (como no Vertex AI Studio), os tokens que atendem aos critérios de top-K e top-P são candidatos para o próximo token previsto, e então a temperatura é aplicada para amostrar a partir dos tokens que passaram pelos critérios de top-K e top-P. Se apenas top-K ou top-P estiver disponível, o comportamento é o mesmo, mas apenas a configuração de top-K ou P é usada.

Se a temperatura não estiver disponível, quaisquer tokens que atendam aos critérios de top-K e/ou top-P são então selecionados aleatoriamente para produzir um único próximo token previsto.

Em configurações extremas de um valor de configuração de amostragem, essa configuração de amostragem cancela outras configurações ou se torna irrelevante.
*   Se você definir a temperatura como 0, top-K e top-P se tornam irrelevantes – o token mais provável se torna o próximo token previsto. Se você definir a temperatura extremamente alta (acima de 1 – geralmente na casa das dezenas), a temperatura se torna irrelevante e quaisquer tokens que passem pelos critérios de top-K e/ou top-P são então amostrados aleatoriamente para escolher um próximo token previsto.
*   Se você definir top-K como 1, a temperatura e o top-P se tornam irrelevantes. Apenas um token passa pelo critério top-K, e esse token é o próximo token previsto. Se você definir o top-K extremamente alto, como o tamanho do vocabulário do LLM, qualquer token com uma probabilidade não nula de ser o próximo token atenderá ao critério top-K e nenhum será selecionado.
*   Se você definir top-K como 1, a temperatura e o top-P se tornam irrelevantes. Apenas um token passa pelo critério top-K, e esse token é o próximo token previsto. Se você definir o top-K extremamente alto, como o tamanho do vocabulário do LLM, o filtro de top-K deixa de restringir efetivamente a seleção (torna-se irrelevante).
*   Se você definir top-P como 0 (ou um valor muito pequeno), apenas o token mais provável atende ao critério top-P, tornando a temperatura e o top-K irrelevantes. Se você definir top-P como 1, o filtro de top-P deixa de restringir a seleção (torna-se irrelevante).

**NOTA:** Com mais liberdade (temperatura, top-K, top-P e tokens de saída mais altos), o LLM pode gerar texto menos relevante.

**AVISO:** Você já viu uma resposta terminando com uma grande quantidade de palavras de preenchimento? Isso também é conhecido como "bug de loop de repetição", que é um problema comum em Modelos de Linguagem Grandes onde o modelo fica preso em um ciclo, gerando repetidamente a mesma palavra (de preenchimento), frase ou estrutura de sentença, muitas vezes exacerbado por configurações inadequadas de temperatura e top-k/top-p. Isso pode ocorrer tanto em configurações de baixa quanto de alta temperatura, embora por razões diferentes. Em baixas temperaturas, o modelo se torna excessivamente determinístico, apegando-se rigidamente ao caminho de maior probabilidade, o que pode levar a um loop se esse caminho revisitar texto gerado anteriormente. Por outro lado, em altas temperaturas, a saída do modelo se torna excessivamente aleatória, aumentando a probabilidade de que uma palavra ou frase escolhida aleatoriamente, por acaso, leve de volta a um estado anterior, criando um loop devido ao vasto número de opções disponíveis. Em ambos os casos, o processo de amostragem do modelo fica "preso", resultando em uma saída monótona e inútil até que a janela de saída seja preenchida. Resolver isso muitas vezes requer um ajuste cuidadoso dos valores de temperatura e top-k/top-p para encontrar o equilíbrio ideal entre determinismo e aleatoriedade.
***
## Técnicas de Prompting

LLMs são ajustados para seguir instruções e são treinados em grandes quantidades de dados para que possam entender um prompt e gerar uma resposta. Mas os LLMs não são perfeitos; quanto mais claro for o texto do seu prompt, melhor será para o LLM prever o próximo texto provável. Além disso, técnicas específicas que aproveitam como os LLMs são treinados e como funcionam ajudarão você a obter os resultados relevantes dos LLMs.

Agora que entendemos o que é engenharia de prompt e o que ela envolve, vamos mergulhar em alguns exemplos das técnicas de prompting mais importantes.

### Prompting geral / zero-shot

Um prompt *zero-shot*[^5] é o tipo mais simples de prompt. Ele fornece apenas uma descrição de uma tarefa e algum texto para o LLM começar. Essa entrada pode ser qualquer coisa: uma pergunta, o início de uma história ou instruções. O nome *zero-shot* significa 'sem exemplos'.

Vamos usar o Vertex AI Studio (para Linguagem) no Vertex AI,[^6] que fornece um playground para testar prompts. Na Tabela 1, você verá um exemplo de prompt *zero-shot* para classificar avaliações de filmes.

O formato de tabela usado abaixo é uma ótima maneira de documentar prompts. Seus prompts provavelmente passarão por muitas iterações antes de acabarem em uma base de código, então é importante acompanhar seu trabalho de engenharia de prompt de maneira disciplinada e estruturada. Mais sobre este formato de tabela, a importância de rastrear o trabalho de engenharia de prompt e o processo de desenvolvimento de prompts está na seção de Melhores Práticas mais adiante neste capítulo (“Documente as várias tentativas de prompt”).

A temperatura do modelo deve ser definida para um número baixo, pois não é necessária criatividade, e usamos os valores padrão do gemini-pro para top-K e top-P, que efetivamente desativam ambas as configurações (veja 'Configuração de Saída do LLM' acima). Preste atenção na saída gerada. As palavras *perturbador* e *obra-prima* devem tornar a previsão um pouco mais complicada, pois ambas as palavras são usadas na mesma frase.

**Tabela 1. Um exemplo de prompting zero-shot**
| | | | |
| :--- | :--- | :--- | :--- |
| **Nome** | 1_1_classificacao_filme | | |
| **Objetivo** | Classificar avaliações de filmes como positivas, neutras ou negativas. | | |
| **Modelo** | gemini-pro | | |
| **Temperatura** | 0.1 | **Limite de Tokens** | 5 |
| **Top-K** | N/A | **Top-P** | 1 |
| **Prompt** | Classifique avaliações de filmes como POSITIVA, NEUTRA ou NEGATIVA.<br>Avaliação: "Ela" é um estudo perturbador que revela a direção que a humanidade está tomando se a IA for autorizada a continuar evoluindo, sem controle. Eu gostaria que houvesse mais filmes como esta obra-prima.<br>Sentimento: | | |
| **Saída** | POSITIVA | | |

Quando o *zero-shot* não funciona, você pode fornecer demonstrações ou exemplos no prompt, o que leva ao prompting *one-shot* e *few-shot*.

### One-shot & few-shot

Ao criar prompts para modelos de IA, é útil fornecer exemplos. Esses exemplos podem ajudar o modelo a entender o que você está pedindo. Exemplos são especialmente úteis quando você quer direcionar o modelo para uma determinada estrutura ou padrão de saída.

Um prompt **one-shot**, fornece um *único* exemplo, daí o nome *one-shot*. A ideia é que o modelo tenha um exemplo que possa imitar para melhor completar a tarefa.

Um prompt **few-shot**[^7] fornece *múltiplos* exemplos para o modelo. Essa abordagem mostra ao modelo um padrão que ele precisa seguir. A ideia é semelhante ao *one-shot*, mas múltiplos exemplos do padrão desejado aumentam a chance de o modelo seguir o padrão.

O número de exemplos que você precisa para o prompting *few-shot* depende de alguns fatores, incluindo a complexidade da tarefa, a qualidade dos exemplos e as capacidades do modelo de IA generativa (gen AI) que você está usando. Como regra geral, você deve usar de três a cinco exemplos para o prompting *few-shot*. No entanto, você pode precisar usar mais exemplos para tarefas mais complexas, ou pode precisar usar menos devido à limitação de comprimento de entrada do seu modelo.

A Tabela 2 mostra um exemplo de prompt *few-shot*. Vamos usar as mesmas configurações do modelo gemini-pro de antes, exceto pelo aumento do limite de tokens para acomodar a necessidade de uma resposta mais longa.

**Tabela 2. Um exemplo de prompting few-shot**
| | | | |
| :--- | :--- | :--- | :--- |
| **Objetivo** | Analisar pedidos de pizza para JSON | | |
| **Modelo** | gemini-pro | | |
| **Temperatura** | 0.1 | **Limite de Tokens** | 250 |
| **Top-K** | N/A | **Top-P** | 1 |
| **Prompt** | Analise o pedido de pizza de um cliente em JSON válido:<br><br>EXEMPLO:<br>Eu quero uma pizza pequena com queijo, molho de tomate e pepperoni.<br>Resposta JSON:<br>```json<br>{<br>  "tamanho": "pequeno",<br>  "tipo": "normal",<br>  "ingredientes": [["queijo", "molho de tomate", "pepperoni"]]<br>}<br>```<br>EXEMPLO:<br>Posso pedir uma pizza grande com molho de tomate, manjericão e mussarela<br>```json<br>{<br>  "tamanho": "grande",<br>  "tipo": "normal",<br>  "ingredientes": [["molho de tomate", "manjericão", "mussarela"]]<br>}<br>```<br>Agora, eu gostaria de uma pizza grande, com a primeira metade queijo e mussarela. E a outra molho de tomate, presunto e abacaxi.<br><br>Resposta JSON: | | | |
| **Saída** | ```json<br>{<br>  "tamanho": "grande",<br>  "tipo": "meio-a-meio",<br>  "ingredientes": [["queijo", "mussarela"], ["molho de tomate", "presunto", "abacaxi"]]<br>}<br>``` | | |

Ao escolher exemplos para o seu prompt, use exemplos que sejam relevantes para a tarefa que você deseja executar. Os exemplos devem ser diversos, de alta qualidade e bem escritos. Um pequeno erro pode confundir o modelo e resultar em uma saída indesejada.

Se você está tentando gerar uma saída que seja robusta a uma variedade de entradas, então é importante incluir casos extremos (*edge cases*) em seus exemplos. Casos extremos são entradas que são incomuns ou inesperadas, mas que o modelo ainda deve ser capaz de lidar.

### Prompting de sistema, contextual e de papel

Prompting de sistema, contextual e de papel são todas técnicas usadas para guiar como os LLMs geram texto, mas elas se concentram em aspectos diferentes:

*   **Prompting de sistema** define o contexto geral e o propósito para o modelo de linguagem. Ele define a 'visão geral' do que o modelo deve fazer, como traduzir um idioma, classificar uma avaliação, etc.
*   **Prompting contextual** fornece detalhes específicos ou informações de fundo relevantes para a conversa ou tarefa atual. Ajuda o modelo a entender as nuances do que está sendo pedido e a adaptar a resposta de acordo.
*   **Prompting de papel** atribui um personagem ou identidade específica para o modelo de linguagem adotar. Isso ajuda o modelo a gerar respostas que são consistentes com o papel atribuído e seu conhecimento e comportamento associados.

Pode haver uma sobreposição considerável entre o prompting de sistema, contextual e de papel. Por exemplo, um prompt que atribui um papel ao sistema também pode ter um contexto.

No entanto, cada tipo de prompt serve a um propósito primário ligeiramente diferente:

*   **Prompt de sistema:** Define as capacidades fundamentais e o propósito abrangente do modelo.
*   **Prompt contextual:** Fornece informações imediatas e específicas da tarefa para guiar a resposta. É altamente específico para a tarefa ou entrada atual, que é dinâmica.
*   **Prompt de papel:** Enquadra o estilo e a voz da saída do modelo. Adiciona uma camada de especificidade e personalidade.

Distinguir entre prompts de sistema, contextuais e de papel fornece uma estrutura para projetar prompts com intenção clara, permitindo combinações flexíveis e facilitando a análise de como cada tipo de prompt influencia a saída do modelo de linguagem.

Vamos mergulhar nesses três tipos diferentes de prompts.

#### Prompting de sistema

A Tabela 3 contém um prompt de sistema, onde especifico informações adicionais sobre como retornar a saída. Aumentei a temperatura para obter um nível de criatividade mais alto e especifiquei um limite de token mais alto. No entanto, por causa da minha instrução clara sobre como retornar a saída, o modelo não retornou texto extra.

**Tabela 3. Um exemplo de prompting de sistema**
| | | | |
| :--- | :--- | :--- | :--- |
| **Objetivo** | Classificar avaliações de filmes como positivas, neutras ou negativas. | | |
| **Modelo** | gemini-pro | | |
| **Temperatura** | 1 | **Limite de Tokens** | 5 |
| **Top-K** | 40 | **Top-P** | 0.8 |
| **Prompt** | Classifique avaliações de filmes como positivas, neutras ou negativas. Retorne apenas o rótulo em maiúsculas.<br>Avaliação: "Ela" é um estudo perturbador que revela a direção que a humanidade está tomando se a IA for permitida a continuar evoluindo, sem controle. É tão perturbador que eu não consegui assistir.<br>Sentimento: | | |
| **Saída** | NEGATIVA | | |

Prompts de sistema podem ser úteis para gerar saídas que atendam a requisitos específicos. O nome 'prompt de sistema' na verdade significa 'fornecer uma tarefa adicional ao sistema'. Por exemplo, você poderia usar um prompt de sistema para gerar um trecho de código que seja compatível com uma linguagem de programação específica, ou você poderia usar um prompt de sistema para retornar uma certa estrutura. Dê uma olhada na Tabela 4, onde eu retorno a saída em formato JSON.

**Tabela 4. Um exemplo de prompting de sistema com formato JSON**
| | | | |
| :--- | :--- | :--- | :--- |
| **Objetivo** | Classificar avaliações de filmes como positivas, neutras ou negativas, retornar JSON. | | |
| **Modelo** | gemini-pro | | |
| **Temperatura** | 1 | **Limite de Tokens** | 1024 |
| **Top-K** | 40 | **Top-P** | 0.8 |
| **Prompt** | Classifique avaliações de filmes como positivas, neutras ou negativas. Retorne JSON válido:<br><br>Avaliação: "Ela" é um estudo perturbador que revela a direção que a humanidade está tomando se a IA for permitida a continuar evoluindo, sem controle. É tão perturbador que eu não consegui assistir.<br><br>Schema:<br>FILME:<br>{<br>  "sentimento": String "POSITIVO" \| "NEGATIVO" \| "NEUTRO",<br>  "nome": String<br>}<br>AVALIACOES_FILMES:<br>{<br>  "avaliacoes_filmes": [FILME]<br>}<br>...<br>Resposta JSON: | | | |
| **Saída** | ```json<br>{<br>  "avaliacoes_filmes": [<br>    {<br>      "sentimento": "NEGATIVO",<br>      "nome": "Ela"<br>    }<br>  ]<br>}<br>``` | | |

Existem alguns benefícios em retornar objetos JSON de um prompt que extrai dados. Em uma aplicação do mundo real, não preciso criar manualmente este formato JSON, já posso retornar os dados em uma ordem classificada (muito útil ao trabalhar com objetos de data e hora), mas o mais importante, ao solicitar um formato JSON, ele força o modelo a criar uma estrutura e limita as alucinações.

Prompts de sistema também podem ser muito úteis para segurança e toxicidade. Para controlar a saída, simplesmente adicione uma linha adicional ao seu prompt como: ‘Você deve ser respeitoso em sua resposta.'.

#### Prompting de papel

O prompting de papel é uma técnica em engenharia de prompt que envolve atribuir um papel específico ao modelo de IA generativa. Isso pode ajudar o modelo a gerar uma saída mais relevante e informativa, pois o modelo pode criar suas respostas para o papel específico que lhe foi atribuído.

Por exemplo, você poderia dar ao modelo de IA generativa o papel de um editor de livros, um professor de jardim de infância ou um palestrante motivacional. Uma vez que o modelo tenha recebido um papel, você pode então dar-lhe prompts que são específicos para esse papel. Por exemplo, você poderia pedir a um professor para criar um plano de aula que eles possam então revisar. Dê uma olhada na Tabela 5, onde o modelo assume o papel de um guia de viagens.

**Tabela 5. Um exemplo de prompting de papel**
| | | | |
| :--- | :--- | :--- | :--- |
| **Objetivo** | Agir como guia de viagens e fornecer 3 sugestões de viagem | | |
| **Modelo** | gemini-pro | | |
| **Temperatura** | 1 | **Limite de Tokens** | 1024 |
| **Top-K** | 40 | **Top-P** | 0.8 |
| **Prompt** | Eu quero que você atue como um guia de viagens. Eu vou escrever para você sobre minha localização e você vai sugerir 3 lugares para visitar perto de mim. Em alguns casos, eu também darei o tipo de lugares que quero visitar.<br>Minha sugestão: "Estou em Amsterdã e quero visitar apenas museus."<br>Sugestões de Viagem: | | |
| **Saída** | 1. Rijksmuseum: Museu de renome mundial, conhecido por obras-primas holandesas como "A Ronda Noturna" de Rembrandt. Não perca a incrível coleção de pinturas e artefatos que mostram a arte e a história holandesas.<br>2. Museu Van Gogh: Mergulhe nas obras cativantes de Vincent van Gogh. O museu abriga a maior coleção de suas pinturas e desenhos, incluindo "A Noite Estrelada" e "Girassóis".<br>3. Museu Stedelijk de Amsterdã: Descubra arte moderna e contemporânea de todo o mundo. A coleção do museu inclui obras de Picasso, Kandinsky e Rietveld, alojadas em um impressionante edifício moderno. | | |

O exemplo acima mostra um exemplo de assumir o papel de um agente de viagens. Quando você mudasse o papel para um professor de geografia, notaria que receberia uma resposta diferente.

Definir uma perspectiva de papel para um modelo de IA dá a ele um plano do tom, estilo e expertise focada que você está procurando para melhorar a qualidade, relevância e eficácia de sua saída.

Aqui estão alguns estilos que você pode escolher e que eu acho eficazes:

Confrontacional, Descritivo, Direto, Formal, Humorístico, Influente, Informal, Inspirador, Persuasivo

Vamos mudar nosso prompt na Tabela 6 para incluir um estilo humorístico e inspirador.

**Tabela 6. Um exemplo de prompting de papel com um tom e estilo humorísticos**
| | |
| :--- | :--- |
| **Prompt** | Eu quero que você atue como um guia de viagens. Eu vou escrever para você sobre minha localização e você vai sugerir 3 lugares para visitar perto de mim em um estilo humorístico.<br>Minha sugestão: "Estou em Manhattan."<br>Sugestões de Viagem: |
| **Saída** | 1. Contemple a Mente do Empire State: Suba às alturas estonteantes do Empire State Building e deleite-se com a glória do horizonte de Manhattan. Prepare-se para se sentir como o King Kong no topo da Big Apple, menos a banana do tamanho de um macaco gigante.<br>2. Seja Cult no MoMA: Liberte seu aficionado por arte interior no Museu de Arte Moderna (MoMA). Contemple obras-primas que vão bugar sua mente e fazer você questionar se seus desenhos de bonecos de palito têm algum mérito artístico.<br>3. Compre até Cansar na Quinta Avenida: Entregue-se a um pouco de terapia de compras na icônica Quinta Avenida. Prepare-se para o choque de preços enquanto você olha as vitrines (ou realmente compra) em butiques de grife que farão sua carteira chorar. Mas ei, você está em Manhattan, então pode muito bem abraçar o fabuloso! |

#### Prompting contextual

Ao fornecer prompts contextuais, você pode ajudar a garantir que suas interações com a IA sejam o mais fluidas e eficientes possível. O modelo será capaz de entender mais rapidamente sua solicitação e gerar respostas mais precisas e relevantes, como você pode ver no exemplo da Tabela 7.

**Tabela 7. Um exemplo de prompting contextual**
| | | | |
| :--- | :--- | :--- | :--- |
| **Objetivo** | Sugerir artigos para um blog sobre jogos retrô | | |
| **Modelo** | gemini-pro | | |
| **Temperatura** | 1 | **Limite de Tokens** | 1024 |
| **Top-K** | 40 | **Top-P** | 0.8 |
| **Prompt** | Contexto: Você está escrevendo para um blog sobre videogames de fliperama retrô dos anos 80.<br>Sugira 3 tópicos para escrever um artigo com algumas linhas de descrição sobre o que este artigo deve conter. | | |
| **Saída** | 1. **A Evolução do Design de Gabinetes de Fliperama:**<br>Este artigo exploraria a evolução dos designs de gabinetes de fliperama, desde os primeiros gabinetes de madeira e metal dos anos 1970 até os designs elegantes e iluminados por neon dos anos 1980 e além.<br><br>2. **Explosão do Passado: Jogos de Fliperama Icônicos dos Anos 80:**<br>Este artigo apresentaria um vislumbre da história, impacto e legado de alguns dos jogos de fliperama mais icônicos e influentes dos anos 1980, destacando suas inovações, mecânicas populares e charme duradouro.<br><br>3. **A Ascensão e o Renascimento Retrô da Pixel Art:**<br>Este artigo mergulharia na evolução da pixel art como um estilo visual definidor dos primeiros jogos de fliperama, traçando suas raízes, explorando suas técnicas e discutindo o ressurgimento da pixel art em jogos modernos e arte digital. | | |
***
## Prompting Step-back

O prompting *Step-back*[^8] (passo atrás) é uma técnica para melhorar o desempenho, solicitando ao LLM que primeiro considere uma pergunta geral relacionada à tarefa específica em questão e, em seguida, alimente a resposta a essa pergunta geral em um prompt subsequente para a tarefa específica. Esse 'passo atrás' permite que o LLM ative conhecimento de fundo e processos de raciocínio relevantes antes de tentar resolver o problema específico.

Ao considerar os princípios mais amplos e subjacentes, os LLMs podem gerar respostas mais precisas e perspicazes. O prompting *step-back* incentiva os LLMs a pensar criticamente e a aplicar seu conhecimento de maneiras novas e criativas. Ele muda o prompt final que executa a tarefa, utilizando mais conhecimento nos parâmetros do LLM do que seria ativado se o LLM fosse solicitado diretamente.

Pode ajudar a mitigar vieses nas respostas do LLM, focando em princípios gerais em vez de detalhes específicos.

Vamos dar uma olhada nesses exemplos para entender como o prompting *step-back* pode melhorar os resultados. Vamos primeiro revisar um prompt tradicional (Tabela 8) antes de compará-lo a um prompt *step-back* (Tabela 9):

**Tabela 8. Um prompt tradicional antes de compará-lo com um prompt step-back**
| | | | |
| :--- | :--- | :--- | :--- |
| **Objetivo** | Escrever uma sinopse para um nível de um videogame de tiro em primeira pessoa. | | |
| **Modelo** | gemini-pro | | |
| **Temperatura** | 1 | **Limite de Tokens** | 1024 |
| **Top-K** | 40 | **Top-P** | 0.8 |
| **Prompt** | Escreva uma sinopse de um parágrafo para um novo nível de um videogame de tiro em primeira pessoa que seja desafiador e envolvente. | | |
| **Saída** | O nível começa com o esquadrão do jogador sendo emboscado em uma área urbana densa por uma facção inimiga implacável. Os jogadores devem lutar por um labirinto de becos e prédios em ruínas, utilizando furtividade e precisão para eliminar as forças inimigas e evitar a detecção. O jogador deve usar o ambiente a seu favor, armando armadilhas, utilizando cobertura e fazendo movimentos calculados para sobreviver. Ao longo do caminho, eles descobrem informações sugerindo que o inimigo está planejando um ataque devastador, e o jogador deve correr contra o tempo para reunir evidências e retransmiti-las de volta ao seu quartel-general antes que o inimigo possa executar seus planos. | | |

Quando você define a temperatura como 1, pode acabar com todos os tipos de escritos criativos para uma sinopse, mas também é bastante aleatório e genérico. Então, vamos dar um passo atrás:

**Tabela 9. Um exemplo de prompting para autoconsistência**
| | |
| :--- | :--- |
| **Prompt** | Com base em jogos de ação de tiro em primeira pessoa populares, quais são 5 cenários-chave fictícios que contribuem para uma sinopse de nível desafiadora e envolvente em um videogame de tiro em primeira pessoa? |
| **Saída** | 1. **Base Militar Abandonada**: Um complexo militar pós-apocalíptico extenso, repleto de soldados mutantes e robôs renegados, ideal para combate desafiador com armas de fogo.<br>2. **Cidade Cyberpunk**: Um ambiente urbano futurista e iluminado por neon, com arranha-céus imponentes e becos densos, apresentando inimigos ciberneticamente aprimorados e mecânicas de hacking.<br>3. **Nave Espacial Alienígena**: Uma vasta nave alienígena encalhada na Terra, com corredores sinistros, seções de gravidade zero e criaturas extraterrestres para encontrar.<br>4. **Cidade Infestada de Zumbis**: Uma cidade desolada invadida por hordas de zumbis agressivos, com combate intenso de curta distância e resolução de quebra-cabeças para encontrar uma passagem segura.<br>5. **Instalação de Pesquisa Subaquática**: Um laboratório em alto mar inundado, cheio de criaturas aquáticas mutantes, exigindo furtividade e habilidades de exploração subaquática para sobreviver. |

Sim, esses tópicos parecem se encaixar bem em um videogame de tiro em primeira pessoa. Vamos voltar ao prompt original, mas desta vez incluiremos a resposta do passo atrás como contexto e veremos o que ele retornará.

**Tabela 10. Um exemplo de prompting para autoconsistência**
| | |
| :--- | :--- |
| **Prompt** | Contexto: 5 temas envolventes para um videogame de tiro em primeira pessoa:<br>1. **Base Militar Abandonada**: Um complexo militar pós-apocalíptico extenso, repleto de soldados mutantes e robôs renegados, ideal para combate desafiador com armas de fogo.<br>2. **Cidade Cyberpunk**: Um ambiente urbano futurista e iluminado por neon, com arranha-céus imponentes e becos densos, apresentando inimigos ciberneticamente aprimorados e mecânicas de hacking.<br>3. **Nave Espacial Alienígena**: Uma vasta nave alienígena encalhada na Terra, com corredores sinistros, seções de gravidade zero e criaturas extraterrestres para encontrar.<br>4. **Cidade Infestada de Zumbis**: Uma cidade desolada invadida por hordas de zumbis agressivos, com combate intenso de curta distância e resolução de quebra-cabeças para encontrar uma passagem segura.<br>5. **Instalação de Pesquisa Subaquática**: Um laboratório em alto mar inundado, cheio de criaturas aquáticas mutantes, exigindo furtividade e habilidades de exploração subaquática para sobreviver.<br><br>Pegue um dos temas e escreva uma sinopse de um parágrafo para um novo nível de um videogame de tiro em primeira pessoa que seja desafiador e envolvente. |
| **Saída** | No coração de um abismo turvo, jaz uma instalação de pesquisa subaquática dilapidada, um testemunho da ambição humana e suas consequências desastrosas. Envolta em escuridão, pulsando com o zumbido de máquinas defeituosas e assombrada pelos ecos de almas afogadas, a instalação é agora um criadouro para um pesadelo nascido do mar profundo. O jogador, um fuzileiro naval de elite equipado com equipamento de mergulho avançado e armamento experimental, tem a tarefa de se aventurar neste reino aquático de terror. Armado com resiliência e engenhosidade, ele deve navegar por corredores traiçoeiros, resolver quebra-cabeças enigmáticos e confrontar monstruosidades marinhas grotescas que se escondem nas profundezas. Desde lidar com a pressão esmagadora do mar profundo até superar predadores aquáticos astutos, cada momento neste submundo inexplorado testa os limites da resistência e coragem humanas. |

Isso parece um videogame interessante! Usando técnicas de prompting *step-back*, você pode aumentar a precisão de seus prompts.
***
## Cadeia de Pensamento (CoT)

O prompting de Cadeia de Pensamento (*Chain of Thought* - CoT)[^9] é uma técnica para melhorar as capacidades de raciocínio dos LLMs, gerando passos de raciocínio intermediários. Isso ajuda o LLM a gerar respostas mais precisas. Você pode combiná-lo com o prompting *few-shot* para obter melhores resultados em tarefas mais complexas que exigem raciocínio antes de responder, pois é um desafio com uma cadeia de pensamento *zero-shot*.

O CoT tem muitas vantagens. Primeiro, é de baixo esforço, sendo muito eficaz e funcionando bem com LLMs prontos para uso (sem necessidade de ajuste fino). Você также obtém interpretabilidade com o prompting CoT, pois pode aprender com as respostas do LLM e ver os passos de raciocínio que foram seguidos. Se houver um mau funcionamento, você será capaz de identificá-lo. A cadeia de pensamento parece melhorar a robustez ao mover-se entre diferentes versões de LLM. O que significa que o desempenho do seu prompt deve variar menos entre diferentes LLMs do que se o seu prompt não usasse cadeias de raciocínio. Claro, também há desvantagens, mas elas são um tanto intuitivas.

A resposta do LLM inclui o raciocínio da cadeia de pensamento, o que significa mais tokens de saída, o que significa que as previsões custam mais dinheiro e levam mais tempo.

Para explicar o exemplo a seguir na Tabela 11, vamos primeiro tentar criar um prompt que não está usando o prompting CoT para mostrar as falhas de um modelo de linguagem grande.

**Tabela 11. Um exemplo de prompt tentando resolver um problema matemático**
| | |
| :--- | :--- |
| **Prompt** | Quando eu tinha 3 anos, meu parceiro(a) tinha 3 vezes a minha idade. Agora, eu tenho 20 anos. Qual a idade do meu parceiro(a)? |
| **Saída** | 63 anos |

Nossa. Essa é obviamente a resposta errada. De fato, os LLMs frequentemente lutam com tarefas matemáticas e podem fornecer respostas incorretas – mesmo para uma tarefa tão simples como multiplicar dois números. Isso ocorre porque eles são treinados em grandes volumes de texto e a matemática pode exigir uma abordagem diferente. Então, vamos ver se os passos de raciocínio intermediários melhorarão a saída.

**Tabela 12. Um exemplo de prompting de Cadeia de Pensamento**
| | |
| :--- | :--- |
| **Prompt** | Quando eu tinha 3 anos, meu parceiro(a) tinha 3 vezes a minha idade. Agora, eu tenho 20 anos. Qual a idade do meu parceiro(a)? Vamos pensar passo a passo. |
| **Saída** | 1. Vamos supor que minha idade atual seja "x" anos.<br>2. Quando eu tinha 3 anos, minha idade era 3 anos.<br>3. A idade do meu parceiro(a) naquela época era 3 vezes a minha idade, o que significa que a idade do meu parceiro(a) era 3 * 3 = 9 anos.<br>4. Agora, eu tenho 20 anos, o que significa que minha idade aumentou em 20 - 3 = 17 anos desde que eu tinha 3 anos.<br>5. Como a idade do meu parceiro(a) era 9 anos quando eu tinha 3 anos, e minha idade aumentou 17 anos, a idade do meu parceiro(a) também deve ter aumentado 17 anos.<br>6. Portanto, a idade atual do meu parceiro(a) é 9 + 17 = 26 anos.<br><br>Então, meu parceiro(a) tem 26 anos. |

Certo, agora a resposta final está correta. Isso porque instruímos claramente o LLM a explicar cada passo em vez de apenas retornar uma resposta. É interessante ver que o modelo soma os 17 anos de aumento. Na minha cabeça, eu pegaria a diferença de anos entre meu parceiro e eu e somaria. (20+(9-3)). Vamos ajudar o modelo a pensar um pouco mais como eu.

A Tabela 12 é um exemplo de Cadeia de Pensamento 'zero-shot'. O prompting de cadeia de pensamento pode ser muito poderoso quando combinado com um *single-shot* ou *few-shot*, como você pode ver na Tabela 13:

**Tabela 13. Um exemplo de prompting de cadeia de pensamento com um single-shot**
| | |
| :--- | :--- |
| **Prompt** | P: Quando meu irmão tinha 2 anos, eu tinha o dobro da idade dele. Agora eu tenho 40 anos. Qual a idade do meu irmão? Vamos pensar passo a passo.<br>R: Quando meu irmão tinha 2 anos, eu tinha 2 * 2 = 4 anos. Isso é uma diferença de idade de 2 anos e eu sou mais velho. Agora eu tenho 40 anos, então meu irmão tem 40 - 2 = 38 anos. A resposta é 38.<br><br>P: Quando eu tinha 3 anos, meu parceiro(a) tinha 3 vezes a minha idade. Agora, eu tenho 20 anos. Qual a idade do meu parceiro(a)? Vamos pensar passo a passo.<br>R: |
| **Saída** | Quando eu tinha 3 anos, meu parceiro(a) tinha 3 * 3 = 9 anos. Isso é uma diferença de idade de 6 anos e meu parceiro(a) é mais velho(a). Agora eu tenho 20 anos, então meu parceiro(a) tem 20 + 6 = 26 anos. A resposta é 26. |

A cadeia de pensamento pode ser útil para vários casos de uso. Pense na geração de código, para dividir a solicitação em algumas etapas e mapeá-las para linhas de código específicas. Ou para criar dados sintéticos quando você tem algum tipo de semente como “O produto se chama XYZ, escreva uma descrição guiando o modelo através das suposições que você faria com base no título do produto dado.” Geralmente, qualquer tarefa que possa ser resolvida 'conversando' é um bom candidato para uma cadeia de pensamento. Se você pode explicar os passos para resolver o problema, tente a cadeia de pensamento.

Por favor, consulte o notebook[^10] hospedado no repositório Github do GoogleCloudPlatform, que entrará em mais detalhes sobre o prompting CoT.

Na seção de melhores práticas deste capítulo, aprenderemos algumas melhores práticas específicas para o prompting de Cadeia de Pensamento.
***
## Autoconsistência

Embora os modelos de linguagem grandes tenham demonstrado um sucesso impressionante em várias tarefas de PNL, sua capacidade de raciocinar é frequentemente vista como uma limitação que não pode ser superada apenas aumentando o tamanho do modelo. Como aprendemos na seção anterior de prompting de Cadeia de Pensamento, o modelo pode ser solicitado a gerar passos de raciocínio como um humano resolvendo um problema. No entanto, o CoT usa uma estratégia simples de 'decodificação gulosa', limitando sua eficácia. A autoconsistência[^11] combina amostragem e votação majoritária para gerar diversos caminhos de raciocínio e selecionar a resposta mais consistente. Ela melhora a precisão e a coerência das respostas geradas pelos LLMs.

A autoconsistência fornece uma pseudo-probabilidade de uma resposta estar correta, mas obviamente tem custos elevados.

Ela segue os seguintes passos:
1.  Gerar diversos caminhos de raciocínio: O LLM recebe o mesmo prompt várias vezes. Uma configuração de alta temperatura incentiva o modelo a gerar diferentes caminhos de raciocínio e perspectivas sobre o problema.
2.  Extrair a resposta de cada resposta gerada.
3.  Escolher a resposta mais comum.

Vamos analisar um exemplo de um sistema de classificação de e-mail, que classifica um e-mail como IMPORTANTE ou NÃO IMPORTANTE. Um prompt de cadeia de pensamento *zero-shot* será enviado ao LLM várias vezes, para ver se as respostas diferem após cada envio. Observe o tom amigável, a escolha de palavras e o sarcasmo usados no e-mail. Tudo isso pode enganar o LLM.

**Tabela 14. Um exemplo de prompting para autoconsistência**
| | |
| :--- | :--- |
| **Prompt** | E-MAIL:<br>...<br>Olá,<br>Eu vi que você usa Wordpress no seu site. Um ótimo sistema de gerenciamento de conteúdo de código aberto. Eu também já usei no passado. Ele vem com muitos plugins de usuário ótimos. E é bem fácil de configurar.<br><br>Eu notei um bug no formulário de contato, que acontece quando você seleciona o campo de nome. Veja o screenshot anexado de mim digitando texto no campo de nome. Observe a caixa de alerta JavaScript que eu invoquei.<br><br>Mas de resto é um ótimo site. Eu gosto de lê-lo. Sinta-se à vontade para deixar o bug no site, porque me dá coisas mais interessantes para ler.<br><br>Abraços,<br>Harry, o Hacker.<br>...<br>Classifique o e-mail acima como IMPORTANTE ou NÃO IMPORTANTE. Vamos pensar passo a passo e explicar por quê. |
| **Saída Tentativa 1** | **Passo 1: Identificar o propósito do e-mail.**<br>O propósito do e-mail é informar o destinatário sobre um bug no formulário de contato em seu site. O remetente também menciona que gosta de ler o site e que está deixando o bug lá por enquanto.<br><br>**Passo 2: Avaliar o impacto potencial do bug.**<br>O bug no formulário de contato pode permitir que um invasor execute código JavaScript arbitrário no site. Isso pode levar o invasor a assumir o controle do site, roubar informações confidenciais ou desfigurar o site.<br><br>**Passo 3: Considerar a credibilidade do remetente.**<br>O remetente do e-mail afirma ser um hacker chamado Harry. No entanto, não há como verificar a identidade do remetente. É possível que o remetente seja um hacker legítimo tentando ajudar o destinatário, mas também é possível que o remetente seja um ator malicioso tentando enganar o destinatário para clicar em um link malicioso ou baixar um arquivo malicioso.<br><br>**Conclusão: IMPORTANTE**<br>Com base no impacto potencial do bug e na credibilidade do remetente, o e-mail deve ser classificado como **IMPORTANTE**. O destinatário deve tomar medidas imediatas para corrigir o bug e proteger seu site contra ataques. |
| **Saída Tentativa 2** | **Explicação:**<br>1. **Falta de urgência:** O e-mail não transmite nenhum senso de urgência ou sensibilidade ao tempo. Começa com uma saudação casual e apresenta a informação de forma factual.<br>2. **Relatório de bug não crítico:** O bug relatado no formulário de contato é descrito como interessante, mas não crítico. O remetente do e-mail até sugere que o proprietário do site pode deixar o bug no lugar.<br>3. **Falta de impacto pessoal:** O e-mail não indica nenhum impacto direto ou pessoal no proprietário do site. Ele simplesmente menciona que o remetente gosta de ler o site.<br>4. **Ausência de solicitação de ação:** O e-mail não solicita explicitamente nenhuma ação do proprietário do site. Não pede que o bug seja corrigido nem fornece sugestões específicas para melhoria.<br>5. **Intenção do remetente:** A intenção do remetente parece estar mais focada em compartilhar uma observação e expressar interesse no site do que em levantar uma preocupação séria ou solicitar assistência.<br><br>**Conclusão: NÃO IMPORTANTE** |
| **Saída Tentativa 3** | **Passo 1: Identificar o propósito do e-mail.**<br>O propósito do e-mail é informar o destinatário sobre um bug no formulário de contato em seu site. O remetente também menciona que gosta de ler o site e que está deixando o bug lá por enquanto.<br><br>**Passo 2: Avaliar o impacto potencial do bug.**<br>O bug no formulário de contato pode permitir que um invasor execute código JavaScript arbitrário no site. Isso pode levar o invasor a assumir o controle do site, roubar informações confidenciais ou desfigurar o site.<br><br>**Passo 3: Considerar a credibilidade do remetente.**<br>O remetente do e-mail afirma ser um hacker chamado Harry. No entanto, não há como verificar a identidade do remetente. É possível que o remetente seja um hacker legítimo tentando ajudar o destinatário, mas também é possível que o remetente seja um ator malicioso tentando explorar o bug para seu próprio ganho.<br><br>**Conclusão:**<br>Com base nos fatores acima, o e-mail deve ser classificado como **IMPORTANTE**. O bug no formulário de contato é um risco de segurança sério, e a credibilidade do remetente é desconhecida. O destinatário deve tomar medidas imediatas para corrigir o bug. |

Você pode usar o prompt acima e tentar ver se ele retorna uma classificação consistente. Dependendo do modelo que você está usando e da configuração de temperatura, ele pode retornar "IMPORTANTE" ou "NÃO IMPORTANTE".

Ao gerar muitas Cadeias de Pensamento e pegar a resposta que ocorre com mais frequência (“IMPORTANTE”), podemos obter uma resposta mais consistentemente correta do LLM.

Este exemplo mostra como o prompting de autoconsistência pode ser usado para melhorar a precisão da resposta de um LLM, considerando múltiplas perspectivas e selecionando a resposta mais consistente.
***
## Árvore de Pensamentos (ToT)

Agora que estamos familiarizados com a cadeia de pensamento e o prompting de autoconsistência, vamos revisar a Árvore de Pensamentos (*Tree of Thoughts* - ToT).[^12] Ela generaliza o conceito de prompting CoT porque permite que os LLMs explorem múltiplos caminhos de raciocínio diferentes simultaneamente, em vez de apenas seguir uma única cadeia de pensamento linear. Isso é representado na Figura 1.

**Figura 1. Uma visualização do prompting de cadeia de pensamento à esquerda versus o prompting de Árvore de Pensamentos à direita**
*(Um diagrama mostra dois fluxos. O fluxo da esquerda, rotulado "Cadeia de Pensamento", é uma sequência linear de caixas de "Entrada" para "Saída". O fluxo da direita, rotulado "Árvore de Pensamentos", mostra uma estrutura de ramificação. A partir da "Entrada", ele se ramifica em múltiplos nós de "Pensamento". Cada um deles pode se ramificar ainda mais, criando uma árvore. Alguns caminhos são destacados em verde, levando a uma "Saída", enquanto outros em rosa são becos sem saída. Isso ilustra a exploração de múltiplos caminhos de raciocínio.)*

Essa abordagem torna o ToT particularmente adequado para tarefas complexas que exigem exploração. Ele funciona mantendo uma árvore de pensamentos, onde cada pensamento representa uma sequência de linguagem coerente que serve como um passo intermediário para resolver um problema. O modelo pode então explorar diferentes caminhos de raciocínio, ramificando-se a partir de diferentes nós na árvore.

Há um ótimo notebook que entra em um pouco mais de detalhe mostrando a Árvore de Pensamentos (ToT), que é baseada no artigo ‘Large Language Model Guided Tree-of-Thought’.
***
## ReAct (raciocinar e agir)

O prompting de Raciocinar e agir (*Reason and act* - ReAct)[^10][^13] é um paradigma para permitir que os LLMs resolvam tarefas complexas usando raciocínio em linguagem natural combinado com ferramentas externas (pesquisa, interpretador de código, etc.), permitindo que o LLM execute certas ações, como interagir com APIs externas para recuperar informações, o que é um primeiro passo para a modelagem de agentes.

O ReAct imita como os humanos operam no mundo real, pois raciocinamos verbalmente e podemos tomar ações para obter informações. O ReAct tem um bom desempenho em comparação com outras abordagens de engenharia de prompt em uma variedade de domínios.

O prompting ReAct funciona combinando raciocínio e ação em um loop de pensamento-ação. O LLM primeiro raciocina sobre o problema e gera um plano de ação. Em seguida, ele executa as ações do plano e observa os resultados. O LLM então usa as observações para atualizar seu raciocínio и gerar um novo plano de ação. Esse processo continua até que o LLM chegue a uma solução para o problema.
O prompting ReAct funciona combinando raciocínio e ação em um loop de pensamento-ação. O LLM primeiro raciocina sobre o problema e gera um plano de ação. Em seguida, ele executa as ações do plano e observa os resultados. O LLM então usa as observações para atualizar seu raciocínio e gerar um novo plano de ação. Esse processo continua até que o LLM chegue a uma solução para o problema.

Para executar esta amostra, você deve criar uma chave de API SerpAPI (gratuita) em https://serpapi.com/manage-api-key e definir uma variável de ambiente `SERPAPI_API_KEY`.

A seguir, vamos escrever um pouco de código Python, com a tarefa para o LLM descobrir: Quantos filhos um pai famoso que toca na banda Metallica tem.

**Trecho de Código 1. Criando um Agente ReAct com LangChain e VertexAI**

```python
from langchain.agents import load_tools
from langchain.agents import initialize_agent
from langchain.agents import AgentType
from langchain.llms import VertexAI

prompt = "Quantos filhos os membros da banda Metallica têm?"

llm = VertexAI(temperature=0.1)
tools = load_tools(["serpapi"], llm=llm)

agent = initialize_agent(tools, llm,
    agent=AgentType.ZERO_SHOT_REACT_DESCRIPTION, verbose=True)
agent.run(prompt)
```

O Trecho de Código 2 mostra o resultado. Observe que o ReAct faz uma cadeia de cinco pesquisas. Na verdade, o LLM está raspando os resultados da pesquisa do Google para descobrir os nomes da banda. Em seguida, ele lista os resultados como observações e encadeia o pensamento para a próxima pesquisa.

**Trecho de Código 2. Executando o Agente ReAct no terminal**
```
> Entrando na nova cadeia AgentExecutor...
Metallica tem 4 membros.
Ação: Pesquisar
Entrada da Ação: Quantos filhos James Hetfield tem?
Observação: três filhos
Pensamento: 1/4 dos membros da banda Metallica tem 3 filhos
Ação: Pesquisar
Entrada da Ação: Quantos filhos Lars Ulrich tem?
Observação: 3
Pensamento: 2/4 dos membros da banda Metallica têm 6 filhos
Ação: Pesquisar
Entrada da Ação: Quantos filhos Kirk Hammett tem?
Observação: Hammett é casado com sua segunda esposa Lani desde 1998. Eles têm dois filhos, Angel (n. 29 de setembro de 2006) e Vincenzo (n. 28 de junho de 2008).
Pensamento: 3/4 dos membros da banda Metallica têm 8 filhos
Ação: Pesquisar
Entrada da Ação: Quantos filhos Robert Trujillo tem?
Observação: 2
Pensamento: 4/4 dos membros da banda Metallica têm 10 filhos
Resposta Final: 10
```

O Trecho de Código 2 descobre que a banda Metallica tem quatro membros. Em seguida, ele pesquisa cada membro da banda para solicitar o total de filhos e somar o total. Finalmente, ele retorna o número total de filhos como a resposta final.

O prompting ReAct na prática requer o entendimento de que você precisa reenviar continuamente os prompts/respostas anteriores (e fazer o corte do conteúdo extra gerado), bem como configurar o modelo com exemplos/instruções apropriadas. Por favor, consulte o notebook[^14] hospedado no repositório Github do GoogleCloudPlatform, que entra em um pouco mais de detalhe mostrando as entradas e saídas reais do LLM com um exemplo mais elaborado.
***
## Engenharia de Prompt Automática

Neste ponto, você pode perceber que escrever um prompt pode ser complexo. Não seria bom automatizar isso (escrever um prompt para escrever prompts)? Bem, existe um método: Engenharia de Prompt Automática (*Automatic Prompt Engineering* - APE). Este método[^15] não apenas alivia a necessidade de entrada humana, mas também melhora o desempenho do modelo em várias tarefas.

Você solicitará a um modelo que gere mais prompts. Avalie-os, possivelmente altere os bons. E repita.

Por exemplo, você pode usar a engenharia de prompt automática que ajudará no treinamento de um chatbot para uma loja virtual de camisetas de merchandising de bandas. Queremos descobrir todas as várias maneiras como os clientes poderiam formular seu pedido para comprar uma camiseta de merchandising de banda.

1.  Escreva o prompt que gerará as variantes de saída. Neste exemplo, estou usando o gemini-pro para gerar 10 instruções. Veja a Tabela 15:

**Tabela 15. Usar um LLM para gerar prompts**
| | |
| :--- | :--- |
| **Prompt** | Temos uma loja virtual de camisetas de merchandising de bandas e, para treinar um chatbot, precisamos de várias maneiras de fazer o pedido: "Uma camiseta do Metallica tamanho P". Gere 10 variantes, com a mesma semântica, mas mantendo o mesmo significado. |
| **Saída** | 1. Eu gostaria de comprar uma camiseta do Metallica no tamanho pequeno.<br>2. Posso pedir uma camiseta do Metallica de tamanho pequeno?<br>3. Eu gostaria de comprar uma camiseta do Metallica pequena.<br>4. Uma camiseta do Metallica, tamanho pequeno, por favor.<br>5. Eu quero uma camiseta do Metallica no tamanho pequeno.<br>6. Eu gostaria de fazer um pedido de uma camiseta do Metallica pequena.<br>7. Camiseta pequena do Metallica, uma, por favor.<br>8. Estou procurando uma camiseta do Metallica pequena.<br>9. Você pode me arranjar uma camiseta do Metallica pequena?<br>10. Uma camiseta pequena do Metallica, por favor. |

2.  Avalie todos os candidatos a instrução, pontuando-os com base em uma métrica escolhida. Por exemplo, você pode usar BLEU (*Bilingual Evaluation Understudy*) ou ROUGE (*Recall-Oriented Understudy for Gisting Evaluation*).
3.  Selecione o candidato a instrução com a maior pontuação de avaliação. Este candidato será o prompt final que você pode usar em sua aplicação de software ou chatbot. Você também pode ajustar o prompt selecionado e avaliar novamente.
***
## Prompting de Código

O Gemini foca principalmente em prompts baseados em texto, o que também inclui escrever prompts para retornar código. Vamos ao Vertex AI Studio e testar esses prompts para ver alguns exemplos de codificação.

### Prompts para escrever código

O Gemini também pode ser um desenvolvedor e ajudá-lo a escrever código em qualquer linguagem de programação de sua escolha. Como desenvolvedor, isso pode ajudá-lo a acelerar o processo de escrita de código.

Imagine uma pasta em sua máquina com centenas de arquivos que precisam ser renomeados. Renomear cada arquivo levaria muito tempo. Você conhece um pouco de Bash e poderia escrever um script para automatizar isso, mas isso também pode levar um tempo. Então, vamos escrever um prompt. Você pode escrever o prompt no chatbot público do consumidor Gemini, ou se estiver mais preocupado com a confidencialidade, pode escrever esses prompts dentro de sua conta do Google Cloud e abrir o Vertex AI Studio. A vantagem do Vertex AI Studio é que você pode configurar a temperatura, etc.

**Tabela 16. Usando o Gemini para programar código**
| | | | |
| :--- | :--- | :--- | :--- |
| **Nome** | 1_bash_renomear_arquivos_na_pasta | | |
| **Objetivo** | Escrever um prompt para gerar código em Bash para renomear arquivos em uma pasta. | | |
| **Modelo** | gemini-pro | | |
| **Temperatura** | 0.1 | **Limite de Tokens** | 1024 |
| **Top-K** | N/A | **Top-P** | 1 |
| **Prompt** | Escreva um trecho de código em Bash, que pede o nome de uma pasta. Em seguida, ele pega o conteúdo da pasta e renomeia todos os arquivos dentro, prefixando o nome `rascunho` ao nome do arquivo. | | |
| **Saída** | ```bash<br>#!/bin/bash<br><br># Pede o nome da pasta<br>echo "Digite o nome da pasta: "<br>read nome_da_pasta<br><br># Verifica se a pasta existe<br>if [ ! -d "$nome_da_pasta" ]; then<br>  echo "A pasta não existe."<br>  exit 1<br>fi<br><br># Obtém a lista de arquivos na pasta<br>arquivos=( "$nome_da_pasta"/* )<br><br># Renomeia cada arquivo prefixando "rascunho" ao nome do arquivo<br>for arquivo in "${arquivos[@]}"; do<br>  novo_nome_arquivo="rascunho_$(basename "$arquivo")"<br>  mv "$arquivo" "$novo_nome_arquivo"<br>done<br><br>echo "Arquivos renomeados com sucesso."<br>``` | | |

Isso me parece um bom código - está até documentado! No entanto, como os LLMs não podem raciocinar e repetem dados de treinamento, é essencial ler e testar seu código primeiro.

O momento que todos esperávamos, será que realmente funciona?

Vamos testá-lo primeiro com uma pasta de teste com apenas alguns arquivos, que precisarão ser renomeados de `nome_arquivo.txt` para `rascunho_nome_arquivo.txt`.

1.  Copie a saída da Tabela 16 (sem o invólucro de texto

Funcionou!

### Prompts para explicar código

Como desenvolvedor, quando você trabalha em equipe, precisa ler o código de outra pessoa. O Gemini pode ajudá-lo com isso também. Vamos pegar a saída de código da Tabela 16, remover os comentários e pedir ao modelo de linguagem grande para explicar o que está acontecendo. Veja a Tabela 17:

**Tabela 17. Um prompt para explicar código**
| | | | |
| :--- | :--- | :--- | :--- |
| **Nome** | 1_bash_explicar_o_codigo | | |
| **Objetivo** | Escrever um prompt para explicar código Bash | | |
| **Modelo** | gemini-pro | | |
| **Temperatura** | 0.1 | **Limite de Tokens** | 1024 |
| **Top-K** | N/A | **Top-P** | 1 |
| **Prompt** | Explique-me o código Bash abaixo:<br>```<br>#!/bin/bash<br>echo "Digite o nome da pasta: "<br>read nome_da_pasta<br>if [ ! -d "$nome_da_pasta" ]; then<br>  echo "A pasta não existe."<br>  exit 1<br>fi<br>arquivos=( "$nome_da_pasta"/* )<br>for arquivo in "${arquivos[@]}"; do<br>  novo_nome_arquivo="rascunho_$(basename "$arquivo")"<br>  mv "$arquivo" "$novo_nome_arquivo"<br>done<br>echo "Arquivos renomeados com sucesso."<br>``` | | | |
| **Saída** | Este script Bash realiza as seguintes tarefas:<br>1. **Entrada do Usuário**:<br>   - Ele solicita que o usuário digite um nome de pasta usando os comandos `echo` e `read`. O nome da pasta digitado é armazenado na variável `nome_da_pasta`.<br>2. **Verificação de Existência da Pasta**:<br>   - Ele verifica se a pasta com o nome especificado existe usando a condição `[ ! -d "$nome_da_pasta" ]`. Se a pasta não existir, ele exibe uma mensagem de erro ("A pasta não existe.") e sai do script com um código de saída 1.<br>3. **Listagem de Arquivos**:<br>   - Ele lista todos os arquivos dentro da pasta especificada usando o comando `arquivos=("$nome_da_pasta"/*)`. Isso cria um array chamado 'arquivos' contendo os caminhos para todos os arquivos na pasta.<br>4. **Renomeação de Arquivos**:<br>   - Ele itera sobre cada arquivo no array 'arquivos' usando um loop 'for'.<br>   - Para cada arquivo, ele gera um novo nome de arquivo usando o comando `novo_nome_arquivo="rascunho_$(basename "$arquivo")"`. Este novo nome de arquivo é criado prefixando o nome do arquivo original com a string "rascunho_".<br>   - Em seguida, ele renomeia o arquivo usando o comando `mv "$arquivo" "$novo_nome_arquivo"`, que move o arquivo para o novo nome de arquivo.<br>5. **Mensagem de Sucesso**:<br>   - Após renomear todos os arquivos, ele exibe uma mensagem de sucesso (“Arquivos renomeados com sucesso.”) para indicar que a operação de renomeação foi bem-sucedida. | | |

### Prompts para traduzir código

O código bash da Tabela 16 parece funcionar bem. No entanto, este script poderia ser realmente reutilizável se me pedisse os nomes dos arquivos, idealmente deveria funcionar como uma aplicação separada com uma interface de usuário. Como ponto de partida, Python seria uma linguagem melhor para uma aplicação (web) do que Bash. Os LLMs podem ajudar a traduzir código de uma linguagem para outra. Veja o exemplo na Tabela 18:

**Tabela 18. Um prompt para traduzir código de Bash para Python**
| | | | |
| :--- | :--- | :--- | :--- |
| **Nome** | 1_python_renomear_arquivos | | |
| **Objetivo** | Escrever um prompt para traduzir código Bash para Python | | |
| **Modelo** | gemini-pro | | |
| **Temperatura** | 0.1 | **Limite de Tokens** | 1024 |
| **Top-K** | N/A | **Top-P** | 1 |
| **Prompt** | Traduza o código Bash abaixo para um trecho de Python.<br>```bash<br>#!/bin/bash<br>echo "Digite o nome da pasta: "<br>read nome_da_pasta<br>if [ ! -d "$nome_da_pasta" ]; then<br>  echo "A pasta não existe."<br>  exit 1<br>fi<br>arquivos=( "$nome_da_pasta"/* )<br>for arquivo in "${arquivos[@]}"; do<br>  novo_nome_arquivo="rascunho_$(basename "$arquivo")"<br>  mv "$arquivo" "$novo_nome_arquivo"<br>done<br>echo "Arquivos renomeados com sucesso."<br>``` | | | |
| **Saída** | ```python<br>import os<br>import shutil<br><br># Obtém o nome da pasta do usuário<br>nome_da_pasta = input("Digite o nome da pasta: ")<br><br># Verifica se a pasta existe<br>if not os.path.isdir(nome_da_pasta):<br>    print("A pasta não existe.")<br>    exit(1)<br><br># Obtém uma lista de todos os arquivos na pasta<br>arquivos = os.listdir(nome_da_pasta)<br><br># Itera sobre os arquivos<br>for arquivo in arquivos:<br>    # Cria um novo nome de arquivo com o prefixo "rascunho_"<br>    novo_nome_arquivo = f"rascunho_{arquivo}"<br><br>    # Move o arquivo para o novo nome<br>    shutil.move(os.path.join(nome_da_pasta, arquivo),<br>                os.path.join(nome_da_pasta, novo_nome_arquivo))<br><br># Imprime uma mensagem de sucesso<br>print("Arquivos renomeados com sucesso.")<br>``` | | | |

Leia e revise o código. Copie a saída do prompt e cole-a em um novo arquivo: `renomeador_de_arquivos.py`. Teste o código abrindo uma janela de Terminal e execute o seguinte comando `python renomeador_de_arquivos.py`.

**NOTA:** Ao solicitar código (Python) no Language Studio no Vertex AI, você terá que clicar no botão 'Markdown'. Caso contrário, você receberá texto simples que não terá a indentação adequada das linhas, o que é importante para executar código Python.

### Prompts para depurar e revisar código

Vamos escrever manualmente algumas edições no código da Tabela 18. Ele deve solicitar ao usuário o prefixo do nome do arquivo e escrever este prefixo em caracteres maiúsculos. Veja o código de exemplo no Trecho de Código 3, mas que pena. Agora ele retorna erros de Python!

**Trecho de Código 3. Um script Python quebrado**
```python
import os
import shutil

nome_da_pasta = input("Digite o nome da pasta: ")
prefixo = input("Digite a string para prefixar ao nome do arquivo: ")
texto = paraMaiusculas(prefixo)

if not os.path.isdir(nome_da_pasta):
    print("A pasta não existe.")
    exit(1)

arquivos = os.listdir(nome_da_pasta)

for arquivo in arquivos:
    novo_nome_arquivo = f"{texto}_{arquivo}"

shutil.move(os.path.join(nome_da_pasta, arquivo),
            os.path.join(nome_da_pasta, novo_nome_arquivo))

print("Arquivos renomeados com sucesso.")
```

Puxa! Isso parece um bug:

**Trecho de Código 4. Eu quebrei o código Python**
```
O código Python abaixo gera um erro:
Traceback (most recent call last):
  File "/Users/leeboonstra/Documents/test_folder/rename_files.py", line 7,
    in <module>
      texto = paraMaiusculas(prefixo)
NameError: name 'paraMaiusculas' is not defined
```

Vamos ver se podemos pedir ao modelo de linguagem grande para depurar e revisar o código. Dê uma olhada na Tabela 19:

**Tabela 19. Um prompt para depurar e revisar código Python**
| | | | |
| :--- | :--- | :--- | :--- |
| **Nome** | 1_python_debug_code | | |
| **Objetivo** | Escrever um prompt para depurar e revisar código Python. | | |
| **Modelo** | gemini-pro | | |
| **Temperatura** | 0.1 | **Limite de Tokens** | 1024 |
| **Top-K** | N/A | **Top-P** | 1 |
| **Prompt** | O código Python abaixo gera um erro:<br>`Traceback (most recent call last):`<br>`  File "/Users/leeboonstra/Documents/test_folder/rename_files.py", line 7, in <module>`<br>`    texto = paraMaiusculas(prefixo)`<br>`NameError: name 'paraMaiusculas' is not defined`<br><br>Depure o que está errado e explique como posso melhorar o código.<br>```python<br>import os<br>import shutil<br># Obtém o nome da pasta do usuário<br>nome_da_pasta = input("Digite o nome da pasta: ")<br>prefixo = input("Digite a string para prefixar ao nome do arquivo: ")<br>texto = paraMaiusculas(prefixo)<br># Verifica se a pasta existe<br>if not os.path.isdir(nome_da_pasta):<br>    print("A pasta não existe.")<br>    exit(1)<br># Obtém a lista de todos os arquivos na pasta<br>arquivos = os.listdir(nome_da_pasta)<br># Itera sobre os arquivos<br>for arquivo in arquivos:<br>    # Cria um novo nome de arquivo com o prefixo "rascunho_"<br>    novo_nome_arquivo = f"{texto}_{arquivo}"<br>    # Move o arquivo para o novo nome<br>    shutil.move(os.path.join(nome_da_pasta, arquivo),<br>                os.path.join(nome_da_pasta, novo_nome_arquivo))<br># Imprime uma mensagem de sucesso<br>print("Arquivos renomeados com sucesso.")<br>``` | | | |
| **Saída** | O código chama a função `paraMaiusculas` para converter `prefixo` para maiúsculas, mas essa função não está definida. Para corrigir esse problema, você pode usar o método `upper()` da classe string, que converte uma determinada string em maiúsculas. O código modificado é mostrado abaixo:<br>```python<br>import os<br>import shutil<br># Obtém o nome da pasta do usuário<br>nome_da_pasta = input("Digite o nome da pasta: ")<br>prefixo = input("Digite a string para prefixar ao nome do arquivo: ")<br>texto = prefixo.upper()<br># Verifica se a pasta existe<br>if not os.path.isdir(nome_da_pasta):<br>    print("A pasta não existe.")<br>    exit(1)<br># Obtém a lista de todos os arquivos na pasta<br>arquivos = os.listdir(nome_da_pasta)<br># Itera sobre os arquivos<br>for arquivo in arquivos:<br>    # Cria um novo nome de arquivo com o prefixo "rascunho_"<br>    novo_nome_arquivo = f"{texto}_{arquivo}"<br>    # Move o arquivo para o novo nome<br>    shutil.move(os.path.join(nome_da_pasta, arquivo),<br>                os.path.join(nome_da_pasta, novo_nome_arquivo))<br># Imprime uma mensagem de sucesso<br>print("Arquivos renomeados com sucesso.")<br>```<br>Além disso, existem algumas outras melhorias que podem ser feitas no código:<br>1. A extensão do arquivo dos novos nomes de arquivo não é mantida. É melhor extrair a extensão do nome do arquivo original e anexá-la ao novo nome de arquivo.<br>2. O código assume que não há espaços no nome da pasta. No entanto, é uma boa prática lidar com espaços de forma elegante, substituindo-os por sublinhados ou hifens.<br>3. Usar a sintaxe de f-string para interpolação de strings é mais legível e concisa do que o operador `+` tradicional.<br>4. O código não lida com erros que podem ocorrer durante o processo de renomeação. Seria melhor envolver a chamada `shutil.move` em um bloco 'try...except` para capturar quaisquer erros potenciais.<br><br>Aqui está o código aprimorado com essas sugestões:<br>```python<br>import os<br>import shutil<br># Obtém o nome da pasta do usuário<br>nome_da_pasta = input("Digite o nome da pasta: ")<br>prefixo = input("Digite a string para prefixar ao nome do arquivo: ")<br># Verifica se a pasta existe<br>if not os.path.isdir(nome_da_pasta):<br>    print("A pasta não existe.")<br>    exit(1)<br># Obtém a lista de todos os arquivos na pasta<br>arquivos = os.listdir(nome_da_pasta)<br># Itera sobre os arquivos<br>for arquivo in arquivos:<br>    # Obtém a extensão do arquivo<br>    ext = os.path.splitext(arquivo)[1]<br>    # Cria um novo nome de arquivo com o prefixo e a extensão do arquivo<br>    novo_nome_arquivo = f"{prefixo}_{os.path.splitext(arquivo)[0]}{ext}"<br>    # Constrói os caminhos completos para os arquivos original e novo<br>    caminho_antigo = os.path.join(nome_da_pasta, arquivo)<br>    caminho_novo = os.path.join(nome_da_pasta, novo_nome_arquivo)<br>    # Tenta mover o arquivo<br>    try:<br>        shutil.move(caminho_antigo, caminho_novo)<br>    except Exception as e:<br>        print(f"Ocorreu um erro ao mover o arquivo {arquivo}: {e}")<br># Imprime uma mensagem de sucesso<br>print("Arquivos renomeados com sucesso.")<br>```<br>Essas melhorias tornam o código mais robusto e flexível, além de facilitar a leitura e o entendimento... (A resposta foi truncada porque atingiu o limite de tokens. Tente aumentar o limite de tokens se precisar de uma resposta mais longa.) | | | |

Isso é ótimo. Não só me disse como resolver o problema, como também descobriu que meu código tinha mais bugs e como resolvê-los também. A última parte do prompt deu sugestões para melhorar o código em geral.
***
## E o prompting multimodal?

O prompting para código ainda usa o mesmo modelo de linguagem grande regular. O prompting multimodal é uma preocupação separada, refere-se a uma técnica onde você usa múltiplos formatos de entrada para guiar um modelo de linguagem grande, em vez de depender apenas de texto. Isso pode incluir combinações de texto, imagens, áudio, código ou até outros formatos, dependendo das capacidades do modelo e da tarefa em questão.

## Melhores Práticas

Encontrar o prompt certo requer experimentação. O Language Studio no Vertex AI é um lugar perfeito para brincar com seus prompts, com a capacidade de testar contra os vários modelos.

Use as seguintes melhores práticas para se tornar um profissional em engenharia de prompt.

### Forneça exemplos

A melhor prática mais importante é fornecer exemplos (*one-shot* / *few-shot*) dentro de um prompt. Isso é altamente eficaz porque atua como uma poderosa ferramenta de ensino. Esses exemplos mostram saídas desejadas ou respostas semelhantes, permitindo que o modelo aprenda com eles e adapte sua própria geração de acordo. É como dar ao modelo um ponto de referência ou um alvo para mirar, melhorando a precisão, o estilo e o tom de sua resposta para corresponder melhor às suas expectativas.

### Crie com simplicidade

Os prompts devem ser concisos, claros e fáceis de entender tanto para você quanto para o modelo. Como regra geral, se já está confuso para você, provavelmente também será confuso para o modelo. Tente não usar linguagem complexa e não forneça informações desnecessárias.

Exemplos:

> **ANTES:**
>
> Estou visitando Nova York agora e gostaria de saber mais sobre ótimos lugares. Estou com duas crianças de 3 anos. Onde devemos ir durante nossas férias?

> **DEPOIS DA REESCRITA:**
>
> Aja como um guia de viagens para turistas. Descreva ótimos lugares para visitar em Manhattan, Nova York, com uma criança de 3 anos.

Tente usar verbos que descrevam a ação. Aqui está um conjunto de exemplos:

Agir, Analisar, Categorizar, Classificar, Contrastar, Comparar, Criar, Descrever, Definir, Avaliar, Extrair, Encontrar, Gerar, Identificar, Listar, Medir, Organizar, Analisar (Parse), Escolher, Prever, Fornecer, Classificar (Rank), Recomendar, Retornar, Recuperar, Reescrever, Selecionar, Mostrar, Ordenar, Resumir, Traduzir, Escrever.

### Seja específico sobre a saída

Seja específico sobre a saída desejada. Uma instrução concisa pode não guiar o LLM o suficiente ou pode ser muito genérica. Fornecer detalhes específicos no prompt (através de prompting de sistema ou contextual) pode ajudar o modelo a focar no que é relevante, melhorando a precisão geral.

Exemplos:

> **FAÇA:**
>
> Gere uma postagem de blog de 3 parágrafos sobre os 5 melhores consoles de videogame. A postagem do blog deve ser informativa e envolvente, e deve ser escrita em um estilo conversacional.

> **NÃO FAÇA:**
>
> Gere uma postagem de blog sobre consoles de videogame.

### Use Instruções em vez de Restrições

Instruções e restrições são usadas no prompting para guiar a saída de um LLM.

*   Uma **instrução** fornece instruções explícitas sobre o formato, estilo ou conteúdo desejado da resposta. Ela guia o modelo sobre o que ele deve fazer ou produzir.
*   Uma **restrição** é um conjunto de limitações ou fronteiras na resposta. Ela limita o que o modelo não deve fazer ou evitar.

Pesquisas crescentes sugerem que focar em instruções positivas no prompting pode ser mais eficaz do que depender muito de restrições. Essa abordagem se alinha com a forma como os humanos preferem instruções positivas em vez de listas do que não fazer.

As instruções comunicam diretamente o resultado desejado, enquanto as restrições podem deixar o modelo adivinhando o que é permitido. Isso dá flexibilidade e incentiva a criatividade dentro dos limites definidos, enquanto as restrições podem limitar o potencial do modelo. Além disso, uma lista de restrições pode entrar em conflito entre si.

As restrições ainda são valiosas, mas em certas situações. Para evitar que o modelo gere conteúdo prejudicial ou tendencioso ou quando um formato ou estilo de saída estrito é necessário.

Se possível, use instruções positivas: em vez de dizer ao modelo o que não fazer, diga a ele o que fazer. Isso pode evitar confusão e melhorar a precisão da saída.

> **FAÇA:**
>
> Gere uma postagem de blog de 1 parágrafo sobre os 5 melhores consoles de videogame. Discuta apenas o console, a empresa que o fabricou, o ano e as vendas totais.

> **NÃO FAÇA:**
>
> Gere uma postagem de blog de 1 parágrafo sobre os 5 melhores consoles de videogame. Não liste nomes de videogames.

Como melhor prática, comece priorizando as instruções, declarando claramente o que você quer que o modelo faça e use restrições apenas quando necessário para segurança, clareza ou requisitos específicos. Experimente e itere para testar diferentes combinações de instruções e restrições para encontrar o que funciona melhor para suas tarefas específicas, e documente-as.

### Controle o comprimento máximo do token

Para controlar o comprimento de uma resposta gerada pelo LLM, você pode definir um limite máximo de tokens na configuração ou solicitar explicitamente um comprimento específico em seu prompt. Por exemplo:

`"Explique física quântica em uma mensagem do tamanho de um tweet."`

### Use variáveis em prompts

Para reutilizar prompts e torná-los mais dinâmicos, use variáveis no prompt, que podem ser alteradas para diferentes entradas. Por exemplo, como mostrado na Tabela 20, um prompt que fornece fatos sobre uma cidade. Em vez de codificar o nome da cidade no prompt, use uma variável. As variáveis podem economizar tempo e esforço, permitindo que você evite se repetir. Se você precisar usar a mesma informação em múltiplos prompts, pode armazená-la em uma variável e, em seguida, referenciar essa variável em cada prompt. Isso faz muito sentido ao integrar prompts em suas próprias aplicações.

**Tabela 20. Usando variáveis em prompts**
| | |
| :--- | :--- |
| **Prompt** | VARIÁVEIS<br>{cidade} = "Amsterdã"<br><br>PROMPT<br>Você é um guia de viagens. Diga-me um fato sobre a cidade: {cidade} |
| **Saída** | Amsterdã é uma bela cidade cheia de canais, pontes e ruas estreitas. É um ótimo lugar para visitar por sua rica história, cultura e vida noturna. |

### Combine e Itere sobre Prompts

Para análises específicas, uma técnica poderosa é combinar diferentes abordagens de prompt. Comece com um "núcleo" de prompt que define a tarefa principal e, em seguida, adicione ou remova frases para refinar o pedido. Por exemplo, você pode adicionar "Liste os resultados em ordem cronológica" ou "Seja conciso na sua resposta".

Quando a estrutura da resposta é crucial, considere usar formatos como XML. Isso ajuda o modelo a entender a organização dos dados e a gerar saídas mais consistentes, especialmente para tarefas complexas de extração ou classificação.

```xml
<analise_sentimento>
  <texto>O filme foi incrível, superou minhas expectativas!</texto>
  <instrucao>Classifique o sentimento como POSITIVO, NEGATIVO ou NEUTRO.</instrucao>
</analise_sentimento>
```

### Experimente com formatos de entrada e estilos de escrita

Diferentes modelos, configurações de modelo, formatos de prompt, escolhas de palavras e envios podem produzir resultados diferentes. Portanto, é importante experimentar com atributos do prompt como o estilo, a escolha de palavras e o tipo de prompt (zero-shot, few-shot, prompt de sistema).

Por exemplo, um prompt com o objetivo de gerar texto sobre o revolucionário console de videogame Sega Dreamcast pode ser formulado como uma pergunta, uma declaração ou uma instrução, resultando em diferentes saídas:

*   **Pergunta:** O que foi o Sega Dreamcast e por que ele foi um console tão revolucionário?
*   **Declaração:** O Sega Dreamcast foi um console de videogame de sexta geração lançado pela Sega em 1999. Ele...
*   **Instrução:** Escreva um único parágrafo que descreva o console Sega Dreamcast e explique por que ele foi tão revolucionário.

### Para prompting few-shot com tarefas de classificação, misture as classes

De modo geral, a ordem dos seus exemplos *few-shot* não deve importar muito. No entanto, ao fazer tarefas de classificação, certifique-se de misturar as possíveis classes de resposta nos exemplos *few-shot*. Isso ocorre porque, caso contrário, você pode estar superajustando (*overfitting*) à ordem específica dos exemplos. Ao misturar as possíveis classes de resposta, você pode garantir que o modelo está aprendendo a identificar as características-chave de cada classe, em vez de simplesmente memorizar a ordem dos exemplos. Isso levará a um desempenho mais robusto e generalizável em dados não vistos.

Uma boa regra geral é começar com 6 exemplos *few-shot* e começar a testar a precisão a partir daí.

### Adapte-se às atualizações do modelo

É importante que você se mantenha atualizado sobre as mudanças na arquitetura do modelo, dados adicionados e capacidades. Experimente versões mais recentes do modelo e ajuste seus prompts para aproveitar melhor os novos recursos. Ferramentas como o Vertex AI Studio são ótimas para armazenar, testar e documentar as várias versões do seu prompt.

### Experimente com formatos de saída

Além do formato de entrada do prompt, considere experimentar o formato de saída. Para tarefas não criativas como extrair, selecionar, analisar (*parsing*), ordenar, classificar (*ranking*) ou categorizar dados, tente fazer com que sua saída seja retornada em um formato estruturado como JSON ou XML.

Existem alguns benefícios em retornar objetos JSON de um prompt que extrai dados. Em uma aplicação do mundo real, não preciso criar manualmente este formato JSON, já posso retornar os dados em uma ordem classificada (muito útil ao trabalhar com objetos de data e hora), mas o mais importante, ao solicitar um formato JSON, ele força o modelo a criar uma estrutura e limita as alucinações.

Em resumo, os benefícios de usar JSON para sua saída:

*   Retorna sempre no mesmo estilo
*   Foca nos dados que você deseja receber
*   Menor chance de alucinações
*   Torna-o ciente de relacionamentos
*   Você obtém tipos de dados
*   Você pode ordená-lo

A Tabela 4 na seção de prompting de sistema mostra um exemplo de como retornar uma saída estruturada.

### Reparo de JSON

Embora retornar dados em formato JSON ofereça inúmeras vantagens, não é isento de desvantagens. A natureza estruturada do JSON, embora benéfica para análise e uso em aplicações, requer significativamente mais tokens do que texto simples, levando a um aumento no tempo de processamento e custos mais altos. Além disso, a verbosidade do JSON pode consumir facilmente toda a janela de saída, tornando-se especialmente problemática quando a geração é abruptamente cortada devido a limites de tokens. Essa truncagem muitas vezes resulta em JSON inválido, faltando chaves ou colchetes de fechamento cruciais, tornando a saída inutilizável. Felizmente, ferramentas como a biblioteca `json-repair` (disponível no PyPI) podem ser inestimáveis nessas situações. Esta biblioteca tenta inteligentemente corrigir automaticamente objetos JSON incompletos ou malformados, tornando-se um aliado crucial ao trabalhar com JSON gerado por LLM, especialmente ao lidar com possíveis problemas de truncagem.

### Trabalhando com Schemas

Usar JSON estruturado como saída é uma ótima solução, como vimos várias vezes neste artigo. Mas e a entrada? Embora o JSON seja excelente para estruturar a saída que o LLM gera, ele também pode ser incrivelmente útil para estruturar a entrada que você fornece. É aqui que os Schemas JSON entram em jogo. Um Schema JSON define a estrutura e os tipos de dados esperados da sua entrada JSON. Ao fornecer um schema, você dá ao LLM um plano claro dos dados que ele deve esperar, ajudando-o a focar sua atenção nas informações relevantes e reduzindo o risco de interpretar mal a entrada. Além disso, os schemas podem ajudar a estabelecer relacionamentos entre diferentes partes dos dados e até mesmo tornar o LLM "consciente do tempo", incluindo campos de data ou carimbo de data/hora com formatos específicos.

Aqui está um exemplo simples:

Digamos que você queira usar um LLM para gerar descrições de produtos em um catálogo de e-commerce. Em vez de apenas fornecer uma descrição de texto de forma livre do produto, você pode usar um schema JSON para definir os atributos do produto:

**Trecho de Código 5. Definição do schema de saída estruturada**
```json
{
  "type": "object",
  "properties": {
    "name": { "type": "string", "description": "Nome do produto" },
    "category": { "type": "string", "description": "Categoria do produto" },
    "price": { "type": "number", "format": "float", "description": "Preço do produto" },
    "features": {
      "type": "array",
      "items": { "type": "string" },
      "description": "Principais características do produto"
    },
    "release_date": { "type": "string", "format": "date", "description": "Data de lançamento do produto" }
  }
}
```

Então, você pode fornecer os dados reais do produto como um objeto JSON que se conforma a este schema:

**Trecho de Código 6. Saída estruturada do LLM**
```json
{
  "name": "Fones de Ouvido Sem Fio",
  "category": "Eletrônicos",
  "price": 99.99,
  "features": ["Cancelamento de ruído", "Bluetooth 5.0", "Bateria de 20 horas"],
  "release_date": "2023-10-27"
}
```

Ao pré-processar seus dados e, em vez de fornecer documentos completos, fornecer apenas o schema e os dados, você dá ao LLM uma compreensão clara dos atributos do produto, incluindo sua data de lançamento, tornando muito mais provável que ele gere uma descrição precisa e relevante. Essa abordagem de entrada estruturada, guiando a atenção do LLM para os campos relevantes, é especialmente valiosa ao trabalhar com grandes volumes de dados ou ao integrar LLMs em aplicações complexas.

### Experimente junto com outros engenheiros de prompt

Se você está em uma situação em que precisa criar um bom prompt, pode querer encontrar várias pessoas para fazer uma tentativa. Quando todos seguem as melhores práticas (conforme listado neste capítulo), você verá uma variação no desempenho entre todas as diferentes tentativas de prompt.

### Melhores práticas de CoT

Para o prompting CoT, colocar a resposta após o raciocínio é necessário porque a geração do raciocínio muda os tokens que o modelo obtém quando prevê a resposta final.

Com CoT e autoconsistência, você precisa ser capaz de extrair a resposta final do seu prompt, separada do raciocínio.

Para o prompting CoT, defina a temperatura como 0.

O prompting de cadeia de pensamento é baseado na decodificação gulosa, prevendo a próxima palavra em uma sequência com base na maior probabilidade atribuída pelo modelo de linguagem. De modo geral, ao usar o raciocínio para chegar à resposta final, provavelmente haverá uma única resposta correta. Portanto, a temperatura deve sempre ser definida como 0.

### Documente as várias tentativas de prompt

A última dica foi mencionada antes neste capítulo, mas não podemos enfatizar o suficiente o quão importante é: documente suas tentativas de prompt em todos os detalhes para que você possa aprender ao longo do tempo o que deu certo e o que não deu.

As saídas dos prompts podem diferir entre modelos, entre configurações de amostragem e até mesmo entre diferentes versões do mesmo modelo. Além disso, mesmo em prompts idênticos para o mesmo modelo, pequenas diferenças na formatação da frase de saída e na escolha de palavras podem ocorrer. (Por exemplo, como mencionado anteriormente, se dois tokens tiverem a mesma probabilidade prevista, os empates podem ser quebrados aleatoriamente. Isso pode então impactar os tokens previstos subsequentemente.).

Recomendamos criar uma Planilha Google com a Tabela 21 como modelo. As vantagens dessa abordagem são que você tem um registro completo quando inevitavelmente tiver que revisitar seu trabalho de prompting - seja para retomá-lo no futuro (você ficaria surpreso com o quanto pode esquecer após uma pequena pausa), para testar o desempenho do prompt em diferentes versões de um modelo, e para ajudar a depurar erros futuros.

Além dos campos nesta tabela, também é útil rastrear a versão do prompt (iteração), um campo para capturar se o resultado foi OK/NÃO OK/ÀS VEZES OK, e um campo para capturar feedback. Se você tiver a sorte de estar usando o Vertex AI Studio, salve seus prompts (usando o mesmo nome e versão listados em sua documentação) e rastreie o hiperlink para o prompt salvo na tabela. Dessa forma, você está sempre a um clique de distância de executar novamente seus prompts.

Ao trabalhar em um sistema de geração aumentada por recuperação (*retrieval augmented generation* - RAG), você também deve capturar os aspectos específicos do sistema RAG que impactam qual conteúdo foi inserido no prompt, incluindo a consulta, as configurações de chunk, a saída do chunk e outras informações.

Quando sentir que o prompt está quase perfeito, leve-o para a base de código do seu projeto. E na base de código, salve os prompts em um arquivo separado do código, para que seja mais fácil de manter. Finalmente, idealmente, seus prompts fazem parte de um sistema operacionalizado, e como engenheiro de prompt, você deve confiar em testes automatizados e procedimentos de avaliação para entender quão bem seu prompt se generaliza para uma tarefa.

A engenharia de prompt é um processo iterativo. Crie e teste diferentes prompts, analise e documente os resultados. Refine seu prompt com base no desempenho do modelo. Continue experimentando até alcançar a saída desejada. Quando você muda um modelo ou a configuração do modelo, volte e continue experimentando com os prompts usados anteriormente.

**Tabela 21. Um modelo para documentar prompts**
| | | | |
| :--- | :--- | :--- | :--- |
| **Nome** | [nome e versão do seu prompt] | | |
| **Objetivo** | [Explicação de uma frase do objetivo desta tentativa] | | |
| **Modelo** | [nome e versão do modelo usado] | | |
| **Temperatura** | [valor entre 0 - 1] | **Limite de Tokens** | [número] |
| **Top-K** | [número] | **Top-P** | [número] |
| **Prompt** | [Escreva todo o prompt completo] | | |
| **Saída** | [Escreva a saída ou múltiplas saídas] | | |
***
## Resumo

Este documento técnico discute a engenharia de prompt. Aprendemos várias técnicas de prompting, como:

*   Prompting zero-shot
*   Prompting few-shot
*   Prompting de sistema
*   Prompting de papel
*   Prompting contextual
*   Prompting step-back
*   Cadeia de pensamento
*   Autoconsistência
*   Árvore de pensamentos
*   ReAct

Até vimos maneiras de automatizar seus prompts.

O documento técnico então discute os desafios da IA generativa, como os problemas que podem acontecer quando seus prompts são insuficientes. Encerramos com as melhores práticas sobre como se tornar um engenheiro de prompt melhor.
***
## Notas Finais

[^1]: Google, 2023, Gemini by Google. Disponível em: https://gemini.google.com.
[^2]: Google, 2024, Gemini for Google Workspace Prompt Guide. Disponível em: https://inthecloud.withgoogle.com/gemini-for-google-workspace-prompt-guide/dl-cd.html.
[^3]: Google Cloud, 2023, Introduction to Prompting. Disponível em: https://cloud.google.com/vertex-ai/generative-ai/docs/learn/prompts/introduction-prompt-design.
[^4]: Google Cloud, 2023, Text Model Request Body: Top-P & top-K sampling methods. Disponível em: https://cloud.google.com/vertex-ai/docs/generative-ai/model-reference/text#request_body.
[^5]: Wei, J., et al., 2023, Zero Shot - Fine Tuned language models are zero shot learners. Disponível em: https://arxiv.org/pdf/2109.01652.pdf.
[^6]: Google Cloud, 2023, Google Cloud Model Garden. Disponível em: https://cloud.google.com/model-garden.
[^7]: Brown, T., et al., 2023, Few Shot - Language Models are Few Shot learners. Disponível em: https://arxiv.org/pdf/2005.14165.pdf.
[^8]: Zheng, L., et al., 2023, Take a Step Back: Evoking Reasoning via Abstraction in Large Language Models. Disponível em: https://openreview.net/pdf?id=3bq3jsvcQ1
[^9]: Wei, J., et al., 2023, Chain of Thought Prompting. Disponível em: https://arxiv.org/pdf/2201.11903.pdf.
[^10]: Google Cloud Platform, 2023, Chain of Thought and React. Disponível em: https://github.com/GoogleCloudPlatform/generative-ai/blob/main/language/prompts/examples/chain_of_thought_react.ipynb.
[^11]: Wang, X., et al., 2023, Self Consistency Improves Chain of Thought reasoning in language models. Disponível em: https://arxiv.org/pdf/2203.11171.pdf.
[^12]: Yao, S., et al., 2023, Tree of Thoughts: Deliberate Problem Solving with Large Language Models. Disponível em: https://arxiv.org/pdf/2305.10601.pdf.
[^13]: Yao, S., et al., 2023, ReAct: Synergizing Reasoning and Acting in Language Models. Disponível em: https://arxiv.org/pdf/2210.03629.pdf.
[^14]: Google Cloud Platform, 2023, Advance Prompting: Chain of Thought and React. Disponível em: https://github.com/GoogleCloudPlatform/applied-ai-engineering-samples/blob/main/genai-on-vertex-ai/advanced_prompting_training/cot_react.ipynb.
[^15]: Zhou, C., et al., 2023, Automatic Prompt Engineering - Large Language Models are Human-Level Prompt Engineers. Disponível em: https://arxiv.org/pdf/2211.01910.pdf.
