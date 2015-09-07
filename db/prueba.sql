CREATE DATABASE remote:localhost/prueba root root plocal document
CONNECT remote://localhost/prueba root root

CREATE CLASS person
CREATE PROPERTY person.name STRING
CREATE PROPERTY person.surname STRING
CREATE PROPERTY person.age INTEGER

insert into person(name,surname,age) values('Byron','Cueva',27)

