/** Utility script to convert TAN's CSV files to an array of JSON objects.
 * Use case: before preview/build, run it when a new version of the CSV files is published by TAN/NM
 * Run: `node <this_script>.js`
 */

var csvToJson = require("csvtojson");
var fs = require("fs");

const PATH_ASSETS = "./assets/";
const FILENAME = "routes";
const TYPE = {
  csv: "csv",
  json: "json",
};

const csvFilePath = require(PATH_ASSETS +
  TYPE.csv +
  "/" +
  FILENAME +
  "." +
  TYPE.csv); // pick the right CSV file

const JsonArray = csvToJson().fromFile(csvFilePath);

fs.writeFileSync(
  PATH_ASSETS + TYPE.json + "/" + FILENAME + "." + TYPE.json,
  JSON.stringify(JsonArray, null, 2),
  "utf-8"
);
