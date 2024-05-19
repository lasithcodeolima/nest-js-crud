import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductionModule } from './production/production.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './product.models';

@Module({
  imports: [ProductionModule, 
    MongooseModule.forRoot('mongodb+srv://new-user01:1234@cluster0.gmew4wq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'),
    MongooseModule.forFeature([{name:'user',schema:UserSchema}])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
