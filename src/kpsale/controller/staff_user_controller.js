const connect = require('../../../connect');

const getStaffUser = (req, res) => {
    connect.query("select  us_id,user_name,user_pass,user_role,user_status,DATE_FORMAT(regis_date, '%d-%m-%Y') as regis_date from tbl_user_staff", (error, results) => {
        if (error) throw error;
        //res.status(200).json(results.rows);
        //console.log('test123');
        res.status(200).json(results);
    });
};

module.exports = {
    getStaffUser,
}