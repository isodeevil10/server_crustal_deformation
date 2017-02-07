var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express server index' });
// });

module.exports = router;

/* Create Employee Service. 
   staff_id just leave it blank
*/
router.post('/userinformationdetails', function (req, res, next) {
    try {
        var reqObj = req.body;
        console.log(reqObj);
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            } else {
                var insertSql = "INSERT INTO gps_staff_info SET ?";
                var insertValues = {
                    "first_name": reqObj.firstName,
                    "last_name": reqObj.lastName,
                    "position_id": reqObj.position,
                    "contact_num": reqObj.contactNumber,
                    "nicknames": reqObj.nickname,
                    "division_id": reqObj.division,
                    "email_address": reqObj.emailadd,
                    "office_location": reqObj.officelocation
                };
                var query = conn.query(insertSql, insertValues, function (err, result) {
                    if (err) {
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    console.log(result);
                    var Employee_Id = result.insertId;
                    res.json({
                        "Emp_id": Employee_Id
                    });
                });
            }
        });
    } catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});

// /* Create Contact Service. */
router.post('/contactinformationdetails', function (req, res, next) {
    try {
        var reqObj = req.body;
        console.log(reqObj);
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            } else {
                var insertSql1 = "INSERT INTO contact_person SET ? ";

                var insertValues1 = {
                    "site_name": reqObj.sitename,
                    "first_name": reqObj.firstName,
                    "last_name": reqObj.lastName,
                    "position": reqObj.position,
                    "contact_number": reqObj.contactnumber,
                    "organization": reqObj.organization,
                    "email_add": reqObj.emailAdd,
                };
                var query = conn.query(insertSql1, insertValues1, function (err, result) {
                    if (err) {
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    console.log(result);
                    var Contact_Id = result.insertId;
                    res.json({
                        "Cont_id": Contact_Id
                    });
                });
            }
        });
    } catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});



/* Create Contact address Service. */
router.post('/contactaddressdetails', function (req, res, next) {
    try {
        var reqObj = req.body;
        console.log(reqObj);
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            } else {
                var insertSql4 = "INSERT INTO address_contactperson SET ? ";

                var insertValues4 = {
                    "address_name": reqObj.addressname,
                    "address_one": reqObj.addOne,
                    "address_two": reqObj.addTwo,
                    "city": reqObj.city,
                    "province": reqObj.prov
                };
                var query = conn.query(insertSql4, insertValues4, function (err, result) {
                    if (err) {
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    console.log(result);
                    var Contadd_Id = result.insertId;
                    res.json({
                        "Conadd_id": Contadd_Id
                    });
                });
            }
        });
    } catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});


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
                    "antenna_serialnumber": reqObj.serialnumber,
                    "antenna_charcode": reqObj.antennacharcode,
                    "antenna_name": reqObj.antennaname,
                    "antenna_type": reqObj.antennatype

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






/* Create site information. */
router.post('/siteinformation', function (req, res, next) {
    try {
        var reqObj = req.body;
        console.log(reqObj);
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            } else {
                var insertSql5 = "INSERT INTO site_information SET ?";
                var insertValues5 = {
                    "site_name": reqObj.sitename,
                    "latitude": reqObj.latitude,
                    "longitude": reqObj.longitude,
                    "receiver_sn": reqObj.receiversn,
                    "antenna_sn":reqObj.antennasn,
                    "powersource_sn": reqObj.powersourcesn,
                    "survey_type": reqObj.surveytype
                    

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



/* Create incident report information. */
router.post('/reportinformation', function (req, res, next) {
    try {
        var reqObj = req.body;
        console.log(reqObj);
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            } else {
                var insertSql5 = "INSERT INTO incident_report SET ?";
                var insertValues5 = {
                   "incident_report": reqObj.sitename,
                   "date": reqObj.date,
                   "comment":reqObj.comment,
                   "incident_report_type": reqObj.surveytype
                
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
                   "ps_serial_number": reqObj.powersourceserial,
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



// /* Create Contact Service. */
// router.post('/contactinformationdetails', function (req, res, next) {
//     try {
//         var reqObj = req.body;
//         console.log(reqObj);
//         req.getConnection(function (err, conn) {
//             if (err) {
//                 console.error('SQL Connection error: ', err);
//                 return next(err);
//             } else {
//                 var insertSql1 = "INSERT INTO contact_person SET ? ";

//                 var insertValues1 = {
//                     "site_name": reqObj.sitNam,
//                     "first_name": reqObj.firName,
//                     "last_name": reqObj.lastName,
//                     "position": reqObj.posId,
//                     "contact_number": reqObj.conNum,
//                     "organization": reqObj.orga1,
//                     "email_add": reqObj.emaAdd1,
//                 };
//                 var query = conn.query(insertSql1, insertValues1, function (err, result) {
//                     if (err) {
//                         console.error('SQL error: ', err);
//                         return next(err);
//                     }
//                     console.log(result);
//                     var Contact_Id = result.insertId;
//                     res.json({
//                         "Cont_id": Contact_Id
//                     });
//                     query.end()
//                     saveContactPersonAddress(reqObj, conn)
                    
//                 });
//             }
//         });
//     } catch (ex) {
//         console.error("Internal error:" + ex);
//         return next(ex);
//     }
// });



// function saveContactPersonAddress(reqObj, conn) {
//     let insertSql5 = "INSERT INTO address_contactperson SET ? ";

//     let insertValues5 = {
//         "address_name": reqObj.addNam,
//         "address_one": reqObj.addOne,
//         "address_two": reqObj.addTwo,
//         "city": reqObj.city,
//         "province": reqObj.prov
//     };
//         let query1 = conn.query(insertSql5, insertValues5, function (err, result) {
//         if (err) {
//             console.error('SQL error: ', err);
//             return next(err);
//         }
//         console.log(result);
//     });
// }






/* Get Employee Service. */
router.get('/testgettinginfo', function (req, res, next) {
    try {
        var employee_id = req.param('employee_id');
        //var employee_name = req.param('employee_name');
        /*  var query = url.parse(req.url,true).query;
                  console.log(query);
        var roleId = query.roleId;
        var deptId = query.deptId;*/
        console.log(employee_id);
        //console.log(employee_name);
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            } else {
                conn.query('CALL test3(?)', employee_id, function (err, rows, fields) {
                    if (err) {
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
 


router.post('/test', function (req, res, next) {
try {
    var reqObj = req.body;
    console.log(reqObj);
    req.getConnection(function (err, conn) {
        if (err) {
            console.error('SQL Connection error: ', err);
            return next(err);
        } else {
            // let  employee_id = reqObj.employee_id
            //  let employee_name =reqObj.name1
            //  let  employee_contact = reqObj.contact
            //var insertSql6 = "CAll test3('employee_name','employee_contact')";
        //    var insertValues6 = (
            //    "employee_id": reqObj.empid,
              var employee_name =  reqObj.employee_name;
            var  employee_contact = reqObj.employee_contact;
            var employee_position =  reqObj.employee_position;
        //    );
            var query = conn.query("CAll test3("+"'"+employee_name+"','"+employee_contact+"','"+employee_position+"')", function (err, result) {
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

