for ((i = 0; i < $1; i++)); do
    gnome-terminal -- sh -c "ts-node index.ts $2 p=$i"
done