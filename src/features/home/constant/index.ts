export interface Thread {
  id: number;
  name: string;
  body: string;
  like?: number;
  comment?: number;
  time?: string | Date;
}

export const threads: Thread[] = [
  {
    id: 1,
    name: 'Muhammad Fikri',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, aut.',
    like: 100,
    comment: 5,
    time: '2022-07-31 05:20:30',
  },
  {
    id: 2,
    name: 'John Doe',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, aut.',
    like: 50,
    comment: 5,
    time: '2024-08-22 05:20:30',
  },
  {
    id: 3,
    name: 'Nugraha',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, aut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, aut.. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, aut.. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, aut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, aut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, aut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, aut.',
    like: 45,
    comment: 5,
    time: '2024-04-20 11:47:21',
  },
  {
    id: 4,
    name: 'Muhamad Gibran',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, aut.',
    like: 37,
    comment: 5,
    time: '2003-06-11 10:47:14',
  },
  {
    id: 5,
    name: 'Riza',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, aut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, aut.. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, aut.. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, aut. Lorem ipsum dolor sit amet consectetur adipis',
    like: 69,
    comment: 5,
    time: '2013-09-29 05:02:20',
  },
  {
    id: 6,
    name: 'Robi Nugraha',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, aut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, aut.. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, aut.. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, aut. Lorem ipsum dolor sit amet consectetur adipis',
    like: 81,
    comment: 5,
    time: '2024-09-14 00:49:46',
  },
];
