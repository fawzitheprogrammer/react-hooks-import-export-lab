import { username, city, image } from "../data/user";

test("username, city, and image are all exported", () => {
  expect(username).toEqual("Kratos");
  expect(city).toEqual("Sparta");
  expect(image).toEqual("https://wallpapers.com/images/hd/god-of-war-angry-kratos-r9b8ijyeap79zcw2.jpg");
});
