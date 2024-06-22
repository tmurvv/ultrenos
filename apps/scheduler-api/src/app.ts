import "dotenv/config";
import {helloWorld} from "@ultrenos/utils/build/hello-world";

import { createServer } from "./create-server";
import { dbConnect } from "./db-connect";

const startServer = async () => {
    helloWorld();
  const app = await createServer();
  const port: number = parseInt(<string>process.env.PORT, 10) || 4000;

  await dbConnect();

  app.listen(port, () => console.log(`Server running on port ${port}`));
};

startServer();
