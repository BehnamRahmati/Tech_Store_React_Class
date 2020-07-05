import React from 'react'
import styled from "styled-components"
import { ProductConsumer } from "../../Context/Context"

export default function FilterProduct() {
  return (
    <ProductConsumer>
      {value => {
        const { price, rangeMax, rangeMin, search, company, shipping, handleChange, storedProducts } = value;
        return (
          <div className="row py-5">
            <div className="col-10 mx-auto">
              <FilterWrapper>
                <div>
                  <label htmlFor="search" className="text-capitalize">search products :</label>
                  <input type="text" name="search" id="search" className="filter-item" value={search} onChange={handleChange} />
                </div>
                <div>
                  <label htmlFor="company" className="text-capitalize">company :</label>
                  <select name="company" id="company" className="filter-item" vlaue={company} onChange={handleChange}>
                  </select>
                </div>
                <div>
                  <label htmlFor="price" >
                    <p className="text-capitalize"> product price : <span> $ {price}</span></p>
                  </label>
                  <input type="range" name="price" id="price" className="filter-item" min={rangeMin} max={rangeMax} value={price} onChange={handleChange} />
                </div>
                <div>
                  <label htmlFor="shipping" className="text-capitalize">free shipping</label>
                  <input type="checkbox" name="shipping" id="shipping" value={shipping && true} onChange={handleChange} />
                </div>
              </FilterWrapper>
            </div>
          </div>
        )
      }}
    </ProductConsumer>
  )
}

const FilterWrapper = styled.div`
display:grid;
grid-template-columns: repeat(auto-fit , minmax(200px , 1fr));
grid-column-gap:2rem;
grid-row-gap: 1rem;

.filter-item {
  display: block;
  width:100%;
  background:transparent;
  border-radius: 5px;
}
`