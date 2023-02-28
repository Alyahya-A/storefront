# Deploy to AWS EB
# cd ./www
eb init api-postgresql --region us-east-1
eb use api-postgresql-dev
eb deploy api-postgresql-dev
eb setenv POSTGRES_HOST=$POSTGRES_HOST
eb setenv POSTGRES_PORT=$POSTGRES_PORT
eb setenv POSTGRES_DB=$POSTGRES_DB
eb setenv POSTGRES_USER=$POSTGRES_USER
eb setenv JWT_SECRET=$JWT_SECRET
eb setenv SaltRounds=$SaltRounds
eb setenv TEST=$TEST