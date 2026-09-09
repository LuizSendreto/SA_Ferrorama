* O que é o PDO;
     A extensão PHP Data Objects (PDO) define uma interface leve e consistente para acessar bancos de dados no PHP. Cada driver de banco de dados que implementa a interface PDO pode expor recursos específicos do banco de dados como funções de extensão comuns. Observe que não é possível executar nenhuma função de banco de dados usando apenas a extensão PDO; um driver PDO de banco de dados deve ser usado para acessar o servidor de banco de dados.


* Para que ele é utilizado no PHP;
     O PDO fornece uma camada de abstração de acesso a dados, o que significa que, independentemente de qual banco de dados estiver sendo usado, as mesmas funções serão usadas para realizar consultas e buscar dados. O PDO não fornece uma abstração de banco de dados; ele não reescreve o SQL nem emula os recursos ausentes. Uma camada de abstração completa deve ser usada se esse recurso for necessário.


* Como funciona uma conexão utilizando PDO;
     Funciona através da instanciação da classe nativa PDO, que atua como uma camada de abstração unificada para diferentes bancos de dados em PHP. Para conectar o sistema ao banco, criamos um novo objeto informando o DSN (Data Source Name, que contém o driver, o host e o nome do banco), o usuário e a senha, existem também três API’s de conexão com o banco de dados em PHP, são elas:

 ## mysql: Pacote de funções para acesso ao MySQL, foi descontinuado no PHP7.
 ## mysqli: Extensão da API mysql com suporte a funcionalidades adicionadas a versões posteriores ao MySQL 4.1 - http://www.mysql.com/
 ## PDO - PHP Data Objects: Interface para acesso a dados do PHP.


* Quais são suas principais características;
     usa os mesmos métodos para consultar gerenciar dados, independentemente do banco de SGBD, é orientado a objetos o que facilita a organização e a manutenção do código, protege o sistema contra ataques de SQL Injection ou seja utiliza prepared statements, permite alterar o banco de dados em tempo de execução apenas modificando a string de conexão.


* Diferenças entre PDO e MySQLi;
   A principal diferença é que o PDO (PHP Data Objects) é uma camada de abstração que permite a conexão com múltiplos sistemas de gerenciamento de banco de dados, enquanto o MySQLi (MySQL Improved) foi desenvolvido especificamente para trabalhar de forma exclusiva com o MySQL. Em termos de desempenho e arquitetura, o MySQLi executa as instruções preparadas diretamente no servidor nativo do MySQL, apresentando uma leve vantagem de velocidade em cenários focados exclusivamente nessa base de dados. O PDO pode emular tais comandos em determinadas configurações, mantendo contudo uma versatilidade superior para aplicações que precisam transitar entre diferentes motores de banco de dados.


* Vantagens e desvantagens de utilizar PDO;
     Algumas das vantagens são a portabilidade de Banco de Dados, a segurança nativa, os parâmentros nomeados, a orientação a objetos e o tratamento de erros eficiente. Já as desvantagens são que o desemprnho é levemente inferior comparado ao sql por exemplo, o PDO  exige um conhecimento prévio a orientação a objetos e a configuração de conexão inicial que pode parecer mais complexa comparada com funções mais simples.


* O que são Prepared Statements e por que são importantes;
     Prepared Statements são uma forma segura de executar consultas SQL em PHP, evitando SQL Injection. Basicamente, o Prepared Statement evita inserções indevidas no código MySQL, ou seja, ao invés do MySQL inserir o dados no código, uma variável é criada para que o dado seja inserido posteriormente, evitando alterações no código MySQL. Exemplificando, com o Prepared Statement, o MySQL prepara primeiro a estrutura da consulta e depois pede os valores, isso traz mais segurança e qualidade no código.


* Em quais situações o PDO pode ser uma boa escolha.
     O PDO é a escolha ideal para aplicações empresariais (Enterprise) ou SaaS que tendem a crescer, ganhar novos recursos e durar anos no mercado. Ele se destaca principalmente em sistemas que mudam de ambiente, sendo perfeito caso você desenvolva um software comercial para ser instalado diretamente no servidor do cliente, onde uma empresa utiliza SQL Server enquanto outra prefere rodar em MySQL.