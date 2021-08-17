import prisma from "db"; // Import prisma

// --> /api/events/callback
export default async (req, res) => {
  const crypto = require('crypto');
  const data = req.body;
  const auth = req.headers.authorization;

  const toBase64 = value => Buffer.from(value, "utf8").toString("base64");

  const isValidAuth = (value, secret) => {
    const givenSecret = String(value).split(' ')[1];

    if (!givenSecret || givenSecret.length !== secret.length) {
      return false;
    }

    return crypto.timingSafeEqual(
      Buffer.from(givenSecret, "base64"),
      Buffer.from(secret, "base64")
    );
  };

  const secret = toBase64(process.env.APP_SECRET);

  if (isValidAuth(auth, secret)) {
    const hash = data.message.split(';')[0];

    // Collect voter information
    const user = await prisma.voters.findFirst({
      // With user id from message
      where: {
        hash: hash,
      },
      // And selecting the hashed message representing the vote data
      select: {
        id: true,
      },
    });

    if (user) {
      // Update voter object
      await prisma.voters.update({
        // With user id from message
        where: { id: user.id },
        // With signature and public key from payload
        data: {
          signature: data.signature,
          public_key: data.publicKey,
        },
      });
      // Upon success, respond with 200
      res.status(200).send("Successful update");
    } else {
      // If user does not exist, respond with 400
      res.status(400).send("Invalid voter id")
    }
  } else {
    // If bearer token is invalid, respond with 401
    res.status(401).send("Unauthorized")
  }
};
