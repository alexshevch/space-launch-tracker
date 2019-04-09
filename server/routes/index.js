module.exports = (app) => {
    app.use("/launches", require("./launches"));
}