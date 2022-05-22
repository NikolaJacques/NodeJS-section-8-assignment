const fs = require('fs')
const { getItemsFromFile } = require('./getItemsFromFile')

exports.deleteItem = (path, callback, id) => {
    getItemsFromFile(path, items => {
        const itemIndex = items.findIndex(item => item.id === id)
        items.splice(itemIndex,1)
        fs.writeFile(path, JSON.stringify(items), err => {
            console.log(err)
            callback()
        })
    })
}  