# Infrastructure

<!-- TOC -->

- [Infrastructure](#infrastructure)
    - [AWS](#aws)
        - [RDS Postgres](#rds-postgres)
        - [Elastic Beanstalk - eb](#elastic-beanstalk---eb)
        - [S3 Bucket](#s3-bucket)

<!-- /TOC -->

![Infrastructure](../imgs/infrastructure.png)

## AWS

### RDS Postgres

The application server uses AWS RDS Postgres as database for storing and retrieving information.

Database endpoint: `database-1.cumuo25hw1ef.us-east-1.rds.amazonaws.com`

### Elastic Beanstalk - eb

The application server is deployed on AWS Elastic Beanstalk service. The application is build, archived and uploaded
to and S3 bucket from where Elastic Beanstalk extracts and runs the application on an endpoint.

Server URL: `http://api-postgresql-dev.eba-x4rqbqmr.us-east-1.elasticbeanstalk.com/`

### S3 Bucket

The frontend application is deployed using AWS S3 Bucket. The bundled assets are uploaded to an S3 bucket and that
bucket is made publicly readable.

Bucket URL: `http://storefront-web.s3-website-us-east-1.amazonaws.com/`

End users can access the application from the Bucket URL.
