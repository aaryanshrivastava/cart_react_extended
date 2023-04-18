import React from "react";

const CartItem = (props) => {
  const { price, title, qty } = props.product;
  const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteQuantity } =
    props;
  return (
    <div className="cart-item">
      <div className="left-block">
        <img style={styles.image} src={product.img} />
      </div>
      <div className="right-block">
        <div style={{ fontSize: 25 }}>{title}</div>
        {/*Direct from Constructor*/}

        <div style={{ color: "#777" }}>{price} ₹</div>
        {/* from object De-Structuring */}

        <div style={{ color: "#777" }}>Qty :{qty}</div>
        <div className="cart-item-actions">
          {/* buttons */}
          <img
            alt="increase"
            className="actions-icons"
            src="https://cdn-icons-png.flaticon.com/512/1828/1828919.png"
            onClick={() => onIncreaseQuantity(product)}
          />

          <img
            alt="decrease"
            className="actions-icons"
            src="https://cdn-icons-png.flaticon.com/512/1828/1828899.png"
            onClick={() => onDecreaseQuantity(product)}
          />
          <img
            alt="delete"
            className="actions-icons"
            src="https://cdn-icons-png.flaticon.com/512/484/484611.png"
            onClick={() => onDeleteQuantity(product.id)}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  image: {
    height: 100,
    width: 100,
    borderRadius: 4,
    background: "#ccc",
  },

  // testing() {
  //   const promise = new Promise((resolve, reject) => {
  //     //setState acts like a synchronous call, so thus we can we the up to date state.
  //     setTimeout(() => {
  //       resolve("done");
  //     }, 5000);
  //   });
  //   promise.then(() => {
  //     this.setState({ qty: 100 });
  //     console.log("state", this.state);
  //   });
  // }

  // increaseQuantity = () => {
  //   // console.log("this", this.state);
  //   //set_state form 1
  //   // this.setState({
  //   //   title: "Some New Title",
  //   // });

  //   //set_state form 2 , if prevState state is required then use this, else use the above ones.
  //   this.setState((prevState) => {
  //     return {
  //       qty: prevState.qty + 1,
  //     };
  //   });
  // };

  // decreaseQuantity = () => {
  //   const { qty } = this.state;
  //   if (qty === 0) {
  //     return;
  //   }
  //   this.setState((prevState) => {
  //     return {
  //       qty: prevState.qty - 1,
  //     };
  //   });
  // };
};

export default CartItem;
