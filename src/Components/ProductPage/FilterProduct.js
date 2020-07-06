import React from 'react'
import styled from "styled-components"
import { ProductConsumer } from "../../Context/Context"

export default function FilterProduct() {
  return (
    <ProductConsumer>
      {value => {
        const { price, rangeMax, rangeMin, search, company, shipping, handleChange, storedProducts } = value;

        let companies = storedProducts.map(item => item.company);
        companies = [...new Set(companies)]
        companies = ["all", ...companies]
        return (
          <div className="row py-5 mw-100">
            <div className="col-10 mx-auto" >
              <FilterWrapper>
                <div>
                  <label htmlFor="search" className="text-capitalize">search products :</label>
                  <input type="text" name="search" id="search" className="filter-item" value={search} onChange={handleChange} />
                </div>
                <div>
                  <label htmlFor="company" className="text-capitalize">company :</label>
                  <select name="company" id="company" className="filter-item" value={company} onChange={handleChange}>
                    {companies.map((company, index) => (<option className="text-capitalize" key={index} value={company}>{company}</option>))}
                  </select>
                </div>
                <div>
                  <label htmlFor="price" >
                    <p className="text-capitalize"> product price : <span> $ {price}</span></p>
                  </label>
                  <input type="range" name="price" id="price" className="filter-item" min={rangeMin} max={rangeMax} value={price} onChange={handleChange} />
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <label htmlFor="shipping" className="text-capitalize m-0 mr-3">free shipping</label>
                  <input type="checkbox" name="shipping" id="shipping" checked={shipping && true} onChange={handleChange} />
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
max-width:100vw;
overflow-x: hidden;

.filter-item {
  display: block;
  width:100%;
  background:transparent;
  border-radius: 5px;
}
`