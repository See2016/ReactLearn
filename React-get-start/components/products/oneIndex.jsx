import ProductItem from "./components/product-items";
import "./style.css";

function ProductList({name, city, ProductData}) { // 2
  // console.log(props) // 1
  // const {name, city} = props;

  // ------------- render part --------------
  const flag = true;
  // function renderText(getFlag) {
  //   return  getFlag ? <h4>Name {name}, City {city}</h4> : <h4>This is false</h4>
  // }
  const renderText = flag ? (<h4>Name {name}, City {city}</h4>) : (<h4>This is false</h4>)
  // let renderText = null;
  // if(flag) {
  //   renderText = (<h4>Name {name}, City {city}</h4>)
  // } else {
  //   renderText = (<h4>This is false</h4>)
  // }

  return (
    <div>
      <h3 className="title">Ecomerce Project</h3>
      {/* <ProductItem /> */}

      {/* -------- render part ------------ */}
      {/* {
        flag ? (<h4>Name {name}, City {city}</h4>)
        : (<h4>This is false</h4>)
      } */}
      {/* {renderText(flag)} */}
      {renderText}

      {/* <h4>Name {name}, City {city}</h4> */} {/* // 2 */}
      <ul>
        {/* {productData.map((item, index) => ( */} {/* 1 */}
        {ProductData.map((item, index) => (
            // <li key={index}>{item}</li> // 1
            <ProductItem sigleProductItem={item} key={index} />
        ))}
      </ul>
    </div>
  )
}

export default ProductList
