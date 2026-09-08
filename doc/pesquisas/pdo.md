* O que é o PDO;
     A extensão PHP Data Objects (PDO) define uma interface leve e consistente para acessar bancos de dados no PHP. Cada driver de banco de dados que implementa a interface PDO pode expor recursos específicos do banco de dados como funções de extensão comuns. Observe que não é possível executar nenhuma função de banco de dados usando apenas a extensão PDO; um driver PDO de banco de dados deve ser usado para acessar o servidor de banco de dados.


* Para que ele é utilizado no PHP;
     O PDO fornece uma camada de abstração de acesso a dados, o que significa que, independentemente de qual banco de dados estiver sendo usado, as mesmas funções serão usadas para realizar consultas e buscar dados. O PDO não fornece uma abstração de banco de dados; ele não reescreve o SQL nem emula os recursos ausentes. Uma camada de abstração completa deve ser usada se esse recurso for necessário.


* Como funciona uma conexão utilizando PDO;



* Quais são suas principais características;



* Diferenças entre PDO e MySQLi;



* Vantagens e desvantagens de utilizar PDO;



* O que são Prepared Statements e por que são importantes;
     Prepared Statements são uma forma segura de executar consultas SQL em PHP, evitando SQL Injection. Basicamente, o Prepared Statement evita inserções indevidas no código MySQL, ou seja, ao invés do MySQL inserir o dados no código, uma variável é criada para que o dado seja inserido posteriormente, evitando alterações no código MySQL. Exemplificando, com o Prepared Statement, o MySQL prepara primeiro a estrutura da consulta e depois pede os valores, isso traz mais segurança e qualidade no código.


* Em quais situações o PDO pode ser uma boa escolha.