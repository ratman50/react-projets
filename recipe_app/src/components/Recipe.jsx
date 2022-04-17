import Ingredient from './Ingredient';
const Recipe = (props) => {
    const {label,calories,image,ingredientLines}=props.item;
    
  return (
    <div className='item'> 
        <img src={image} alt={label}  />
        <div className="content">
          <h1 >{label}</h1>
          <p>{calories.toFixed(3)} cal</p>
          <Ingredient  ingr={ingredientLines}/>

        </div>
    </div>
  )
}

export default Recipe