import {useRoutes} from 'react-router-dom';
import { About } from '../pages/About';
import { Home } from '../pages/Home';
import { Skills } from '../pages/Skills';
import { Projects } from '../pages/Projects';

export const MainRoute = () => {
  return useRoutes([
    {path:"/", element:<Home/>},
    {path:"/sobre", element:<About/>},
    {path:"/skills", element:<Skills/>},
    {path:"/projetos", element:<Projects/>},
    
  ])
}