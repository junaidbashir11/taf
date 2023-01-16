export function getTime(t) {
    var d = new Date();
    if (t == "0") {
        d.setDate(d.getDate() - 1);
    }
    else if (t == "1") {
        d.setDate(d.getDate() - 7);
    }
    else if (t == "2") {
        d.setMonth(d.getMonth() - 1);
    }
    else if (t == "3") {
        d.setMonth(d.getMonth() - 3);
    }
    else {
        d.setFullYear(d.getFullYear() - 1);
    }
    let day = d.getDate();
    let month = d.getMonth() + 1;
    let year = d.getFullYear();
    if (day < 10) {
        day = "0" + day.toString();
    }
    else {
        day = day.toString();
    }
    if (month < 10) {
        month = "0" + month.toString();
    }
    else {
        month = month.toString();
    }
    year = year.toString();
    return year + "-" + month + "-" + day;
}

export function getType(t) {
    if (t === "0") {
        return "5min";
    }
    if (t == "1" || t == "2") {
        return "1h";
    }
    return "1day";
}