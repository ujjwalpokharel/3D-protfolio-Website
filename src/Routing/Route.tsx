import { createBrowserRouter, RouterProvider } from 'react-router-dom';

export const Route = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      children: [
        {
          index: true,
          Component: () => <>Home</>,
        },
        {
          path: 'about',
          Component: () => <>About </>,
        },
        {
          path: 'projects',
          Component: () => <>Projects</>,
        },
        {
          path: 'contact',
          Component: () => <>contact</>,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
