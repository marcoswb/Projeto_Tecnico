FROM openjdk:10-jre-slim
COPY /target/api-rest-1.0.jar /usr/src/app/
WORKDIR /usr/src/app
EXPOSE 8080
CMD ["java", "-jar", "api-rest-1.0.jar"]
