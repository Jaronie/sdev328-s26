const name = {
    fName: "John",
    lName: "Doe",
    nickName: "jdoe123",
    age: 301
};

export const printAll = (req, res) => {
    const first = req.query.fName;
    const last = req.query.lName;
    const nick = req.query.nickName;
    const age = req.query.age;
    console.log(first, last, nick);


}
export const printName = (req, res) => {
    console.log(req.params);
    const { fName, lName, nickName } = req.params;

    res.status(200).json({message: `Hello ${fName} ${lName} (${nickName})`});

    printAge();
}
export const printAge = (req, res) => {
    console.log(req.params);
    const { age } = req.params;

    res.status(200).json({message: `You're ${age} years old.`});

}
