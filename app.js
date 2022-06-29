const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const giftExchangeRouter = require("./routes/gift-exchange")
const { NotFoundError } = require("./utils/errors")

const app = express()

app.use(cors())
app.use(express.json())
app.use('/gift-exchange', giftExchangeRouter)

app.get('/', (req, res) => {
    res.send({ping: "pong"})
  })



app.use((req, res, next) => {
    return next(new NotFoundError());
  });

app.use((err, req, res, next) => {
    const status = err?.status || 500;
    const message = err?.message || "Something went wrong in the application";
    const error = {status, message};
    res.status(status).send(error)
})

module.exports = app