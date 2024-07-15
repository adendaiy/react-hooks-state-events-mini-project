// import React from "react";

// function CategoryFilter({categories, selectedCategory, onSelectedCategory}) {
//   return (
//     <div className="categories">
//       <h5>Category filters</h5>
//       {/* render <button> elements for each category here */}
//   {categories.map((category)=>( 
// <button key={category } className={category === selectedCategory? 'selected' : ''}
// onClick={()=> onSelectedCategory(category)}
// >
//      {category}
//    </button>

//   ))}

//     </div>
//   );
// }

// export default CategoryFilter;
// CategoryFilter.js
import React from "react";

function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button
          key={category}
          className={category === selectedCategory ? 'selected' : ''}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;

