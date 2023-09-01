# Desafio Angular
### Desenvolvimento de Páginas de Consulta e Exibição de Dados de Cooperados Ailos

Este repositório contém o código-fonte para o desafio de desenvolvimento de duas páginas web. A primeira página apresenta um formulário de consulta de CPF, com a capacidade de processar dois cenários distintos: o cenário de insucesso, onde o CPF inserido não é válido, resultando em uma mensagem de erro exibida na tela, e o cenário de sucesso, onde o CPF é válido e o usuário é redirecionado para a segunda página.

## Funcionalidades

### Página 1 - Consulta de CPF

Um formulário simples permite aos usuários inserir um CPF.
A consulta do CPF pode resultar em dois cenários:
Cenário de Insucesso: Quando o CPF inserido não é válido, uma mensagem de erro é exibida na tela para informar o usuário.
Cenário Feliz: Quando o CPF é localizado com sucesso, o usuário é automaticamente direcionado para a "Tela Dois".

### Página 2 - Dados do Cooperado

Após inserir um CPF válido no formulário da "Página 1" e ser redirecionado para a "Tela Dois", esta página carrega os dados do cooperado associados ao CPF.
A interface da "Tela Dois" segue o modelo de design especificado.

## Como iniciar o projeto

Para iniciar o projeto localmente, siga estas etapas:

### 1. Clone este repositório para sua máquina local usando o seguinte comando:
`git clone https://github.com/danisluz/ailos.git`

### 2. Navegue para o diretório do projeto:
`cd ailos-daniel-luz`

### 3. Execute o projeto usando um servidor local ou a ferramenta de desenvolvimento fornecida pelo framework de sua escolha.

### 4. Acesse o aplicativo em seu navegador da web

## Testes
### Inicie o aplicativo:
Siga as etapas para iniciar o projeto localmente, conforme mencionado nas instruções.

Acesse a "Página 1": Abra o aplicativo no seu navegador e acesse a "Página 1", onde você insere o CPF. Insira os CPFs que deseja testar.

### CPF Válido:
Insira um CPF válido (com 11 dígitos) e observe se o aplicativo redireciona você para a "Tela Dois". Isso indica que o CPF é válido e foi localizado com sucesso.

CPFs cadastrados: 
`53603215710`
`26186605361`
`64364525162`
`55037879949`

## CPF com 2 Contas Bancárias:
Para determinar quais CPFs têm duas contas bancárias, você precisará examinar os dados carregados na "Tela Dois" após inserir um CPF válido. O aplicativo deve exibir informações sobre as contas bancárias associadas ao CPF. Se o CPF tiver duas contas bancárias, essas informações devem ser visíveis na "Tela Dois".

CPFs cadastrados com 2 contas: 
`53603215710`
`55037879949`

### Situação do CPF (Normal/Irregular):
A situação do CPF (se está normal ou irregular) também deve ser visível na "Tela Dois". Essas informações geralmente são fornecidas pelo serviço de consulta de CPF.

CPFs com situação irregular: 
`53603215710`
`55037879949`

CPFs com situação reggular: 
`26186605361`
`64364525162`