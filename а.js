const express = require("express")
const app = express()
const port = 3000

const clients = [
    {
        id: 1,
        fio: "Анчоус Фараон Фараонович",
        birthday: "11-11-2011",
        adress: "Алиманаванава 49",
        wife: {
            id: 3,
            fio: "Владимир Володин Владимирович",
            birthday: "11-22-2022"
        },
        children: [
            {
                id: 2,
                fio: "Биба",
                birthday: "22-22-2222"
            },
            {
                id: 2,
                fio: "Боба Волкин Владимирович",
                birthday: "11-11-1111"
            },
            {
                id: 2,
                fio: "БамБам",
                birthday: "33-33-3333"
            }    
        ]
    }
]



app.get('/', (req, res) => {
    res.set({
        "Content-Type": "application/json",
    })
    res.json(JSON.stringify(clients))
})

app.listen(port, () => {
    console.log(`Мы начали прослушивать ${port} порт.`)
})