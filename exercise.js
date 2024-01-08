// Провести глибоку деструктуризацію об’єкту

const musicLibrary = {
  count: 2,
  artists: [
    {
      name: "The Beatles",
      albums: [
        {
          title: "Sgt. Pepper's Lonely Hearts Club Band",
          year: 1967,
          tracks: [
            { title: "With a Little Help from My Friends", duration: "2:44" },
            { title: "Lucy in the Sky with Diamonds", duration: "3:28" },
            { title: "A Day in the Life", duration: "5:33" },
          ],
        },
        {
          title: "Abbey Road",
          year: 1969,
          tracks: [
            { title: "Come Together", duration: "4:19" },
            { title: "Something", duration: "3:01" },
            { title: "Here Comes the Sun", duration: "3:06" },
          ],
        },
      ],
    },
    {
      name: "Pink Floyd",
      albums: [
        {
          title: "The Wall",
          year: 1979,
          tracks: [
            { title: "Another Brick in the Wall, Part 2", duration: "3:59" },
            { title: "Comfortably Numb", duration: "6:23" },
            { title: "Hey You", duration: "4:40" },
          ],
        },
        {
          title: "Dark Side of the Moon",
          year: 1973,
          tracks: [
            { title: "Speak to Me/Breathe", duration: "3:58" },
            { title: "Time", duration: "7:06" },
            { title: "Money", duration: "6:22" },
          ],
        },
      ],
    },
  ],
};

// Деструктуризація

const {
  count,
  artists: [
    {
      name: artist1Name,
      albums: [
        {
          title: artist1AlbumTitle1,
          year: artist1AlbumTitle2,
          tracks: [
            { title: artist1Album1Track1 },
            { title: artist1Album1Track2 },
            { title: artist1Album1Track3 },
          ],
        },
        {
          title: artist1Album2Title,
          year: artist1Album2Year,
          tracks: [
            { title: artist1Album2Track1 },
            { title: artist1Album2Track2 },
            { title: artist1Album2Track3 },
          ],
        },
      ],
    },
    {
      name: artist2Name,
      albums: [
        {
          title: artist2AlbumTitle1,
          year: artist2AlbumTitle2,
          tracks: [
            { title: artist2Album1Track1 },
            { title: artist2Album1Track2 },
            { title: artist2Album1Track3 },
          ],
        },
        {
          title: artist2Album2Title,
          year: artist2Album2Year,
          tracks: [
            { title: artist2Album2Track1 },
            { title: artist2Album2Track2 },
            { title: artist2Album2Track3 },
          ],
        },
      ],
    },
  ],
} = musicLibrary;

console.log(
  count,
  artist1Name,
  artist1AlbumTitle1,
  artist1AlbumTitle2,
  artist1Album1Track1,
  artist1Album1Track2,
  artist1Album1Track3,
  artist1Album2Title,
  artist1Album2Year,
  artist1Album2Track1,
  artist1Album2Track2,
  artist1Album2Track3,
  artist2Name,
  artist2AlbumTitle1,
  artist2AlbumTitle2,
  artist2Album1Track1,
  artist2Album1Track2,
  artist2Album1Track3,
  artist2Album2Title,
  artist2Album2Year,
  artist2Album2Track1,
  artist2Album2Track2,
  artist2Album2Track3
);
