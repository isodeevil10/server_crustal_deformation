var router = require("./routes/index")
var multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads');
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  }
});
var upload = multer({
  storage: storage
}).single('userPhoto');

router.get('/', function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

router.post('/api/photo', function (req, res) {
  upload(req, res, function (err) {
    if (err) {
      return res.end("Error uploading file.");
    }

    let site_name = req.body.site_name
    let image_name = req.body.image_name
    let image_path = req.file.path + Date() + "-" +site_name 
    let image_clas_id = req.body.class_id

    try {
      req.getConnection(function (err, conn) { 
        if (err) {
          console.error('SQL Connection error: ', err);
          return next(err);
        } else {
          var insertSql2 = "INSERT INTO site_images SET ?";
          var insertValues2 = {
            "image_clas_id": image_clas_id,
            "image_path": image_path,
            // "site_name": site_name,
            "image_name": image_name

          };

          var query = conn.query(insertSql2, insertValues2, function (err, result) {
            if (err) {
              console.error('SQL error: ', err);
              return next(err);
            }

            // console.log(result);
            // var image_id = result.insertId;
            // res.json({
            //   "img_id": image_id
            // });
          });
        }
      });
    } catch (ex) {
      console.error("Internal error:" + ex);
      return next(ex);
    }
  });

  res.end("File is uploaded");
});