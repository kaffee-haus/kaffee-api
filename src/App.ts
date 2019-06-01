import { App } from "./web/Server";

const port = 80;
const app = new App();

app.initialiseServer().then(() => {
  // Start listening for requests
  app.express.listen(port, () => {
    console.log(`server is listening on ${port}`);
  });
});
