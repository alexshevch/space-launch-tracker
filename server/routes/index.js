module.exports = (app) => {
    app.use("/launches/:id", require("./launch"));
    app.use("/launches", require("./launches"));
}