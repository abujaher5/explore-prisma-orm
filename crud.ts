import { prisma } from "./lib/prisma";

async function run() {
  // const createUser = await prisma.user.create({
  //   data: {
  //     name: "Jaher",
  //     email: "jaher@gmail.com",
  //   },
  // });
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
  //   const users = await prisma.user.findMany({
  //     // include: {
  //     //   posts: true,
  //     //   profile: true,
  //     // },
  //     select: {
  //       id: true,
  //       name: true,
  //       email: true,
  //       posts: true,
  //       profile: true,
  //     },
  //   });
  //   console.dir(users, { depth: Infinity });
  // --- UPDATE USER ---
  //   const updateUser = await prisma.profile.update({
  //     where: {
  //       userId: 1,
  //     },
  //     data: {
  //       bio: "Web Developer and Mentor Nothing...",
  //       dateOfBirth: "2026-01-15T05:58:20.750Z",
  //     },
  //     select: {
  //       id: true,
  //       bio: true,
  //       user: {
  //         select: {
  //           id: true,
  //           name: true,
  //           email: true,
  //         },
  //       },
  //     },
  //   });
  //   console.log(updateUser);

  // --- UPSERT USER/DATA ---

  const upsertUser = await prisma.user.upsert({
    where: {
      email: "jamal@gmail.com",
    },
    update: {
      name: "Only Jamal",
    },
    create: {
      name: "Jamal Sheikh",
      email: "jamalsheikh@gmail.com",
    },
  });
  console.log(upsertUser);

  // --- GET USER DATA BY id ---

  //   const getSingleUserById = await prisma.user.findUnique({
  //     where: {
  //       id: 2,
  //     },
  //     include: {
  //       posts: true,
  //       profile: true,
  //     },
  //   });
  //   console.log(getSingleUserById);

  // --- DELETE USER ---
  //   const deleteUser = await prisma.user.delete({
  //     where: {
  //       id: 2,
  //     },
  //   });
  //   console.log(deleteUser);
}
run();
