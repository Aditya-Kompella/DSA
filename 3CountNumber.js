function countNumbers(n) {
    count = 0;
    if(n<0){
        n=-n;
    }
    while (n > 0) {
        n = Math.floor(n / 10);
        count++;
    }
    return count;
}
console.log(countNumbers(-55555555555555555));
