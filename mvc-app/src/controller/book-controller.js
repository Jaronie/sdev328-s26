const book = {
    chapters: 20,
    title: "I Don't Read",
    pages: 1,
    author: "Anon",
    genre: "dystopian",
    publisher: "jaronie publish LLC (dont copyright)",
    year: 2006

}

export const getField = (req, res) => {
    const field = req.query.field; 
    console.log(`Field: ${field}`);

    res.status(200).json({ message: "TBA" });
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