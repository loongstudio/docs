#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成文档
yarn run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:loongstudio/docs.git main:gh-pages
git push -f git@gitee.com:LoongStudio/docs.git main:gh-pages

cd -