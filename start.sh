#!/bin/bash

sudo docker run --rm -dp 2000:2000 --name chromo eugeniom/chromoscope:0.2
sudo docker run --rm -dp 4000:8080 -i --name http -v $(pwd)/sampleData:/data eugeniom/http:0.1
sudo docker exec -d http http-server /data/ --cors -c-1 -p=8080

echo "Demo app at: http://127.0.0.1:2000/app/"
echo "Demo data at: http://127.0.0.1:4000/"
#echo "Demo sample at: http://localhost:2000/app/?showSamples=false&external=http://127.0.0.1:4000/config.json"
#http://localhost:2000/app/?showSamples=true&external=http://127.0.0.1:4000/config.json
echo "Demo sample at: http://127.0.0.1:2000/app/?showSamples=false&external=http://127.0.0.1:4000/config.json"

echo "to stop containers run: sudo ./stop.sh"
