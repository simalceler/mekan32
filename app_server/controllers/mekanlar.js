const anaSayfa = function (req, res, next) {
  res.render('mekanlar-liste',
    {
      'baslik': 'Anasayfa',
      'footer': 'Şimal Çeler 2020',
      'sayfaBaslik': {
        'siteAd': 'Mekan32',
        'aciklama': 'Isparta civarındaki mekanları keşfedin'
      },
      'mekanlar': [
        {
          'ad': 'Starbucks',
          'adres': 'Centrum Garden AVM',
          'puan': 3,
          'imkanlar': ['Dünya Kahveleri', 'Kekler', 'Pastalar'],
          'mesafe': '10km'
        },
        {
          'ad': 'Starbucks',
          'adres': 'Centrum Garden AVM',
          'puan': 3,
          'imkanlar': ['Dünya Kahveleri', 'Kekler', 'Pastalar'],
          'mesafe': '10km'
        },
        {
          'ad': 'Starbucks',
          'adres': 'Centrum Garden AVM',
          'puan': 3,
          'imkanlar': ['Dünya Kahveleri', 'Kekler', 'Pastalar'],
          'mesafe': '10km'
        },
        {
          'ad': 'Starbucks',
          'adres': 'Centrum Garden AVM',
          'puan': 3,
          'imkanlar': ['Dünya Kahveleri', 'Kekler', 'Pastalar'],
          'mesafe': '10km'
        },
        {
          'ad': 'Starbucks',
          'adres': 'Centrum Garden AVM',
          'puan': 3,
          'imkanlar': ['Dünya Kahveleri', 'Kekler', 'Pastalar'],
          'mesafe': '10km'

        }
      ]
    }
  );
}

const mekanBilgisi = function (req, res, next) {
  res.render('mekan-detay', {
    'baslik': 'Mekan Bilgisi',
    'footer': 'Şimal Çeler 2020',
    'sayfaBaslik': 'Starbucks',
    'mekanBilgisi': {
      'ad': 'Starbucks',
      'adres': 'Centrum Garden AVM',
      'puan': 3,
      'imkanlar': ['Dünya Kahveleri', 'Kekler', 'Pastalar'],
      'koordinatlar': {
        'enlem': '37.781885',
        'boylam': '30.566034'
      },
      'saatler': [
        {
          'gunler': 'Pazartesi-Cuma',
          'acilis': '07:00',
          'kapanis': '23:00',
          'kapali': false
        },
        {
          'gunler': 'Pazartesi-Cuma',
          'acilis': '07:00',
          'kapanis': '23:00',
          'kapali': false
        },
        {
          'gunler': 'Pazartesi-Cuma',
          'acilis': '07:00',
          'kapanis': '23:00',
          'kapali': false
        },
        {
          'gunler': 'Pazartesi-Cuma',
          'acilis': '07:00',
          'kapanis': '23:00',
          'kapali': false
        },
        {
          'gunler': 'Pazartesi-Cuma',
          'acilis': '07:00',
          'kapanis': '23:00',
          'kapali': false
        },
        {
          'gunler': 'Pazar',
          'kapali': true
        }
      ],
      'yorumlar': [
        {
          'yorumYapan': 'Şimal Çeler',
          'puan': 3,
          'tarih': '27.11.2020',
          'yorumMetni': 'Kahveleri güzel.'
        }
      ]
    }
  });
}


const yorumEkle = function (req, res, next) {
  res.render('yorum-ekle', {
    tittle: 'YorumEkle',
    'footer': 'Şimal Çeler 2020'
  });
}

module.exports = {
  anaSayfa,
  mekanBilgisi,
  yorumEkle
}