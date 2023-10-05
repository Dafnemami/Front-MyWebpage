
import { createBrowserRouter, RouterProvider, redirect} from 'react-router-dom';
import Layout from './pages/Layout';
import Landing from './pages/Landing/Landing';


function Router() {
    const router = createBrowserRouter([
      {
        path: '/',
        element: <Layout />,
        children: [
          {
            path: '',
            element: <Landing />
          },
          {
            path: 'createGame',
            element: <createGame />
          }
        ]
      },
      {
        path: '*', 
        loader: () => {
          return redirect('/')
        }
      }
    ])
  
    return (
      <RouterProvider router={router} />
    );
}
  
export default Router;