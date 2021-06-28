#!/bin/bash

export PGPASSWORD='postySQLpw'

echo "Configuring socyetydb"

dropdb -U postgres socyetydb
createdb -U postgres socyetydb


psql -U postgres socyetydb < ./bin/sql/account.sql 
psql -U postgres socyetydb < ./bin/sql/question.sql 
psql -U postgres socyetydb < ./bin/sql/solution.sql 
psql -U postgres socyetydb < ./bin/sql/comment.sql 

echo "socyetydb configured"

