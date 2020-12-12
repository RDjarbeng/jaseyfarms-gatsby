import { data } from '../../content/vegesData.json'
// console.log( data);
  let initial ={
    width: 4,
    height: 3,
  }
export const photos = data.map((value) => ({
        ...value, ...initial 
    }
    )
)

// console.log('*****', photos);
//   [
//   {
//     src: "/img/v1.jpg",
//     width: 4,
//     height: 3,
//     title: "Lettuce",
//   },
//   {
//     src: "/img/v2.png",
//     width: 4,
//     height: 3,
//     title: "Tomato",
//   },
//   {
//     src: "/img/v3.jpg",
//     width: 4,
//     height: 3,
//     title: "Spinach",
//   },
//   {
//     src: "/img/v4.jpg",
//     width: 4,
//     height: 3,
//     title: "Carrot",
//   },
//   {
//     src: "/img/v5.jpg",
//     width: 4,
//     height: 3,
//     title: "Sweet Pepper",
//   },
//   {
//     src: "/img/v6.jpg",
//     width: 4,
//     height: 3,
//     title: "Okra",
//   },
//   {
//     src: "/img/v7.png",
//     width: 4,
//     height: 3,
//     title: "Cucumber",
//   },
//   {
//     src: "/img/v8.jpg",
//     width: 4,
//     height: 3,
//     title: "Chili Pepper",
//   },
//   {
//     src: "/img/v9.jpg",
//     width: 4,
//     height: 3,
//     title: "Egg Plant",
//   },
//   {
//     src: "/img/v10.png",
//     width: 4,
//     height: 3,
//   },
//   {
//     src: "/img/v11.png",
//     width: 4,
//     height: 3,
//   },
//   {
//     src: "/img/v12.jpg",
//     width: 4,
//     height: 3,
//   },
// ]
