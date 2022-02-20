npm run build

for ((i = 0; i < $1; i++)); do
    gnome-terminal -- sh -c "node ./lib/index.js $2 p=$i"
done