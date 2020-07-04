import React, { Component } from "react"
import { LinkData } from "../Context/LinkData"
import { socialData } from "../Context/SocialData"
import { items } from "./productData"
const ProductContext = React.createContext();
class ProductProvider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sidebarOpen: false,
      cartOpen: false,
      links: LinkData,
      cart: [],
      social: socialData,
      cartItems: 0,
      cartSubtotal: 0,
      cartTax: 0,
      CartTotal: 0,
      storedProducts: [],
      filteredProducts: [],
      featuredProducts: [],
      singleProduct: {},
      loading: true,
    }
  }

  componentDidMount() {
    // from contentful items
    this.setProducts(items);
  }

  setProducts = (products) => {

    let storedProducts = products.map(item => {
      const { id } = item.sys;
      const image = item.fields.image.fields.file.url;
      const product = { id, ...item.fields, image };
      return product;
    })
    // featured products
    let featuredProducts = storedProducts.filter(item => item.featured === true);



    // setting state up
    this.setState({
      storedProducts,
      filteredProducts: storedProducts,
      featuredProducts,
      cart: this.getStoredCart(),
      singleProduct: this.getStoredProduct(),
      loading: false,
    }, () => {
      this.addTotal()
    })
  }

  getStoredCart = () => {
    let cart;
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"))
    }
    else {
      cart = []
    }
    return cart;
  }
  getStoredProduct = () => {
    return localStorage.getItem("singleProduct") ? JSON.parse(localStorage.getItem("singleProduct")) : [];
  }

  getTotal = () => {
    let subTotal = 0;
    let cartItems = 0;
    this.state.cart.forEach(item => {
      subTotal += item.total;
      cartItems += item.count
    })
    subTotal = parseFloat(subTotal.toFixed(2));
    let discount = subTotal * (-0.2);
    discount = parseFloat(discount.toFixed(2));
    let total = subTotal + discount;
    total = parseFloat(total.toFixed(2));
    return {
      cartItems,
      subTotal,
      discount,
      total
    }
  }

  addTotal = () => {
    const totals = this.getTotal();
    this.setState({
      cartItems: totals.cartItems,
      cartSubTotal: totals.subTotal,
      cartTax: totals.discount,
      cartTotal: totals.total
    })
  }

  syncStorage = () => {
    localStorage.setItem("cart", JSON.stringify(this.state.cart))
  }

  addToCart = (id) => {
    let tempCart = [...this.state.cart];
    let tempProducts = [...this.state.storedProducts];
    let tempItem = tempCart.find(item => item.id === id);
    if (!tempItem) {
      tempItem = tempProducts.find(item => item.id === id);
      let total = tempItem.price;
      let cartItem = { ...tempItem, count: 1, total };
      tempCart = [...tempCart, cartItem]
    } else {
      tempItem.count++;
      tempItem.total = tempItem.price * tempItem.count;
      tempItem = parseFloat(tempItem.total.toFixed(2))
    }
    this.setState(() => {
      return { cart: tempCart }
    }, () => {
      this.addTotal();
      this.syncStorage();
      this.openCart();
    })
  }

  setSingleProduct = (id) => {
    let product = this.state.storedProducts.find(item => item.id === id);
    localStorage.setItem("singleProduct", JSON.stringify(product))
    this.setState({
      singleProduct: { ...product },
      loading: false
    })
  }





  handleSidebar = () => { this.setState({ sidebarOpen: !this.state.sidebarOpen }) }
  handleCart = () => { this.setState({ cartOpen: !this.state.cartOpen }) }
  closeCart = () => { this.setState({ cartOpen: false }) }
  openCart = () => { this.setState({ cartOpen: true }) }
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleSidebar: this.handleSidebar,
          handleCart: this.handleCart,
          closeCart: this.closeCart,
          openCart: this.openCart,
          addToCart: this.addToCart,
          setSingleProduct: this.setSingleProduct
        }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;


export { ProductProvider, ProductConsumer };