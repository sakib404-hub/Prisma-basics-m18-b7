import { prisma } from "./lib/prisma";

async function main() {

//? creating a user
// const user = await prisma.user.create({
//     data : {
//         name : "Sakib Hossen Ahmed",
//         email : "saki12b@gmail.com",
//         posts : {
//             create : {
//                 title : 'This is my second Post',
//                 content : 'There is many thing around the world that we did looked for',
//                 published : true
//             }
//         }
//     },
//     include : {
//         posts : true
//     }
// })
// console.log(user);


// creating only user

// const user = await prisma.user.create({
//     data : {
//         name : 'Foysal Ahmed',
//         email : 'foysal@gmail.com',
//     }
// })
// console.log(user);


// creating only post with the author id
const post = await prisma.post.create({
    data : {
        authorId : 4,
        title : 'The end of software Engineering',
        content : 'Software engineering is going to be end in the next 10 years',
        published : true
    }
})
console.log(post);

  // Fetch all users with their posts
  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });
  console.log("All users:", JSON.stringify(allUsers, null, 2));
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });