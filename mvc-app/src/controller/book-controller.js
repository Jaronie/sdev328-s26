const book = {
    chapters: 20,
    title: "I Don't Read",
    pages: 1,
    author: "Anon",
    genre: "dystopian",
    publisher: "jaronie publish LLC (dont copyright)",
    year: 2006

}

export const printAll = (req, res) => {
    const title = req.query.title;
    const year = req.query.year;
    const genre = req.query.genre;
    console.log(title, year, genre);


    res.status(200).json(req.query);
}


export const getField = (req, res) => {
    const field = req.query.fields;
    const fields = field.split(", ");

    let result = {};
    fields.forEach(field => {
        result[field] = book[field];
    });
    res.status(200).json(result);
}

export const getChapters = (req,res) => {
    res.status(200).json({
        chapters: book.chapters
     });
}

export const getTitle = (req,res) => {
    res.status(200).json({ 
        title: book.title
     });

}

export const getPages = (req,res) => {
    res.status(200).json({
         pages: book.pages }); //sends pages value from json object
}

export const getAuthor = (req, res) => {
    res.status(200).json({
        author : book.author }); //sends author value from json object

    }

export const allBook = (req,res) => {
    res.status(200).json(book); //sends whole json object


}