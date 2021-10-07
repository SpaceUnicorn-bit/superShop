import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity({name:"chart_reports"})
export class ChartReport {
    @PrimaryGeneratedColumn()
    id : number;

    @Column({type: "bigint"})
    sellsOfDay: number;

    @Column({type: "date"})
    date: Date;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    created_at: Date;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    updated_at: Date;
}