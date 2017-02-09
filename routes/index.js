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
           
            var employee_name =  reqObj.employee_name;
            var  employee_contact = reqObj.employee_contact;
            var employee_position =  reqObj.employee_position;
            var query = conn.query(
                "CAll test3("+"'"+employee_name+"','"+employee_contact+"','"+employee_position+"')",
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

router.post('/test', function (req, res, next) {
    var makeQuery = function(data) {
        var { employee_name,
             employee_contact, 
             employee_position } = data;
        return `CAll test3('${employee_name}', '${employee_contact}', '${employee_position}')`;
    };

    req.getConnection(function (err, conn) {
        if (err) return next(err);

        conn.query(makeQuery(req.body), function (err, res) {
            if (err) return next(err);

            res.json({
                "test_id": res.insertId
            });
        });
    });
});




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
            var position_id =  reqObj.position;
            var contact_num =  reqObj.contact_num;
            var division_id = reqObj.division_id;
            var email_address =  reqObj.email_address;
            var office_location =  reqObj.office_location;
         
           

            var query = conn.query(
                "CAll gpsstaff("+"'"+first_name+"','"+last_name+"','"+position_id+"','"+contact_num+"','"+division_id+"','"+email_address+"','"+office_location+"')",
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

// router.post('/logsheetdetails', function (req, res, next) {
//     var makeQuery = function(data) {
//         var { logsheet_date,site_id,julian_day,
//             marker,receiver_id,antenna_id,height,
//             north, east, south, west,
//              time_start, time_end,
//             azimuth, scan_log_id,
//             power_source, failure_time,
//             receiver_status, antenna_status,
//             rod_num, rod_correction,
//             avg_slant_height,netmask, ip_add,
//             gateway,dns,local_tcp_port, latittude,longitude,site_sketch_id,
//             observed_situation,lodging_road_information,
//             contact_id,others} = data;
//         return `CAll logsheet('${logsheet_date}', '${site_id}', '${julian_day}', '${marker}', '${receiver_id}', '${antenna_id}', '${height}', '${north}', '${east}', '${south}', '${west}', '${time_start}', '${time_end}', '${azimuth}', '${scan_log_id}', '${power_source}', '${failure_time}', '${receiver_status}', '${antenna_status}', '${rod_num}', '${rod_correction}', '${avg_slant_height}', '${ip_add}', '${netmask}', '${gateway}', '${dns}', '${local_tcp_port}', '${latittude}', '${longitude}', '${site_sketch_id}', '${observed_situation}', '${lodging_road_information}', '${contact_id}', '${others}')`;
//     };

//     req.getConnection(function (err, conn) {
//         if (err) return next(err);

//         conn.query(makeQuery(req.body), function (err, res) {
//             if (err) return next(err);

//             // res.json({
//             //     "test_id": res.insertId
//             // });
//         });
//     });
// });



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
            // var site_id                   = reqObj.site_id  ;
            var julian_day                = reqObj.julian_day; 
            var marker                    = reqObj.marker  ;
            // var receiver_id               = reqObj.receiver_id ;
            // var antenna_id                = reqObj.antenna_id ;
            var height                    = reqObj.height ;
            var north                     = reqObj.north ;
            var east                      = reqObj.east ;
            var south                     = reqObj.south;
            var west                      = reqObj.west  ;
            var time_start                = reqObj.time_start; 
            var time_end                  = reqObj.time_end ;
            var azimuth                   = reqObj.azimuth  ;
            // var scan_log_id               = reqObj.scan_log_id; 
            // var power_source              = reqObj.power_source;  
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