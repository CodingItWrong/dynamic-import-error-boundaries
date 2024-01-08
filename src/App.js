import {Suspense, lazy, useState} from 'react';
import './style.css';
import {ErrorBoundary} from 'react-error-boundary';

const DynamicFailure = lazy(() => {
  console.log('dynamically loading Dynamic.js');
  return import('./Dynamic.js');
});

export default function App() {
  const [showFailure, setShowFailure] = useState(false);

  return (
    <div>
      <h1>Hello, React</h1>
      <p>This is the initial JS.</p>
      <p>
        To see the dynamic import succeed, keep the server running, then click
        "Do Dynamic Import".
      </p>
      <p>
        To see the dynamic import fail, in browser tools, find the JS request is
        made when you do the dynamic import, then block that request. Reload the
        page and click "Do Dynamic Import" again. You should see a message
        starting with "This is fallback message"
      </p>
      {showFailure ? (
        <ErrorBoundary
          onError={(...args) => console.log('ONERROR', ...args)}
          fallback={
            <div>
              This is a fallback message that displays when a dynamic import
              fails. This one is expected, as it was for DynamicFailure.js,
              which does not exist
            </div>
          }
        >
          <Suspense fallback={<></>}>
            <DynamicFailure />
          </Suspense>
        </ErrorBoundary>
      ) : (
        <button onClick={() => setShowFailure(true)}>Do Dynamic Import</button>
      )}
    </div>
  );
}
