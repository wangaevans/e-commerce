import { hash } from 'bcryptjs';
import { NextApiRequest, NextApiResponse } from 'next';
import DBConnect from '../../db/DBConection';
import Users from '../../models/User.model';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await DBConnect().catch((error) => console.log('Connection Failed...!'));

  // only post method is accepted
  if (req.method === 'POST') {
    if (!req.body) console.log("Don't have form data...!");
    const { username, email, password } = req.body;

    // check duplicate users
    const checkexisting = await Users.findOne({ email });
    if (checkexisting) console.log('User Already Exists...!');

    // hash password
    Users.create(
      { username, email, password: await hash(password, 12) },
      function ({ err, data }: any) {
        if (err) console.log(err);
        else {
          console.log('Created..');
          res.status(201).json({ status: true, user: data });
        }
      }
    );
  } else {
    res
      .status(500)
      .json({ message: 'HTTP method not valid only POST Accepted' });
  }
  console.log('Invalid request');
}
