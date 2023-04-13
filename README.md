# Comparing TS Runtimes


## Example for TS runtimes
- [x] `jiti`
- [x] `ts-node`
- [x] `ts-node-dev`
- [x] `tsc`
- [x] `tsm`
- [x] `tsx`

## Findings
**TS Runtime**|** Support file watching?**|** Run TS directly?**
-----|-----|-----
`jiti`| nope (use nodemon)| yes
`ts-node`| nope (use nodemon)| yes
`ts-node-dev`| yes| nope (need to transpile)
`tsc`| nope (use nodemon)| nope (need to transpile)
`tsm`| nope (use nodemon)| yes
`tsx`| yes| yes


## Libs
### jiti
- [jiti docs](https://github.com/unjs/jiti#readme)
### ts-node
- [ts-node docs](https://typestrong.org/ts-node/)
### ts-node-dev
- [ts-node-dev docs](https://github.com/wclr/ts-node-dev#readme)
### tsc
- [tsc docs](https://www.typescriptlang.org/)
### tsm
- [tsm docs](https://github.com/lukeed/tsm#readme)
- As a node CLI replacement
- As a CommonJS --require hook
- As an ESM --loader
### TSX ( "TypeScript execute")
- [tsx docs](https://github.com/esbuild-kit/tsx#readme)
- tsx is designed to be a drop-in replacement for node, so you can use it just the way you would use Node.js. All command-line arguments (with the exception of a few) are propagated to Node.js.

