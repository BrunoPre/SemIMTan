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

## Stops
**TODO:** write a bash script to fetch data from OpenTAN API -> parse it to JSON

1. Fetch `http://open.tan.fr/ewp/arrets.json` using `curl` or Postman
2. Copy response body and paste in `./assets/json/ALL_STOPS_EXTRACT.json`
3. Reformat the file using your IDE's utility "Reformat Code/File/Document"
4. In case of trouble due to missing quotes, add them by the IDE's replacement tool (CTRL+R). For instance: `codeLieu -> "codeLieu"`. Use "Match whole word" filter to distinguish "ligne" and "numLigne" fields
5. Run `ts-node sortStopLinesByRouteSortOrder.ts`
6. In case of error due to line mismatch between the stops and the routes extract, add a fallback replacement to `UNACTIVE_ROUTES` array in `api_constants.ts` static class