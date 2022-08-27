export default {
  LoadCart(state) {
    let cart = localStorage.getItem("myCart");
    if (cart) {
      state.cart = JSON.parse(cart);
    }
  },
  AddToCart(state) {
    this.$swal({
      toast: true,
      text: "Your request is successful",
      icon: "success",
      timer: 4000,
      timerProgressBar: true,
      showConfirmButton: false,
      position: "top-end",
    });
  },
  DecreaseItemCount(state, index) {
    let item = state.cart[index];
    if (!item) return;
    if (item.quantity == 1) {
      state.cart.splice(index, 1);
    } else {
      item.quantity -= 1;
    }
    this.$swal({
      toast: true,
      text: "Cart Updated.",
      icon: "success",
      timer: 3000,
      timerProgressBar: true,
      showConfirmButton: false,
      position: "top-end",
    });
  },
  RemoveCartItem(state, index) {
    state.cart.splice(index, 1);

    this.$swal({
      toast: true,
      text: "Item Removed.",
      icon: "success",
      timer: 3000,
      timerProgressBar: true,
      showConfirmButton: false,
      position: "top-end",
    });
  },
  IncreaseItemCount(state, index) {
    let item = state.cart[index];
    item.quantity += 1;
    this.$swal({
      toast: true,
      text: "Cart Updated.",
      icon: "success",
      timer: 3000,
      timerProgressBar: true,
      showConfirmButton: false,
      position: "top-end",
    });
  },
  ClearCart(state) {
    state.cart = [];
    //Update local storage
    localStorage.removeItem("myCart");
  },
};
