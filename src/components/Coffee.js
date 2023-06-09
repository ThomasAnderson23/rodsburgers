const Burger = ({title, img}) => {
  return (
    <div className='container-type col-md-3 col-12'>
      <div>
        <img src={img} alt="Patties"/>
      </div>
      <div className='container-title-type'>
        <h4 className='title-type'>{title}</h4>
        <div>
          <p className='paragraph-type'>
          Introducing the "Ranger" burger: A tantalizing symphony of flavors, featuring a succulent beef patty with fresh tomatoes, crisp lettuce, onion, and a secret special sauce..          
          </p>
        </div>
      </div>
    </div>  
  )
}

export default Burger