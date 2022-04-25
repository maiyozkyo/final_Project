import { Column, Entity, OneToOne, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, JoinColumn, OneToMany, ManyToMany, JoinTable } from "typeorm";
import { Product } from "./Product";
import { User } from "./User";


@Entity()
export class Cart{
    @PrimaryGeneratedColumn({
        type: 'bigint',
    })
    cart_id: number;

    @Column("int", {
        array: true,
    })
    @OneToMany(type => User, user => user.user_id) users: User[];

    @Column("int", {
        array:  true,
    })
    @ManyToMany(type => Product) @JoinTable()
    products: Product[];
}