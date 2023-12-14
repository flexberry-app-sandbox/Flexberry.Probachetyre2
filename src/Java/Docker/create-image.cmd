docker build --no-cache -f SQL\Dockerfile.PostgreSql -t probachetyre-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t probachetyre-java/app ../../..
