// This is React + Vite App
import './App.css'
import ClassBase from './components/class-component'
import ContexButtonComponent from './components/context-concept/button'
import ContextTextComponent from './components/context-concept/text'
import FunctionComponent from './components/function-component'
import ProductList from './components/products/index'
import Users from './components/users'

const productData = ['p1', 'p2', 'p3']

function App() {
  return (
    <div>
        <h1>Hello</h1>
        {/* <ClassBase /> */}
        {/* <FunctionComponent /> */}
        {/* <ProductList ProductData={productData} name="See" city="PSU" /> */}
        {/* <Users /> */}

        <ContexButtonComponent />
        <ContextTextComponent />
    </div>
  )
}

export default App