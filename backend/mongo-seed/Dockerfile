FROM mongo

COPY init.json /init.json
CMD mongoimport --host mongo --db gasazon --collection petrolstations --type json --file /init.json --jsonArray
