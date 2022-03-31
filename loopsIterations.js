// level {1/2/3}
//level1
let ans = "";
let n = 4;
for(let i=1; i<=n; i++) {
    for(let j=1; j<=n-i; j++) {
        ans += "  ";
    }
    for(let j=1; j<=i; j++) {
        ans += j+" ";
    }
    for(let j=i-1; j>=1; j--) {
        ans += j+" ";
    }
    ans += "\n";
}
console.log(ans);

