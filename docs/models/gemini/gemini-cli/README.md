# Gemini CLI - Instalação e Prompts

Este arquivo contém instruções sobre como instalar um MCP (Model Context Protocol) no Gemini CLI para Macbook e uma coleção de prompts otimizados para o CLI.

## Instalação de um MCP no Gemini CLI para Macbook

"MCP" significa Model Context Protocol, que permite estender as capacidades do Gemini CLI conectando-o a ferramentas e serviços externos. Você não instala o MCP diretamente, mas configura "servidores MCP" que fornecem funcionalidades específicas.

### Passo 1: Instalar o Gemini CLI

Primeiro, você precisa instalar o Gemini CLI. Abra seu terminal e execute o seguinte comando:

```bash
brew install gemini-cli
```

Após a conclusão da instalação, execute o seguinte comando para iniciar o Gemini CLI:

```bash
gemini
```

Isso iniciará o Gemini CLI interativo. Na primeira execução, você será guiado por um processo de configuração, que inclui a escolha de um tema e a autenticação com sua conta do Google.

### Passo 2: Configurar um Servidor MCP

Para usar o MCP, você precisa configurar um servidor MCP. Como exemplo, vamos configurar o servidor MCP "Filesystem", que permite que o Gemini interaja com seus arquivos locais.

1.  **Crie o diretório de configurações:**

    ```bash
    mkdir -p ~/.gemini
    ```

2.  **Crie o arquivo de configurações:**

    ```bash
    touch ~/.gemini/settings.json
    ```

3.  **Adicione a configuração do servidor MCP ao arquivo de configurações.** Você pode usar um editor de texto para abrir `~/.gemini/settings.json` e adicionar o seguinte conteúdo. **Importante:** Certifique-se de substituir `"/path/to/your/project"` pelo caminho real para o diretório ao qual você deseja que o Gemini tenha acesso.

    ```json
    {
      "mcpServers": {
        "filesystem": {
          "command": "npx",
          "args": [
            "https://github.com/google-gemini/mcp-filesystem"
          ],
          "env": {
            "FILESYSTEM_MCP_ROOT": "/path/to/your/project"
          }
        }
      }
    }
    ```

### Passo 3: Reinicie o Gemini CLI

Saia da sua sessão atual do Gemini CLI (você pode digitar `/quit`) e inicie-o novamente:

```bash
gemini
```

Agora, seu Gemini CLI está configurado para usar o servidor MCP Filesystem. Você pode testá-lo pedindo ao Gemini para realizar operações de arquivo. Por exemplo:

```
/mcp list
```

Isso deve mostrar o servidor MCP "filesystem" como disponível. Você pode então tentar um comando como:

```
crie um novo diretório chamado meu-projeto-de-teste
```

O Gemini deve então usar o MCP Filesystem para criar o diretório no caminho que você especificou nas configurações.

## Prompts para o Gemini CLI

### Gerenciamento de Arquivos
```
liste todos os arquivos no diretório atual

leia o conteúdo do arquivo `README.md`

crie um novo arquivo chamado `meu-arquivo.txt` com o seguinte conteúdo: "Olá, Gemini!"
```

### Comandos do Git
```
verifique o status do git

crie um novo branch chamado `feature/nova-funcionalidade`

adicione todos os arquivos modificados e faça um commit com a mensagem "feat: implementa nova funcionalidade"
```

### Comandos de Shell
```
execute o comando `ls -la` e me mostre a saída

instale a biblioteca `requests` usando pip
```

## Melhores Usos

- **Automação de tarefas:** O Gemini CLI é ideal para automatizar tarefas repetitivas, como criar novos projetos, gerenciar arquivos e executar comandos de shell.
- **Interação com o sistema de arquivos:** O MCP Filesystem permite que o Gemini leia, escreva e modifique arquivos em seu sistema local, tornando-o uma ferramenta poderosa para desenvolvimento de software.
- **Execução de comandos:** Você pode usar o Gemini CLI para executar qualquer comando de shell, o que o torna uma interface de linha de comando versátil e poderosa.
