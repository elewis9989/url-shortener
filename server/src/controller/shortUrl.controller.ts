import { Request, Response } from 'express';
import shortUrl from '../models/shortUrl.model';
import analytics from '../models/analytics.model';

export async function createShortUrl(req: Request, res: Response) {
  // Get destination
  const { destination } = req.body;

  // Create shortUrl
  const newUrl = await shortUrl.create({ destination });
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  // Return shortUrl
  res.send(newUrl);
}

export async function handleRedirect(req: Request, res: Response) {
  const { shortId } = req.params;

  const short = await shortUrl.findOne({ shortId }).lean();

  if (!short) {
    return res.sendStatus(404);
  }

  analytics.create({ shortUrl: short._id });

  return res.redirect(short.destination);
}

export async function getAnalytics(req: Request, res: Response) {
  const data = await analytics.find({}).lean();

  return res.send(data);
}
