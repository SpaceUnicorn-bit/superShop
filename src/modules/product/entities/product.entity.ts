import { Aparts } from 'src/modules/apart/entities/aparts.entity';
import { Billing } from 'src/modules/billing/entities/billing.entity';
import { Brands } from 'src/modules/brands/entities/brand.entity';
import { Department } from 'src/modules/department/entities/department.entity';
import { Gender } from 'src/modules/gender/entities/gender.entity';
import { Images } from 'src/modules/image/entities/image.entity';
import { Outfits } from 'src/modules/outfits/entities/outfit.entity';
import { Purchases } from 'src/modules/purchase/entities/purchase.entity';
import { Size } from 'src/modules/size/entities/size.entity';
import {Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import { Product_size } from './product_size.entity';

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name: string;

    @Column()
    detail: string;

    @Column()
    pricePublic: number;

    @Column()
    priceMajor: number;

    @Column()
    priceTuB: number;

    @Column("decimal")
    weight: number;

    @Column()
    photo: string;

    @ManyToOne(() => Gender, (gender) => gender.products)
    @JoinColumn({ name :'gender_id' })
    gender: Gender;

    @ManyToOne(() => Department, (department) => department.products, {
        eager: true
    })
    @JoinColumn({ name :'dpt_id' })
    department: Department;

    @ManyToMany(() => Aparts, apart => apart.products, { eager: true })
    @JoinTable({
        name: 'apart_product',
        joinColumn: { name: 'product_id', referencedColumnName: 'id'},
        inverseJoinColumn: { name: 'apart_id', referencedColumnName: 'id'},
    })
    aparts: Aparts[];

    @ManyToMany(() => Outfits, outfit => outfit.products)
    @JoinTable({
        name: 'product_outfit',
        joinColumn: { name: 'product_id', referencedColumnName: 'id'},
        inverseJoinColumn: { name: 'outfit_id', referencedColumnName: 'id'},
    })
    outfits: Outfits[];

    @ManyToMany(() => Size, size => size.products)
    @JoinTable({
        name: 'product_size',
        joinColumn: { name: 'product_id', referencedColumnName: 'id'},
        inverseJoinColumn: { name: 'size_id', referencedColumnName: 'id'},
    })
    sizes: Size[];

    @ManyToMany(() => Purchases, purchases => purchases.products)
    @JoinTable({
        name: 'product_purchase',
        joinColumn: { name: 'product_id', referencedColumnName: 'id'},
        inverseJoinColumn: { name: 'purchase_id', referencedColumnName: 'id'},
    })
    purchases: Purchases[];

    @ManyToMany(() => Billing, billings => billings.products)
    @JoinTable({
        name: 'product_billing',
        joinColumn: { name: 'product_id', referencedColumnName: 'id'},
        inverseJoinColumn: { name: 'billing_id', referencedColumnName: 'id'},
    })
    billings: Billing[];

    @OneToMany(() => Images, (image) => image.product, {
        eager: true
    })
    images: Images[];

    @ManyToOne(() => Brands, (brand) => brand.products, {
        eager: true
    })
    @JoinColumn({ name :'brand_id' })
    brand: Brands;

}