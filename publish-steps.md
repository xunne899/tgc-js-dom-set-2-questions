```
Delete old publish
git branch -D publish

Checkout

git checkout --orphan publish



Delete unwanted files

find . -type f -name 'solutions.js' -exec rm {} +

Add all the files
git add -A

Commit the changes

git commit -am "commit message"

Finally, force update your repository

git push -f -u publish publish
```