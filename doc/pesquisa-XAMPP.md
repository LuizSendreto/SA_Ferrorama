# O que é XAMPP?
O XAMPP é um pacote com os principais servidores de código aberto do mercado, incluindo FTP, banco de dados MySQL e Apache com suporte as linguagens PHP e Perl. Com ele, é possível rodar sistemas como WordPress e Drupal localmente, o que facilita e agiliza o desenvolvimento. Como o conteúdo estará armazenado numa rede local, o acesso aos arquivos é realizado instantaneamente. O pacote de servidores é baixado cerca de 600 mil vezes por mês, de acordo com dados do SourceForge.


### Principais componentes 
Principais Componentes do XAMPP
O XAMPP, como um bom pacote de software (e, claro, completo), conta com componentes essenciais para o desenvolvimento web. Cada um deles desempenha um papel insubstituível na criação, teste e gerenciamento de aplicações web. 
Abaixo, seguem os principais componentes do XAMPP:

- **Apache: servidor HTTP**
O Apache é o servidor HTTP incluso no XAMPP, responsável por servir páginas web aos navegadores. Ele interpreta e executa arquivos HTML, PHP e outros, respondendo às requisições dos usuários.

- **MySQL/MariaDB: banco de dados**
O XAMPP conta também com o MySQL ou MariaDB como sistema de gerenciamento de banco de dados. Eles armazenam e organizam dados de aplicações web, gerando diferentes operações – como consultas, inserções e atualizações de dados.

- **PHP: linguagem de programação**
O PHP é uma linguagem de programação com foco no desenvolvimento web. No XAMPP, ela é usada para criar scripts dinâmicos que interagem com bancos de dados e geram um conteúdo dinâmico para páginas web.

- **Perl: linguagem de script**
Perl é uma linguagem de script poderosa e versátil e, dentro do XAMPP, usado para automação de tarefas, manipulação de textos e desenvolvimento de aplicações web.

### Passo a passo para instalação e configuração
 **O processo de instalação do XAMPP no Windows é bastante simples**

 - Primeiramente, acesse o site oficial do XAMPP e faça o download da versão compatível com seu sistema operacional. Após o download, execute o arquivo de instalação. Durante a instalação, você poderá selecionar os componentes que deseja instalar, como o Apache, MySQL, PHP, entre outros.
 
 - Aconselhamos deixar as opções padrão, a menos que haja necessidade de personalização. Após a instalação, abra o painel de controle do XAMPP e inicie os serviços desejados, como o Apache e o MySQL, para começar a usá-lo.

 **Configurando o XAMPP após a instalação**

Depois que você instalou o XAMPP, é importante configurar os serviços para garantir que funcionem corretamente. A primeira etapa é verificar se o Apache e o MySQL estão sendo executados corretamente.

- Como iniciar e parar o Servidor Apache
Sendo algo muito fácil, iniciar e parar o servidor Apache no XAMPP é uma tarefa feita diretamente pelo painel de controle da ferramenta. Basta clicar no botão “Iniciar” ao lado do Apache para iniciar o serviço, e no botão “Parar” para pará-lo. 

O painel também exibirá o status do Apache em tempo real, facilitando o gerenciamento do servidor web. É importante lembrar que o Apache é responsável por servir suas páginas da web localmente, então sempre que você estiver desenvolvendo um site, este serviço deve estar em execução.

- Configuração do MySQL (MariaDB)
Já o MySQL, conhecido como MariaDB no XAMPP, é o banco de dados utilizado para armazenar e gerenciar dados de seus projetos. Para configurá-lo, inicie o MySQL pelo painel de controle e acesse o phpMyAdmin, que pode ser aberto diretamente no navegador através do endereço “localhost/phpmyadmin”. 

No phpMyAdmin, você pode criar e gerenciar bancos de dados, tabelas, usuários e permissões. Esta ferramenta facilita o gerenciamento de bancos de dados de maneira visual, sem a necessidade de utilizar comandos SQL diretamente.

- Alterando a porta padrão do Apache
E em alguns casos, a porta padrão do Apache, que é a porta 80, pode ser utilizada por outro serviço no seu sistema, como o Skype ou outro servidor. Para resolver esse conflito, você pode alterar a porta padrão do Apache. 

No painel de controle do XAMPP, clique em “Config” ao lado do Apache e selecione o arquivo “httpd.conf”. Dentro desse arquivo, procure a linha “Listen 80” e altere o valor 80 para outra porta, como 8080. 

Depois de salvar o arquivo, reinicie o Apache para que as alterações tenham efeito. Agora, para acessar seu servidor local, você deverá incluir uma nova porta no endereço, como “localhost:8080”.

### Update (Atualizar)
“Update” refere-se à atualização de dados existentes. Esta função é crucial para manter a relevância e a precisão das informações em um banco de dados. Um exemplo clássico seria a atualização de um perfil de usuário em uma rede social, onde as informações pessoais são modificadas.

### Delete (Apagar)
Esta função é usada para remover dados de um sistema. Ela deve ser manuseada com cuidado, pois uma vez que os dados são apagados, podem não ser recuperáveis. Um exemplo seria a exclusão de uma conta de usuário, que remove permanentemente os dados do usuário do sistema.

Essas quatro ações formam o cerne da maioria dos softwares de banco de dados, permitindo aos usuários criar registros novos, ler ou recuperar dados existentes, atualizar informações previamente armazenadas e, finalmente, excluir registros quando necessário.

o conceito de CRUD surgiu com os primeiros sistemas de gerenciamento de banco de dados. À medida que esses sistemas evoluíam, a necessidade de operações padrão para interagir com dados tornou-se tornou evidente. O CRUD, portanto, representa essas operações essenciais, servindo como um framework básico para a interação de dados em inúmeras aplicações.