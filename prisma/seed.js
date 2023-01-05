const prisma = require("./prisma");

const { users, categories, events, days } = require("./seedData");

const seedDb = async () => {
  console.log("creating users...");
  await Promise.all(
    users.map(async (user) => {
      return prisma.users.create({
        data: user,
      });
    })
  );

  console.log("creating categories...");
  await Promise.all(
    categories.map(async (category) => {
      return prisma.categories.create({
        data: category,
      });
    })
  );

  console.log("creating days...");
  await Promise.all(
    days.map(async (day) => {
      return prisma.days.create({
        data: day,
      });
    })
  );

  console.log("creating events...");
  await Promise.all(
    events.map(async (event) => {
      return prisma.events.create({
        data: event,
      });
    })
  );
};

const initDb = async () => {
  try {
    await seedDb();
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
};

initDb();
