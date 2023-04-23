import { app } from "./app/index";
const PORT: any = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server listening at port: ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
