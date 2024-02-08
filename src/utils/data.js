const data = {
  ducks: [
    {
      id: 0,
      name: "Dog Duck",
      description:
        'This rare duck has been spotted on a number of occasions throughout central Europe. It is said to enjoy playing with old socks that it finds in the water. Tanya Peterson was 25 when she saw this duck, she reported, "It was quite a friendly little fellow. At no time did I feel any fear. I stayed with him for maybe 15 or 20 minutes, then zoom! He zipped out of the water and across the night sky like a comet.',
      img: new URL("../assets/images/dog-duck.png", import.meta.url).href,
    },
    {
      id: 1,
      name: "Zebra Duck",
      description:
        "This skittish beauty has been sighted in central Africa. Cryptoduckologists assert that the best time to see one of these magnificent quackers is when the full moon is at its highest point on a windless night.",
      img: new URL("../assets/images/zebra-duck.png", import.meta.url).href,
    },
    {
      id: 2,
      name: "Giraffe Duck",
      description:
        'This is one of the tallest cryptoducks on record. One eyewitness reported a harrowing account of an encounter with one such creature. Thomas Maltese and his family were camping in New Jersey in the summer of 1962, "I had just put the kids to bed when I heard a rustling sound in the nearby brush. I shined my flashlight and there it was, the neck must have been 3 feet long. I still remember the quacking. Oh the terrible, terrible quacking. My life changed the night."',
      img: new URL("../assets/images/giraffe-duck.png", import.meta.url).href,
    },
    {
      id: 3,
      name: "UFO Duck",
      description:
        "Many have encountered this duck. We do not know why they continue to visit us. Perhaps they are peaceful observers, or perhaps they have more sinister intentions. It's possible we will never know.",
      img: new URL("../assets/images/ufo-duck.png", import.meta.url).href,
    },
  ],
};

export default data;
