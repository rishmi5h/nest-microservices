import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { BookDTO } from './book/BookDTO';

@Controller('bookstore')
export class AppController {
  constructor(@Inject('BOOKS_SERVICE') private client: ClientProxy) {}

  @Get()
  getAllBooks() {
    return this.client.send('get_all_books', {});
  }

  @Get(':id')
  getBookById(@Param('id') id: string) {
    return this.client.send({ cmd: 'get_book' }, id);
  }

  @Post()
  createNewBook(@Body() book: BookDTO) {
    return this.client.send({ cmd: 'new_book' }, book);
  }
}
