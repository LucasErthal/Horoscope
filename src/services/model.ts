interface Horoscope {
  description: string;
  sign: string;
  title: string;
}

interface Request {
  result: [
    {
      dt: string;
      horoscopes: Array<Horoscope>;
    }
  ]
}