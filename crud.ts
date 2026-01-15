import { prisma } from "./lib/prisma";

async function run() {
  //   const createUser = await prisma.user.create({
  //     data: {
  //       name: "Jaher",
  //       email: "jaher@gmail.com",
  //     },
  //   });
  //   console.log("Created User", createUser);

  // --- CREATE POST ---
  //   const createPost = await prisma.post.create({
  //     data: {
  //       title: "This is title for post.",
  //       content: "This is content.",
  //       authorId: 5,
  //     },
  //   });
  //   console.log("Created Post", createPost);

  // --- CREATE PROFILE ---

  //   const createProfile = await prisma.profile.create({
  //     data: {
  //       bio: "This is bio..",
  //       userId: 1,
  //     },
  //   });
  //   console.log("CreatedProfile", createProfile);

  // --- GET ALL USERS ---
  const users = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true,
    },
  });
  console.dir(users, { depth: Infinity });
}
run();
