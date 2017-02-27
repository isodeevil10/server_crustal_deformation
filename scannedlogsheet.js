var router = require("./routes/index")
var multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads/logsheet');
  },
  filename: function (req, file, callback) {
    
    callback(null, +Date.now()+'-'+file.originalname);
  }
});
var upload = multer({
  storage: storage
}).single('userPhoto2');

router.get('/scaned', function (req, res) {
  res.sendFile(__dirname + "/scan.html");
});

router.post('/api/photo2', function (req, res) {
  upload(req, res, function (err) {
    if (err) {
      return res.end("Error uploading file.");
    }
    let scan_code = req.body.scan_code
    let scan_image_path = req.body.scan_image_path
    try {
      req.getConnection(function (err, conn) { 
        if (err) {
          console.error('SQL Connection error: ', err);
          return next(err);
        } else {
          var insertSql2 = "INSERT INTO scanned_logsheet SET ?";
          var insertValues2 = {
            "scan_code": scan_code,
            "scan_image_path": scan_image_path 
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