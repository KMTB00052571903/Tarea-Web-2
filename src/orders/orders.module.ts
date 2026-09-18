import { Module } from "@nestjs/common";
import { OrdersService } from "./orders.service";
import { OrdersController } from "./orders.controller";
import { OrderEntity } from "./entities/order.entity";
import { CustomerEntity } from "./entities/customer.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DiningEntity } from "./entities/dining.entity";
import { OrderRulesService } from "./order-rules/order-rules.service";
import { OrdersSummaryService } from "./orders-summary.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([OrderEntity, CustomerEntity, DiningEntity]),
  ],
  providers: [OrdersService, OrderRulesService, OrdersSummaryService],
  controllers: [OrdersController],
})
export class OrdersModule {}
