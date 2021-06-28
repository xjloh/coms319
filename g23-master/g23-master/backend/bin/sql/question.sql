CREATE TABLE question(
    "id"                  serial primary key,
    "questionBody"        varchar(255) not null,
    "questionAuthor"      varchar(100),
    "dateAsked"           timestamp not null
);