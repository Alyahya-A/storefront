import { Component, ElementRef, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CartItem } from 'src/app/models/cartItem';
import { User } from 'src/app/models/user';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  totalCartAmount = 0;
  user: User = new User();
  isUserLoggedIn = false;
  authenticationMode = 'sign-in';

  constructor(
    private cartService: CartService,
    private userService: UserService,
    private el: ElementRef,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.totalCartAmount = this.cartService.getTotalAmount();

    this.userUpdated();
  }

  userUpdated(): void {
    this.isUserLoggedIn = this.userService.isUserLoggedIn();
    this.user = this.userService.getUser();
  }

  removeCartItem(cartItem: CartItem): void {
    this.spinner.show();

    setTimeout(() => {
      this.cartService.removeProductItem(cartItem);
      this.cartItems = this.cartService.getCartItems();
      this.totalCartAmount = this.cartService.getTotalAmount();
      this.cartUpdated();

      this.spinner.hide();
    }, 500);
  }

  updateCartQuantity(): void {
    this.cartService.updateCart();
    this.totalCartAmount = this.cartService.getTotalAmount();
    this.cartUpdated();
  }

  cartUpdated(): void {
    this.el.nativeElement.dispatchEvent(
      new CustomEvent('cart-updated', {
        bubbles: true
      })
    );
  }
}
