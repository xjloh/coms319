CREATE TABLE solution(
    "id"                  serial primary key,
    "solutionAuthor"      varchar(100) not null,
    "solutionBody"        varchar(225) not null,
    "datePosted"          timestamp,
    "questionId"          integer not null,
    FOREIGN KEY("questionId") references question(id) ON DELETE CASCADE
);