import { Controller, Get, Render, Request, UseGuards, UseFilters } from '@nestjs/common';
import { UserCartService } from './user-cart.service';

@Controller('/cart')

export class UserCartController {
  constructor(private readonly userCartService: UserCartService) {}

  @Get()
  @Render("./User/cart")
  root(@Request() req){
    let items = req.params;
    console.log(req.session['passport'])
    return {user: req.user, cartItems: items}
  }
}
