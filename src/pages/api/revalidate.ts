import { NextApiRequest, NextApiResponse } from 'next';

import { env } from 'env/server.mjs';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.query.secret !== env.REVALIDATION_SECRET) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  try {
    await res.revalidate('/');
    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).send('Error revalidating');
  }
};

export default handler;
