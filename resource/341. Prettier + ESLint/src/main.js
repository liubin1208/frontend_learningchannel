const arr = [1, 2, 3, 4]
for (const item of arr) {
    console.log("print", item)
}
function test() {
    if (arr.length > 3) {
        return true
    }
    return false
}
test()
