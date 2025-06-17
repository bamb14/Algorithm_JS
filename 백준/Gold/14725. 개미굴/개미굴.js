const fs=require("fs");
let input=fs.readFileSync(0).toString().trim().split('\n');

let N=Number(input.shift());
input=input.map(str=>str.split(' '));

const tree = {};

function insertPath(path) {
  let n=path.shift();
  let node = tree;
  for (const part of path) {
    if (!node[part]) {
      node[part] = {};
    }
    node = node[part];
  }
}

function printTree(node, depth = 0) {
  const keys = Object.keys(node).sort();
  for (const key of keys) {
    console.log("--".repeat(depth) + key);
    printTree(node[key], depth + 1);
  }
}

for (const path of input) {
  insertPath(path);
}

printTree(tree);