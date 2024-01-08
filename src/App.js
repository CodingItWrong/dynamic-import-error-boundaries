import {lazy} from 'react';
import './style.css';

const DynamicSuccess = lazy(() => import('./DynamicSuccess.js'));

export default function App() {
  return (
    <div>
      <h1>Hello, React</h1>
      <p>This is the initial JS</p>
      <DynamicSuccess />
    </div>
  );
}
