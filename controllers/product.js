const Category = require('../models/product');
const formidable = require('formidable');
const _ = require("lodash");
const product = require('../models/product');
const fs = require('fs')
const {errorHandler} = require('../helpers/dbErrorHandler')

exports.create = (req, res) => {
    let form = new formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req, (err, fields, files) => {
        if(err) {
            return res.status(400).json({
                error: 'Image could not be uploaded'
            })
        }

        // check for all fields
        const { name, desc, price, category, quantity, shipping } = fields

        if (!name || !description || !price || !category || !quantity || !shipping) {
            //show error message
            return res.status(400).json({
                error: 'all fields are required'
            })
        }
        //no error
        let product = new Product(fields)


        // 1kb = 1000
        // 1mb = 1000000

        if(files.photo) {
            //photo from client size 
            //console.log('FILES PHOTO', files.photo)
            //checking the size of the file, the image should be es
            if(files.photo.size > 1000000) {
                return res.status(400).json({
                    error: 'image should be less than 1mb in size'
                })
            }
            product.photo.data = fs.readFileSync(files.photo.path)
            product.photo.contentType = files.photo.type
        }

        product.save((err, result) => {
            if(err) {
                return res.status(400).json({
                    error: errorHandler(err)
                })
            }
            res.json(result)
        })
    })
}
