exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("coffeetime")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("coffeetime").insert([
        {
          URL: "https://www.starbucks.co.jp/",
          date: 1573550388676,
          name: "HOMEPAGE - STARBUCK JAPAN",
          isRead: false,
          readDate: "",
          thumbnail: "",
          tag: ""
        },
        {
          URL:
            "https://stories.starbucks.com/stories/2019/make-merry-at-starbucks-this-holiday/",
          date: 1573550405225,
          name: "Make merry at Starbucks this holiday season",
          isRead: false,
          readDate: "",
          thumbnail: "",
          tag: ""
        }
      ]);
    });
};
