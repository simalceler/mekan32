
const anaSayfa = function (req, res, next) {
    res.render('mekanlar-liste', {
        title: 'Anasayfa',
        'footer': 'Simal Celer 2020'
    });
}

const mekanBilgisi = function (req, res, next) {
    res.render('mekan-detay', {
        title: 'Mekan Bilgisi',
        'footer': 'Simal Celer 2020'
    });
}

const yorumEkle = function (req, res, next) {
    res.render('yorum-ekle', {
        title: 'Yorum Ekle',
        'footer': 'Simal Celer 2020'
    });
}

module.exports = {
    anaSayfa,
    mekanBilgisi,
    yorumEkle
}
