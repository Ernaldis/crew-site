echo "Installing frontend..."
npm install
[ $? -eq 0 ]  || exit 1
echo

#echo "Running frontend tests..."
#npm test
#[ $? -eq 0 ]  || exit 1
#echo

echo "Running frontend ESLint..."
npx eslint --fix . --ext .js
[ $? -eq 0 ]  || exit 1
echo

