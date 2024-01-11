import { app } from "./app";
import connectDB from "./db";

const PORT = process.env.PORT || 8080;

connectDB()
  .then(() => {
    app.listen(PORT, () => console.log(`Server is running on PORT:${PORT}`));
  })
  .catch((error) => {
    console.log("error", error);
  });
