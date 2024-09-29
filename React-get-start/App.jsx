// This is React + Vite App
import './App.css'
import ClassBase from './components/class-component'
import FunctionComponent from './components/function-component'
import ProductList from './components/products'

const productData = ['p1', 'p2', 'p3']

function App() {
  return (
    <div>
        <h1>Hello</h1>
        <ClassBase />
        {/* <FunctionComponent /> */}
        {/* <ProductList ProductData={productData} name="See" city="PSU" /> */}
    </div>
  )
}

export default App