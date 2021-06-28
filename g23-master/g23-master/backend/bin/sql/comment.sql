CREATE TABLE comment(
    "id"                  serial primary key,
    "commentAuthor"       varchar(100) not null,
    "commentBody"         varchar(225) not null,
    "dateCommented"       timestamp,
    "solutionId"          integer not null,
    FOREIGN KEY("solutionId") references solution(id) on delete cascade
);