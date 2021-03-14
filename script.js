function inc() {
    var first = parseInt(document.getElementById("first").value);
    var second = parseInt(document.getElementById("second").value);
    var result = first + second;
    document.getElementById("result").value = result;
};

function dec() {
    var first = parseInt(document.getElementById("first").value);
    var second = parseInt(document.getElementById("second").value);
    var result = first - second;
    document.getElementById("result").value = result;
};

function mul() {
    var first = parseInt(document.getElementById("first").value);
    var second = parseInt(document.getElementById("second").value);
    var result = first * second;
    document.getElementById("result").value = result;
};

function div() {
    var first = parseInt(document.getElementById("first").value);
    var second = parseInt(document.getElementById("second").value);
    var result = first / second;
    document.getElementById("result").value = result;
};
//وقتي متغير ها رابالاي صفحفه و خارج از فانكشن ها معرفي مي كنيم كار نمي كند. چرا؟