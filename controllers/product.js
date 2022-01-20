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
        //no error
        let product = new product(fields)


        // 1kb = 1000
        // 1mb = 1000000

        if(files.photo) {
            //photo from client size 
            //console.log('FILES PHOTO', files.photo)
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
