import { SpaceXProvider } from './store/SpaceXContext';
import loadable from '@loadable/component';

const Main = loadable(() => import('./components/Main'));

function App() {
  return (
    <SpaceXProvider>
      <div className="home">
        <h1 className="title">SpaceX Launch Programs</h1>
        <Main />
        <footer>
          <h5>Developed by Jana</h5>
        </footer>
      </div>
    </SpaceXProvider>
  );
}

export default App;
