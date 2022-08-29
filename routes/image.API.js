const controler = require('../controllers/user_C');

const multer  = require('multer')
const upload = multer({ dest: 'uploads/' });

// const storage = multer.diskStorage({
//     destination : './uploads/',
//     filename : (req, file, cb)=> cb(
//         null, 
//         `${file.fieldname} ${Date.now} ${path.extname(file.originalname)} `
//     )

// });                 // we can set limit like MB

//const upload = multer({storage});


module.exports = (app)=>{

    app.post("/file/images",[upload.single('file')],controler.proccessFile);

}