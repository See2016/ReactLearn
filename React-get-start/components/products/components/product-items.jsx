import styles from './product-item.module.css'

function ButtonCompo() {
    return <button className='styles.btnStyle'>Click</button>
}

function ProductItem({sigleProductItem, key}) {
  return (
    // <div> // 1
    // <div key={key}> // 2
    
    // inline style
    <div style={{padding: "20px"}} key={key}> 
        {/* <p>Product 1</p> */}
        <p className='styles.productTitle'>{sigleProductItem}</p>
        <ButtonCompo />
    </div>
  )
}

export default ProductItem
