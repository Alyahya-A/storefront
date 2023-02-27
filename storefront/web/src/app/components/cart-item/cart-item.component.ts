import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from 'src/app/models/cartItem';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input() cartItem: CartItem;

  @Output() removeCartItem: EventEmitter<CartItem> = new EventEmitter();
  @Output() updateCartQuantity: EventEmitter<void> = new EventEmitter();

  constructor() {
    this.cartItem = new CartItem();
  }

  removeFromCart(): void {
    this.removeCartItem.emit(this.cartItem);
  }

  updateCartItem(): void {
    this.updateCartQuantity.emit();
  }
}
