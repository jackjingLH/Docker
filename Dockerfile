FROM node:8.11.4-slim
RUN sed -i 's#http://archive.ubuntu.com/#http://mirrors.tuna.tsinghua.edu.cn/#' /etc/apt/sources.list;
RUN apt-get update --fix-missing && apt-get install -y git --fix-missing
WORKDIR /app
COPY . /app/
EXPOSE 80
RUN  npm install 
RUN npm run build 
RUN cp -r dist/* /var/www/html 
RUN rm -rf /app
CMD ["nginx","-g","daemon off;"]
