import { readFileSync } from "fs";
// get Input file
const input = readFileSync("input/day01").toString();
/* 
* funcs 
*/
const sonarData = input.split("\n").map(x => parseInt(x));
const sum = (array: number[]): number => array.reduce((a, current) => a + current);

const countIncreases = (measures: number[]): number =>
    measures.slice(1).filter((m, i) => m > measures[i]).length;


console.warn("Solution 1: " + countIncreases(sonarData));

const windowMeasures = sonarData.slice(0, -2).map((_, i) => sum(sonarData.slice(i, i + 3)));
console.warn("Solution 2: " + countIncreases(windowMeasures));
