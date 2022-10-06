# API folder

## Routes (number + name)

**TODO:** write a bash script to fetch the CSV file from NM OpenData -> convert it to JSON

Routes are stored as CSV in `./assets/csv/routes.csv`.

### Set the data extract
1. Download open data extract from Nantes Metropole open data website: [Download](https://data.nantesmetropole.fr/explore/dataset/244400404_tan-arrets-horaires-circuits/information/)
2. Extract zip file and copy `routes.txt` to `./assets/csv/routes.csv`
3. To convert CSV to JSON, do it here (make sure to check "First row is column names" option): https://www.convertcsv.com/csv-to-json.htm
4. Paste the output in a new JSON file `./assets/json/routes.json`

### Process the data
Process consists of two scripts: `./utils/{removeExtraHyphens|sortLinesByRouteSortOrder}.ts`
1. Run `removeExtraHyphens` first with `ts-node`
2. Then `sortLinesByRouteSortOrder`

### Note
`sortLines.js` is outdated since TAN added the `route_sort_order` field for each line/route.