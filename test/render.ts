import esbuild from "esbuild"

const ts = 'let x: number = 1; console.log(x);'
const res = esbuild.transformSync(ts,{
    loader: 'ts',
})
console.log(res.code);
