import './App.css';
import { useState } from 'react';
import Body from './components/Body';
import Header from './components/Header';
import { Provider } from 'react-redux';
import appStore from './utils/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
/**
 * Header
 * Body
 *   sideBar
 *   MainContainer
 *     ButtonList
 *     videoContainer
 **/


function App() {
  const [search,setSearch] = useState();
  const appRouter = createBrowserRouter([
  {
  path : '/',
  element : <Body search={search} />,
  children : [
    {
      path : '/',
      element : <MainContainer search={search}/>,
    },
    {
      path : '/watch',
      element : <WatchPage/>,
    }
  ]
}]
)
  return (
    <Provider store={appStore}>
    <div className="App">
      <Header setSearch={setSearch}/>
      <RouterProvider router={appRouter}>
      <Body  search={search}/>
      </RouterProvider>
    </div>
    </Provider>
  );
}

export default App;
