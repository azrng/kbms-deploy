FROM node:latest

RUN mkdir -p /home/nodeApp
COPY . /home/nodeApp
WORKDIR /home/nodeApp
RUN npm install -g pnpm && pnpm config set registry https://registry.npm.taobao.org && pnpm install
ENV HOST 0.0.0.0
ENV PORT 8080
EXPOSE 8080
CMD ["pnpm", "run", "docs:dev"]
