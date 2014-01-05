function* foo(x) {
    while(true) {
        yield x;
    }
}
var g = foo(2);

console.log(g.next());
console.log(g.next());
console.log(g.next());
