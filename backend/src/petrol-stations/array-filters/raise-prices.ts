export default [
  {
    $or: [
      {
        'elem.price': {
          $gte: 3.5,
          $lt: 4
        }
      },
      {
        'elem.price': {
          $gte: 9,
          $lt: 10.5
        }
      },
      {
        'elem.price': {
          $gte: 14,
          $lt: 15
        }
      },
      {
        'elem.price': {
          $gte: 41,
          $lt: 42
        }
      }
    ]
  }
];
