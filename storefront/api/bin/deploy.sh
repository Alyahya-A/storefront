# Deploy to AWS EB
# cd ./www
eb init api-postgresql --region us-east-1
eb use api-postgresql-dev
eb deploy api-postgresql-dev