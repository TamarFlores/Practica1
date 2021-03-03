import UserModel from "../models/userModel.js";
var inittest = async () => {
  var usermodel = new UserModel();
  /*usermodel.createUser(
    "Test1",
    "gvgvghvkghvgkhv",
    "test@gmail.com",
    "1234"
  );
  usermodel.createUser(
    "Test2",
    "ghvhjguhbu",
    "test2@gmail.com",
    "1234"
  );
  usermodel.createUser(
    "Test1",
    "uyhiuhiuhui",
    "test3@gmail.com",
    "1234"
  );
  usermodel.createUser(
    "Test1",
    "ihyuhuoh",
    "test4@gmail.com",
    "1234"
  );
  console.log(await usermodel.getUsers());*/
  //usermodel.deleteUser("60146018e49f7308a951795c");

  //await usermodel.updateModel("60146018e49f7308a951795d", { name: "Ramon" });
  //console.log(await usermodel.getUsers());
};
inittest();
