const Cat = require('../Cat');

Cat.sync({ force: true })
  .then(() => {
    Cat.bulkCreate([
      {
        name: 'Donald',
        breed: 'tabby',
        imgUrl: 'https://ca-times.brightspotcdn.com/dims4/default/fd8c1a8/2147483647/strip/true/crop/1611x906+0+0/resize/1200x675!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ffd%2Fef%2F05c1aab3e76c3d902aa0548c0046%2Fla-la-hm-pet-issue-18-jpg-20150615',
        likes: 0
      },
      {
        name: 'Sammy',
        breed: 'british short hair',
        imgUrl: 'https://lolcats.com/wp-content/uploads/2021/08/BS-8.jpg',
        likes: 0
      },
      {
        name: 'Angel',
        breed: 'siamese',
        imgUrl: 'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQgwWTl6RtTmc4fezxTXkqWRqHFee0_4pJYBdz8eLjv6JYnLuRpo_NlsyL5UZe-uw1NsbLlDaykFowkQ2o',
        likes: 0
      },
    ]);
  });


