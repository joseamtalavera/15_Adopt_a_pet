import HomePage from './pages/home';
import SearchPage from './pages/search';
import PetDetailsPage from './pages/detail';
import PetDetailsNotFound from './pages/petDetailsNotFound';
import Root from './components/root';
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';




//crate a router provider with JSX
//we use RouterProvider but check in future for 
//RouterProvider only accept route objects
//using CreateRoutesFromElements we can transform a Route into a route object



const appRouter = createBrowserRouter( createRoutesFromElements(
<Route path="/" element={<Root />}>
  <Route index element={<HomePage />} />
  <Route path=':type' element={<HomePage />} />
  <Route path=':type/:id' element={<PetDetailsPage/>}/>
  <Route path='search' element={<SearchPage/>} />
  <Route path="pet-details-not-found" element={<PetDetailsNotFound/>}/>
</Route>));





function App() {
  

  return (
    <RouterProvider router={appRouter} />

  );
}

export default App;
