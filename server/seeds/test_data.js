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
          URL: "https://stories.starbucks.com/",
          date: 1573550405225,
          name: "HOMEPAGE - STARBUCK US",
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
        },
        {
          URL: "https://martinfowler.com/bliki/ContinuousDelivery.html",
          date: 1573550388676,
          name: "ContinuousDelivery",
          isRead: true,
          readDate: 1573550405225,
          thumbnail: "",
          tag: ""
        },
        {
          URL:
            "https://will.koffel.org/post/2014/12-factor-apps-in-plain-english/",
          date: 1573550388676,
          name: "12 FACTOR APPS IN PLAIN ENGLISH",
          isRead: true,
          readDate: 1573550405225,
          thumbnail: "",
          tag: ""
        },
        {
          URL:
            "https://itnext.io/how-existing-redux-patterns-compare-to-the-new-redux-hooks-b56134c650d2",
          date: 1573550388676,
          name: "How Redux Connect compares to the new Redux Hooks.",
          isRead: true,
          readDate: 1573550388676,
          thumbnail: "",
          tag: ""
        }
      ]);
    });
};
