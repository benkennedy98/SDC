create database SDC;

use SDC;

create table product_ids (
    product_id int,
    question_id int
)

create table questions (
    question_id int,
    question_body varChar(255),
    question_date varChar(255),
    userName varChar(255),
    helpfull int,
    reported boolean,
    answer_id int
)

create table answers (
    answer_id int,
    answers_body varChar(255),
    answers_date varChar(255),
    answer_name varchar(255),
    helpfull int,
    photo varChar(255)
)
