module.exports = async () => {
  console.log("seeding Database");
  for (let index = 0; index < 1000; index++) {
    const element = await Product.create({
      images: ["1598002071931.jpeg"],
      modelHeightSize: "23",
      details: "Seed Dress Evening",
      waistLine: "43",
      neckLine: "23",
      length: "23",
      fabric: "fabric",
      closure: "closure",
      dressType: "evening",
      price: "900",
      name: "Seed Dress",
      dressColor: ["#aa3c3c"],
      dressSize: ["XS"],
      rating: 5,
    });
    console.log(element);
  }
  console.log("finished seeding");
};
