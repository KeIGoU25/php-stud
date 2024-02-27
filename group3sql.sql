CREATE DATABASE dbStudent;
USE dbstudent;

CREATE TABLE tblStudents (
	id int primary key auto_increment,
    studNumber int not null,
    name varchar(255) not null,
    age int not null,
    email varchar(255) not null,
    contact varchar(11) not null,
);

SELECT * FROM tblStudents;

INSERT INTO tblStudents
VALUES (1, 1902209, 'john', 23, 'john@gmail.com', '09123456789'),
(default, 1902509, 'john', 23, 'john@gmail.com', '09123456789');

DELETE FROM tblStudents WHERE id < 20;