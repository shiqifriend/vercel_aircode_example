import type { VercelRequest, VercelResponse } from "@vercel/node";

export default (request: VercelRequest, response: VercelResponse) => {
  const { name } = request.query;
  // response.setHeader("Content-Type", "application/json");
  console.log("xxxxxxxxxxxxxxxxxxxx", request.body);
  response
    .status(200)
    .send('{"msg_type":"text","content":{"text":"request example"}}');
};
