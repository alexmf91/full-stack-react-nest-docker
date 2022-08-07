export default [
  {
    $or: [
      {
        'elem.capacity': 1,
        'elem.price': {
          $gte: 4
        }
      },
      {
        'elem.capacity': 3,
        'elem.price': {
          $gte: 10.5
        }
      },
      {
        'elem.capacity': 5,
        'elem.price': {
          $gte: 15
        }
      },
      {
        'elem.capacity': 15,
        'elem.price': {
          $gte: 42
        }
      }
    ]
  }
];
