#!/bin/bash

docker run --rm -p 5000:8080 -v $PWD/vite.config.ts:/chromoscope/vite.config.ts --name chromo eugeniom/chromoscope_hg:0.4
#sudo docker run --rm -dp 8080:8080 -i --name http -v $(pwd)/sampleData:/data http:0.1
#sudo docker exec -d http http-server /data/ --cors -c-1 -p=8080

#echo "Demo app at: http://127.0.0.1:3000/app/"
#echo "Demo data at: http://127.0.0.1:8080/"
#echo "Demo sample at: http://localhost:3000/app/?showSamples=true&external=http://127.0.0.1:8080/config.json"
#http://localhost:3000/app/?showSamples=true&external=http://127.0.0.1:8080/config.json
#echo "Demo sample at: http://127.0.0.1:3000/app/?showSamples=true&external=http://127.0.0.1:8080/config.json"

#echo "to stop containers run: sudo ./stop.sh"
