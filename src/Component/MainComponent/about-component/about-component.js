import React from 'react';
import { renderIntoDocument } from 'react-dom/test-utils';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

// function AboutComponent() {

//   const helloSaga = () => {
//     console.log('Hello Sagas!');
//   }

//   return (
//     <section className='about-component'>
//       <div className="bradcam_area breadcam_bg">
//         <h3>About Montana</h3>
//       </div>
//     </section>
//   )
// }

function* sayHiGenerator() {
  yield 'hey'
  return 'hi'

}
const resultGenerator = sayHiGenerator()
console.log('resultGenerator', resultGenerator.next());

export default sayHiGenerator
