import "../style/index.scss";
function importAll(r) {
    return r.keys().map(r);
}
importAll(require.context('../images/', false, /\.(png|jpe?g|svg)$/));

console.log("Hello");