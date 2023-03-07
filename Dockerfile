FROM node:18-buster

WORKDIR /
COPY . .

# RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@7
# RUN pnpm config set store-dir .pnpm-store

RUN npm install --registry=https://registry.npm.taobao.org

# pnpm docs:build --dest public \n\

# RUN echo "#!/bin/sh \n\
# echo "npm install" \n\
# pnpm install --frozen-lockfile \n\
# pnpm run docs:dev  \n\
# " >> /usr/local/bin/entrypoint.sh

RUN echo "#!/bin/sh \n\
echo "npm install" \n\
npm install \n\
npm run docs:start  \n\
" >> /usr/local/bin/entrypoint.sh

RUN chmod +x /usr/local/bin/entrypoint.sh
EXPOSE 80/tcp

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
