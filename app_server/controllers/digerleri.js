const hakkinda = function (req, res, next) {
    res.render('hakkinda', {
        title: 'Hakkında',
        'footer': 'Şimal Çeler 2020'
    });
}

module.exports = {

    hakkinda
}