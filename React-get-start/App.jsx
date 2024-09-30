// This is React + Vite App
import './App.css'
import ClassBase from './components/class-component'
import ContexButtonComponent from './components/context-concept/button'
import ContextTextComponent from './components/context-concept/text'
import FormComponent from './components/form'
import FunctionComponent from './components/function-component'
import LoginComponent from './components/login'
import ProductList from './components/products/index'
import RegisterComponent from './components/register'
import UseReducerExample from './components/use-reducer-example'
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

      {/* <ContexButtonComponent />
            <ContextTextComponent /> */}
      {/* <UseReducerExample /> */}

      {/* Form */}
      {/* <FormComponent /> */}

      {/* common form -> login : register  -> common input -> config */}
      <div style={{display: 'flex', gap: '20px'}}>
        <LoginComponent />
        <RegisterComponent />
      </div>
    </div>
  )
}

export default App