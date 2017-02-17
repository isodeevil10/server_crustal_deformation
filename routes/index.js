var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express server index' });
// });

module.exports = router;

///server side velocity computation
router.get('/compute', function (req, res) {
    let PythonShell = require('python-shell');
    let pyshell = new PythonShell('./compute_input.py', { mode: 'json' });

    let data = req.query

    pyshell.options

    pyshell.send(data)

    pyshell.on('message', function (message) {
    // received a message sent from the Python script (a simple "print" statement)
        res.send(message)
        // console.log(message);
    });

    // end the input stream and allow the process to exit
    pyshell.end(function (err) {
        if (err) throw err;
        console.log('python script for time series processing done');
    });

})



/* Create receiver information. */
router.post('/receiverinformation', function (req, res, next) {
    try {
        var reqObj = req.body;
        console.log(reqObj);
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            } else {
                var insertSql2 = "INSERT INTO receiver_information SET ?";
                var insertValues2 = {
                    "serial_number": reqObj.serialnumber,
                    "receiver_type": reqObj.receivertype,
                    "part_number": reqObj.partnumber

                };
                var query = conn.query(insertSql2, insertValues2, function (err, result) {
                    if (err) {
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    console.log(result);
                    var Receiver_Id = result.insertId;
                    res.json({
                        "rece_id": Receiver_Id
                    });
                });
            }
        });
    } catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});

/* Create antenna information. */
router.post('/antennainformation', function (req, res, next) {
    try {
        var reqObj = req.body;
        console.log(reqObj);
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            } else {
                var insertSql3 = "INSERT INTO antenna_information SET ?";
                var insertValues3 = {
                    "antenna_serialnumber": reqObj.antenna_serialnumber,
                    "antenna_partnumber": reqObj.antenna_partnumber,
                    "antenna_type": reqObj.antenna_type

                };
                var query = conn.query(insertSql3, insertValues3, function (err, result) {
                    if (err) {
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    console.log(result);
                    var Antenna_Id = result.insertId;
                    res.json({
                        "ant_id": Antenna_Id
                    });
                });
            }
        });
    } catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});


/* Create fieldwork information. */
router.post('/fieldworkinformation', function (req, res, next) {
    try {
        var reqObj = req.body;
        console.log(reqObj);
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            } else {
                var insertSql5 = "INSERT INTO fieldwork_table SET ?";
                var insertValues5 = {
                    "site_name": reqObj.sitename,
                    "date": reqObj.date,
                    "fieldwork_type": reqObj.fieldworktype,
                    "comment": reqObj.comment,
                    "incident_report_id": reqObj.incidentreport,
                    "logistical_note_id": reqObj.logisticalnote
                
                };
                var query = conn.query(insertSql5, insertValues5, function (err, result) {
                    if (err) {
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    console.log(result);
                    var site_Id = result.insertId;
                    res.json({
                        "site_id": site_Id
                    });
                });
            }
        });
    } catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});


/* Create power source information. */
router.post('/powersourceinformation', function (req, res, next) {
    try {
        var reqObj = req.body;
        console.log(reqObj);
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            } else {
                var insertSql5 = "INSERT INTO power_source SET ?";
                var insertValues5 = {
                   "ps_serial_number": reqObj.ps_serial_number,
                   "comment":reqObj.comment
                   
                
                };
                var query = conn.query(insertSql5, insertValues5, function (err, result) {
                    if (err) {
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    console.log(result);
                    var site_Id = result.insertId;
                    res.json({
                        "site_id": site_Id
                    });
                });
            }
        });
    } catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});





/* input contact person details */

router.post('/contactpersondetails', function (req, res, next) {
try {
    var reqObj = req.body;
    console.log(reqObj);
    req.getConnection(function (err, conn) {
        if (err) {
            console.error('SQL Connection error: ', err);
            return next(err);
        } else {
           
            var first_name =  reqObj.first_name;
            var  last_name = reqObj.last_name;
            var position =  reqObj.position;
            var address_one =  reqObj.address_one;
            var address_two = reqObj.address_two;
            var city =  reqObj.city;
            var province =  reqObj.province;
            var  contact_number = reqObj.contact_number;
            var organization =  reqObj.organization;
            var email_add =  reqObj.email_add;
           

            var query = conn.query(
                " CAll contactperson("+"'"+first_name+"','"+last_name+"','"+position+"','"+address_one+"','"+address_two+"','"+city+"','"+province+"','"+contact_number+"','"+organization+"','"+email_add+"')",
             function (err, result) {
                if (err) { console.log(query)
                    console.error('SQL error: ', err);
                    return next(err);
                }
                console.log(result);
                var test_Id = result.insertId;
                res.json({
                    "test_id": test_Id 
                });
            });
        } 
    }); 
} catch (ex) { 
    console.error("Internal error:" + ex); 
    return next(ex);
}
});



/* input gpsstaff information*/
router.post('/gpsstaffinformation', function (req, res, next) {
try {
    var reqObj = req.body;
    console.log(reqObj);
    req.getConnection(function (err, conn) {
        if (err) {
            console.error('SQL Connection error: ', err);
            return next(err);
        } else {
           
            var first_name =  reqObj.first_name;
            var  last_name = reqObj.last_name;
            var nickname = reqObj.nickname;
            var position_id =  reqObj.position;
            var contact_num =  reqObj.contact_num;
            var division_name = reqObj.division_name;
            var email_address =  reqObj.email_address;
            var office_location =  reqObj.office_location;
            var birthday =  reqObj.birthday
         
           

            var query = conn.query(
                "CAll gpsstaff("+"'"+first_name+"','"+last_name+"','"+nickname+"','"+position_id+"','"+contact_num+"','"+division_name+"','"+email_address+"','"+office_location+"','"+birthday+"')",
             function (err, result) {
                if (err) { console.log(query)
                    console.error('SQL error: ', err);
                    return next(err);
                }
                console.log(result);
                var test_Id = result.insertId;
                res.json({
                    "test_id": test_Id 
                });
            });
        } 
    }); 
} catch (ex) { 
    console.error("Internal error:" + ex); 
    return next(ex);
}
});


/**  input logsheet data*/
router.post('/logsheet', function (req, res, next) {
try {
    var reqObj = req.body;
    console.log(reqObj);
    req.getConnection(function (err, conn) {
        if (err) {
            console.error('SQL Connection error: ', err);
            return next(err);
        } else {
           
            var logsheet_date             = reqObj.logsheet_date;  
            var site_id                   = reqObj.site_id  ;
            var julian_day                = reqObj.julian_day; 
            var marker                    = reqObj.marker  ;
            var receiver_id               = reqObj.receiver_id ;
            var antenna_id                = reqObj.antenna_id ;
            var height                    = reqObj.height ;
            var north                     = reqObj.north ;
            var east                      = reqObj.east ;
            var south                     = reqObj.south;
            var west                      = reqObj.west  ;
            var time_start                = reqObj.time_start; 
            var time_end                  = reqObj.time_end ;
            var azimuth                   = reqObj.azimuth  ;
            var scan_log_id               = reqObj.scan_log_id; 
            var power_source              = reqObj.power_source;  
            var failure_time              = reqObj.failure_time ; 
            var receiver_status           = reqObj.receiver_status; 
            var antenna_status            = reqObj.antenna_status  ;
            var rod_num                   = reqObj.rod_num;
            var rod_correction            = reqObj.rod_correction; 
            var avg_slant_height          = reqObj.avg_slant_height; 
            var ip_add                    = reqObj.ip_add;
            var netmask                   = reqObj.netmask;  
            var gateway                   = reqObj.gateway ;
            var dns                       = reqObj.dns ;
            var local_tcp_port            = reqObj.local_tcp_port;
            var latittude                 = reqObj.latittude  ;
            var longitude                 = reqObj.longitude  ;
            // var site_sketch_id            = reqObj.site_sketch_id ; 
            var observed_situation        = reqObj.observed_situation  ;
            var lodging_road_information  = reqObj.lodging_road_information;
            // var contact_id                = reqObj.contact_id ;
            var others                    = reqObj.others 
           

            var query = conn.query("CAll logsheet("+"'" +logsheet_date +"', '"+ julian_day+ "', '" +marker+ "','" +height+ "', '" +north+ "', '" +east +"', '" +south+ "', '"+ west+ "', '"+ time_start +"', '"+ time_end+ "', '"+ azimuth+ "', '" +failure_time+ "', '"+ receiver_status +"', '" +antenna_status+ "', '"+ rod_num+ "', '" +rod_correction+ "', '"+ avg_slant_height+ "', '"+ ip_add +"', '" +netmask+ "', '" +gateway+ "', '" +dns+ "', '" +local_tcp_port+ "', '" +latittude + "', '" +longitude+"', '"+ observed_situation+ "', '" +lodging_road_information+ "', '" +others+ "')",
             function (err, result) {
                if (err) { console.log(query)
                    console.error('SQL error: ', err);
                    return next(err);
                }
                console.log(result);
                var test_Id = result.insertId;
                res.json({
                    "test_id": test_Id 
                });
            });
        } 
    }); 
} catch (ex) { 
    console.error("Internal error:" + ex); 
    return next(ex);
}
});





/* input site information*/
router.post('/inputsiteinformation', function (req, res, next) {
try {
    var reqObj = req.body;
    console.log(reqObj);
    req.getConnection(function (err, conn) {
        if (err) {
            console.error('SQL Connection error: ', err);
            return next(err);
        } else {
           
            var site_name =  reqObj.site_name;
            var  last_update = reqObj.last_update;
            var latitude =  reqObj.latitude;
            var longitude =  reqObj.longitude;
            var receiver_sn = reqObj.receiver_sn;
            var antenna_sn =  reqObj.antenna_sn;
            var powersource_sn =  reqObj.powersource_sn;
            var contact_id = reqObj.contact_id;
            var address_one = reqObj.address_one;
            var address_two =  reqObj.address_two;
            var city = reqObj.city;
            var province = reqObj.province;
            var gallery_name = reqObj.gallery_name;
            var image_name = reqObj.image_name;
            var query = conn.query(
                "CAll siteiformation("+"'"+site_name+"','"+last_update+"','"+latitude+"','"+longitude+"','"+receiver_sn+"','"+antenna_sn+"','"+powersource_sn+"','"+contact_id+"','"+address_one+"','"+address_two+"','"+city+"','"+province+"','"+gallery_name+"','"+image_name+"')",
             function (err, result) {
                if (err) { console.log(query)
                    console.error('SQL error: ', err);
                    return next(err);
                }
                console.log(result);
                var test_Id = result.insertId;
                res.json({
                    "test_id": test_Id 
                });
            });
        } 
    }); 
} catch (ex) { 
    console.error("Internal error:" + ex); 
    return next(ex);
}
});




/* Get antennainformation Service. */
router.get('/gettingantennainfo', function (req, res, next) {
    try {
        var antenna_serialnumber = req.param('id');
        //var employee_name = req.param('employee_name');
        /*  var query = url.parse(req.url,true).query;
                  console.log(query);
        var roleId = query.roleId;
        var deptId = query.deptId;*/
        console.log(antenna_serialnumber);
        //console.log(employee_name);
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            } else {
               var query= conn.query("CALL getantennainfo("+"'"+antenna_serialnumber+"')", function (err, rows, fields) {
                    if (err) {console.log(query)
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    var resEmp = [];
                    for (var empIndex in rows) {
                        var empObj = rows[empIndex];
                        resEmp.push(empObj);
                    }
                    res.json(resEmp);
                });
            }
        });
    } catch (ex) { 
        console.error("Internal error:" + ex);
        return next(ex);
    }
});




/* Get receiverinformation Service. */
router.get('/gettingreceiverinfo', function (req, res, next) {
    try {
        var serial_number = req.param('id');
        //var employee_name = req.param('employee_name');
        /*  var query = url.parse(req.url,true).query;
                  console.log(query);
        var roleId = query.roleId;
        var deptId = query.deptId;*/
        console.log(serial_number);
        //console.log(employee_name);
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            } else {
               var query= conn.query("CALL getreceiverinfo("+"'"+serial_number+"')", function (err, rows, fields) {
                    if (err) {console.log(query)
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    var resEmp = [];
                    for (var empIndex in rows) {
                        var empObj = rows[empIndex];
                        resEmp.push(empObj);
                    }
                    res.json(resEmp);
                });
            }
        });
    } catch (ex) { 
        console.error("Internal error:" + ex);
        return next(ex);
    }
});


/* Get get site information Service. */
router.get('/getsiteinformation', function (req, res, next) {
    try {
        var site_name = req.param('id');
        //var employee_name = req.param('employee_name');
        /*  var query = url.parse(req.url,true).query;
                  console.log(query);
        var roleId = query.roleId;
        var deptId = query.deptId;*/
        console.log(site_name);
        //console.log(employee_name);
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            } else {
               var query= conn.query("CALL getsiteinformation("+"'"+site_name+"')", function (err, rows, fields) {
                    if (err) {console.log(query)
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    var resEmp = [];
                    for (var empIndex in rows) {
                        var empObj = rows[empIndex];
                        resEmp.push(empObj);
                    }
                    res.json(resEmp);
                });
            }
        });
    } catch (ex) { 
        console.error("Internal error:" + ex);
        return next(ex);
    }
});



/* Create sitename information. */
router.post('/postsitename', function (req, res, next) {
    try {
        var reqObj = req.body;
        console.log(reqObj);
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            } else {
                var insertSql2 = "INSERT INTO site_name SET ?";
                var insertValues2 = {
                    "site_name": reqObj.site_name
                    // "receiver_type": reqObj.receivertype,
                    // "part_number": reqObj.partnumber

                };
                var query = conn.query(insertSql2, insertValues2, function (err, result) {
                    if (err) {
                        console.error('SQL error: ', err);
                        return next(err);
                       
                    }
                    console.log(result);
                    var Receiver_Id = result.insertId;
                    res.json({
                        "rece_id": Receiver_Id
                    });
                });
            }
        });
    } catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});




/* Get get site information Service. */
router.get('/sitename', function (req, res, next) {
    try {
         
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            } else {
               var query= conn.query('SELECT * from site_name', function (err, rows, fields) {
                    if (err) {console.log(query)
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    var resEmp = [];
                    for (var empIndex in rows) {
                        var empObj = rows[empIndex];
                        resEmp.push(empObj);
                    }
                    res.json(resEmp);
                });
            }
        });
    } catch (ex) { 
        console.error("Internal error:" + ex);
        return next(ex);
    }
});


/* Get get gps staff information Service. */
router.get('/gpsstaffs', function (req, res, next) {
    try {
       
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            } else {
               var query= conn.query('SELECT * from gps_staff_info', function (err, rows, fields) {
                    if (err) {console.log(query)
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    var resEmp = [];
                    for (var empIndex in rows) {
                        var empObj = rows[empIndex];
                        resEmp.push(empObj);
                    }
                    res.json(resEmp);
                });
            }
        });
    } catch (ex) { 
        console.error("Internal error:" + ex);
        return next(ex);
    }
});

/* Get all receiver information Service. */
router.get('/allreceiversn', function (req, res, next) {
    try {
        // var name = req.param('id');
        // //var employee_name = req.param('employee_name');
        // /*  var query = url.parse(req.url,true).query;
        //           console.log(query);
        // var roleId = query.roleId;
        // var deptId = query.deptId;*/
        // console.log(name);
        //console.log(employee_name);
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            } else {
               var query= conn.query('SELECT * from receiver_information', function (err, rows, fields) {
                    if (err) {console.log(query)
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    var resEmp = [];
                    for (var empIndex in rows) {
                        var empObj = rows[empIndex];
                        resEmp.push(empObj);
                    }
                    res.json(resEmp);
                });
            }
        });
    } catch (ex) { 
        console.error("Internal error:" + ex);
        return next(ex);
    }
});

/* Get all receiver information Service. */
router.get('/allantennasn', function (req, res, next) {
    try {
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            } else {
               var query= conn.query('SELECT * from antenna_information', function (err, rows, fields) {
                    if (err) {console.log(query)
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    var resEmp = [];
                    for (var empIndex in rows) {
                        var empObj = rows[empIndex];
                        resEmp.push(empObj);
                    }
                    res.json(resEmp);
                });
            }
        });
    } catch (ex) { 
        console.error("Internal error:" + ex);
        return next(ex);
    }
});



/* Get all powersource information Service. */
router.get('/allpowersourcesn', function (req, res, next) {
    try {
    
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            } else {
               var query= conn.query('SELECT * from powersource', function (err, rows, fields) {
                    if (err) {console.log(query)
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    var resEmp = [];
                    for (var empIndex in rows) {
                        var empObj = rows[empIndex];
                        resEmp.push(empObj);
                    }
                    res.json(resEmp);
                });
            }
        });
    } catch (ex) { 
        console.error("Internal error:" + ex);
        return next(ex);
    }
});



/* Get all fieldwork information Service. */
router.get('/allfieldwork', function (req, res, next) {
    try {
    
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            } else {
               var query= conn.query('SELECT * from fieldwork_table', function (err, rows, fields) {
                    if (err) {console.log(query)
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    var resEmp = [];
                    for (var empIndex in rows) {
                        var empObj = rows[empIndex];
                        resEmp.push(empObj);
                    }
                    res.json(resEmp);
                });
            }
        });
    } catch (ex) { 
        console.error("Internal error:" + ex);
        return next(ex);
    }
});

/* Get all contact person information Service. */
router.get('/allcontactperson', function (req, res, next) {
    try {
    
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            } else {
               var query= conn.query('SELECT * from contact_person', function (err, rows, fields) {
                    if (err) {console.log(query)
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    var resEmp = [];
                    for (var empIndex in rows) {
                        var empObj = rows[empIndex];
                        resEmp.push(empObj);
                    }
                    res.json(resEmp);
                });
            }
        });
    } catch (ex) { 
        console.error("Internal error:" + ex);
        return next(ex);
    }
});

/* Get all gallery_name information Service. */
router.get('/allgalleryinfo', function (req, res, next) {
    try {
    
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            } else {
               var query= conn.query('SELECT * from gallery', function (err, rows, fields) {
                    if (err) {console.log(query)
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    var resEmp = [];
                    for (var empIndex in rows) {
                        var empObj = rows[empIndex];
                        resEmp.push(empObj);
                    }
                    res.json(resEmp);
                });
            }
        });
    } catch (ex) { 
        console.error("Internal error:" + ex);
        return next(ex);
    }
});

/* Get all associated agency information Service. */
router.get('/allassociatedagency', function (req, res, next) {
    try {
    
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            } else {
               var query= conn.query('SELECT * from associated_agency', function (err, rows, fields) {
                    if (err) {console.log(query)
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    var resEmp = [];
                    for (var empIndex in rows) {
                        var empObj = rows[empIndex];
                        resEmp.push(empObj);
                    }
                    res.json(resEmp);
                });
            }
        });
    } catch (ex) { 
        console.error("Internal error:" + ex);
        return next(ex);
    }
});

/* Get all data table information Service. */
router.get('/alldatatable', function (req, res, next) {
    try {
    
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            } else {
               var query= conn.query('SELECT * from data_table', function (err, rows, fields) {
                    if (err) {console.log(query)
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    var resEmp = [];
                    for (var empIndex in rows) {
                        var empObj = rows[empIndex];
                        resEmp.push(empObj);
                    }
                    res.json(resEmp);
                });
            }
        });
    } catch (ex) { 
        console.error("Internal error:" + ex);
        return next(ex);
    }
});


/* Get all image class information Service. */
router.get('/allimageclass', function (req, res, next) {
    try {
    
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            } else {
               var query= conn.query('SELECT * from image_class', function (err, rows, fields) {
                    if (err) {console.log(query)
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    var resEmp = [];
                    for (var empIndex in rows) {
                        var empObj = rows[empIndex];
                        resEmp.push(empObj);
                    }
                    res.json(resEmp);
                });
            }
        });
    } catch (ex) { 
        console.error("Internal error:" + ex);
        return next(ex);
    }
});


/* Get all logistical notes information Service. */
router.get('/alllogisticalnote', function (req, res, next) {
    try {
    
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            } else {
               var query= conn.query('SELECT * from logistical_notes', function (err, rows, fields) {
                    if (err) {console.log(query)
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    var resEmp = [];
                    for (var empIndex in rows) {
                        var empObj = rows[empIndex];
                        resEmp.push(empObj);
                    }
                    res.json(resEmp);
                });
            }
        });
    } catch (ex) { 
        console.error("Internal error:" + ex);
        return next(ex);
    }
});

/* Get all observer information Service. */
router.get('/allobserver', function (req, res, next) {
    try {
    
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            } else {
               var query= conn.query('SELECT * from observer', function (err, rows, fields) {
                    if (err) {console.log(query)
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    var resEmp = [];
                    for (var empIndex in rows) {
                        var empObj = rows[empIndex];
                        resEmp.push(empObj);
                    }
                    res.json(resEmp);
                });
            }
        });
    } catch (ex) { 
        console.error("Internal error:" + ex);
        return next(ex);
    }
});


/* Get all office division information Service. */
router.get('/allofficedivision', function (req, res, next) {
    try {
    
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            } else {
               var query= conn.query('SELECT * from office_division', function (err, rows, fields) {
                    if (err) {console.log(query)
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    var resEmp = [];
                    for (var empIndex in rows) {
                        var empObj = rows[empIndex];
                        resEmp.push(empObj);
                    }
                    res.json(resEmp);
                });
            }
        });
    } catch (ex) { 
        console.error("Internal error:" + ex);
        return next(ex);
    }
});

/* Get all position information Service. */
router.get('/allposition', function (req, res, next) {
    try {
    
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            } else {
               var query= conn.query('SELECT * from position', function (err, rows, fields) {
                    if (err) {console.log(query)
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    var resEmp = [];
                    for (var empIndex in rows) {
                        var empObj = rows[empIndex];
                        resEmp.push(empObj);
                    }
                    res.json(resEmp);
                });
            }
        });
    } catch (ex) { 
        console.error("Internal error:" + ex);
        return next(ex);
    }
});

/* Get all scanned logsheet information Service. */
router.get('/allscannedlogsheet', function (req, res, next) {
    try {
    
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            } else {
               var query= conn.query('SELECT * from scanned_logsheet', function (err, rows, fields) {
                    if (err) {console.log(query)
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    var resEmp = [];
                    for (var empIndex in rows) {
                        var empObj = rows[empIndex];
                        resEmp.push(empObj);
                    }
                    res.json(resEmp);
                });
            }
        });
    } catch (ex) { 
        console.error("Internal error:" + ex);
        return next(ex);
    }
});

/* Get all site images information Service. */
router.get('/allsiteimages', function (req, res, next) {
    try {
    
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            } else {
               var query= conn.query('SELECT * from site_iamges', function (err, rows, fields) {
                    if (err) {console.log(query)
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    var resEmp = [];
                    for (var empIndex in rows) {
                        var empObj = rows[empIndex];
                        resEmp.push(empObj);
                    }
                    res.json(resEmp);
                });
            }
        });
    } catch (ex) { 
        console.error("Internal error:" + ex);
        return next(ex);
    }
});



/* Get all site sketch images information Service. */
router.get('/allsitesketch', function (req, res, next) {
    try {
    
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            } else {
               var query= conn.query('SELECT * from site_sketch', function (err, rows, fields) {
                    if (err) {console.log(query)
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    var resEmp = [];
                    for (var empIndex in rows) {
                        var empObj = rows[empIndex];
                        resEmp.push(empObj);
                    }
                    res.json(resEmp);
                });
            }
        });
    } catch (ex) { 
        console.error("Internal error:" + ex);
        return next(ex);
    }
});


/* Get all velocity information Service. */
router.get('/allvelocity', function (req, res, next) {
    try {
    
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            } else {
               var query= conn.query('SELECT * from velocity', function (err, rows, fields) {
                    if (err) {console.log(query)
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    var resEmp = [];
                    for (var empIndex in rows) {
                        var empObj = rows[empIndex];
                        resEmp.push(empObj);
                    }
                    res.json(resEmp);
                });
            }
        });
    } catch (ex) { 
        console.error("Internal error:" + ex);
        return next(ex);
    }
});