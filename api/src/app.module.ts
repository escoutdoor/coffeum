import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ProductModule } from './product/product.module'
import { ReviewModule } from './review/review.module'
import { UserModule } from './user/user.module'
import { PaginationModule } from './pagination/pagination.module'
import { AuthModule } from './auth/auth.module'
import { ConfigModule } from '@nestjs/config'
import { OrderModule } from './order/order.module';

@Module({
	imports: [
		ConfigModule.forRoot(),
		ProductModule,
		ReviewModule,
		UserModule,
		PaginationModule,
		AuthModule,
		OrderModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
