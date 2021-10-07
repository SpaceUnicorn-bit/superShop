import { Product } from "src/modules/product/entities/product.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Images {

    @PrimaryGeneratedColumn()
    id : number;

    @Column({type:"varchar"})
    name: string;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    created_at: Date;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    updated_at: Date;

    @ManyToOne(() => Product, (product) => product.images)
    @JoinColumn({ name :'product_id' })
    product: Product;

}