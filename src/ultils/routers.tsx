/* eslint-disable react/react-in-jsx-scope */
import { lazy } from 'react';

const Contact = lazy(() => import('../pages/Contact').then(({ Contact }) => ({ default: Contact })));
const News = lazy(() => import('../pages/News').then(({ News }) => ({ default: News })));

type RouteProps = {
  id: number;
  path: string;
  title: string;
  element: JSX.Element;
};

export const routes: RouteProps[] = [
  {
    id: 1,
    path: 'contact',
    title: 'Contact',
    element: <Contact />,
  },
  {
    id: 2,
    path: 'news',
    title: 'News',
    element: <News />,
  },
];
