const date = new Date();

exports.monthYear = ()=> {
    const options1 = { month: "short", year: "numeric", };
    return date.toLocaleDateString("en-IN", options1);
};


exports.weekDay = ()=> {
    const options2 = { weekday: "long" };
    return date.toLocaleDateString("en-IN", options2);
};

exports.dateNum = ()=> {
    const options3 = { day: "numeric" };
    return date.toLocaleDateString("en-IN", options3);
};


