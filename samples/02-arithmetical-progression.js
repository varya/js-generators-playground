var Progression = function (f,d, n) {
    f = f || 0;
    d = d || 1;
    n = n || 1;

    var r = f;
    if (n > 1) {
        r = Progression(f + d, d,  n-1);
    }
    return r;
}

console.log(Progression(0, 2, 5)) ;

var ProgressionGen = function *(f, d) {
    var x = f;
        d = d || 1;
    while(true) {
        yield x;
        x = x + d;
    }
}

var g = ProgressionGen(0, 2);
var r;
for (var i = 1; i <= 5; i++) {
    r = g.next();
}
console.log(r.value);
