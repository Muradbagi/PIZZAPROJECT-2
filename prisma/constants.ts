export const categories = [
  {
    name: 'Пиццы',  
  },
  {
    name: 'Завтрак',  
  },
  {
    name: 'Закуски',  
  },
  {
    name: 'Коктейли',  
  },
  {
    name: 'Напитки',  
  },
];

export const ingredients = [
    {
      name: 'Сырный бортик',
      price: 179,
      imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png',
    },
    {
      name: 'Сливочная моцарелла',
      price: 79,
      imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png',
    },
    {
      name: 'Сыры чеддер и пармезан',
      price: 79,
      imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796',
    },
    {
      name: 'Острый перец халапеньо',
      price: 59,
      imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/11ee95b6bfdf98fb88a113db92d7b3df.png',
    },
    {
      name: 'Нежный цыпленок',
      price: 79,
      imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5B328D35A',
    },
    {
      name: 'Шампиньоны',
      price: 59,
      imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA67259A324',
    },
    {
      name: 'Пикантная пепперони',
      price: 79,
      imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA6258199C3',
    },
    {
      name: 'Острая чоризо',
      price: 79,
      imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA62D5D6027',
    },
    {
      name: 'Маринованные огурчики',
      price: 59,
      imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9EA89958D782B',
    },
    {
      name: 'Свежие томаты',
      price: 59,
      imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA7AC1A1D67',
    },
    {
      name: 'Красный лук',
      price: 59,
      imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA60AE6464C',
    },
    {
      name: 'Сочные ананасы',
      price: 59,
      imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9AFA6795BA2A0',
    },
    {
      name: 'Итальянские травы',
      price: 39,
      imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/370dac9ed21e4bffaf9bc2618d258734.png',
    },
    {
      name: 'Сладкий перец',
      price: 59,
      imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA63F774C1B',
    },
    {
      name: 'Кубики брынзы',
      price: 79,
      imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA6B0FFC349',
    },
    {
      name: 'Митболы',
      price: 89,
      imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/b2f3a5d5afe44516a93cfc0d2ee60088.png',
    },
  ].map((obj, index) => ({ id: index + 1, ...obj}));

export const products = [
  {
    name: 'Омлет с пепперони',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE94ECF33B0C46BA410DEC1B1DD6F8.avif',
    categoryId: 2,
  },  
  {
    name: 'Омлет сырный',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE797033873EB1B4B77F7E70BBA37E.avif',
    categoryId: 2,
  },     
  {
    name: 'Кофе Латте',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D61B0C26A3F85D97A78FEEE00AD.avif',
    categoryId: 2,
  },  
  {
    name: 'Дэнвич чоризо барбекю',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE796FF041FE1F94C903576DCFD01E.avif',
    categoryId: 3,
  },  
  {
    name: 'Куриные кусочки',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE89332D4EE705914D0484EF352D13.avif',
    categoryId: 3,
  },
  {
    name: 'Кортофель из печи с соусом',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EED646A9CD324C962C6BEA78124F19.avif',
    categoryId: 3,
  },
  {
    name: 'Додстер',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE796F96D11392A2F6DD73599921B9.avif',
    categoryId: 3,
  },  
  {
    name: 'Острый Додстер',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE796FD3B594068F7A752DF8161D04.avif',
    categoryId: 3,
  },    
  {
    name: 'Молочный коктейль Ежевика-малина',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EEB92C801211CBAF91BB30F77568C5.avif',
    categoryId: 4,
  },  
  {
    name: 'Молочный коктейль Пина Колада',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EEA69C98929AD79D1ADB5EF4CF22BB.avif',
    categoryId: 4,
  },  
  {
    name: 'Шоколадный молочный коктейль',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE796FA24D1E919FA050D8BA21F8E9.avif',
    categoryId: 4,
  },  
  {
    name: 'Кофе Ореховый латте',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D61B12220AB911FF4FA42EF585D.avif',
    categoryId: 5,
  },  
  {
    name: 'Кофе Карамельный капучино',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D61AED6B6D4BFDAD4E58D76CF56.avif',
    categoryId: 5,
  },  
  {
    name: 'Кофе Американо',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D61B044583596548A59078BBD33.avif',
    categoryId: 5,
  },  
  {
    name: 'Айс Капучино',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EEFB6985E52B9FA2C985EBC42C7E64.avif',
    categoryId: 5,
  },  
]