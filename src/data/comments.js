export const getCommentsData = async () => {
    return [
      {
        _id: "10",
        user: {
          _id: "a",
          name: "Ali Abdulameer",
        },
        desc: "Cool post! love her music.",
        post: "1",
        parent: null,
        replyOnUser: null,
        createdAt: "2022-12-31T17:22:05.092+0000",
      },
      {
        _id: "11",
        user: {
          _id: "b",
          name: "Phoebe Bridgers",
        },
        desc: "Thank you, I appereciate all of my fans <3",
        post: "1",
        parent: "10",
        replyOnUser: "a",
        createdAt: "2022-12-31T17:22:05.092+0000",
      },
      {
        _id: "12",
        user: {
          _id: "b",
          name: "Mitski",
        },
        desc: "Good work, I am touched",
        post: "1",
        parent: null,
        replyOnUser: null,
        createdAt: "2022-12-31T17:22:05.092+0000",
      },
      {
        _id: "13",
        user: {
          _id: "c",
          name: "Mitski",
        },
        desc: "Need you to write an article about me!!",
        post: "1",
        parent: null,
        replyOnUser: null,
        createdAt: "2022-12-31T17:22:05.092+0000",
      },
    ];
  };