echo "Switching to the solutions branch";
git checkout solutions;
echo "Deleting existing publish branch";
git branch -D publish;
echo "Creating new publish branch";
git checkout --orphan publish;
echo "Deleting solution files";
find . -type f -name 'solutions.js' -exec rm {} +
echo "Adding all files";
git add -A;
echo "Committing changes";
git commit -am "commit message";
echo "Publishing...";
git push -f -u publish publish;