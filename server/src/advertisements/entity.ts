import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { IsString, IsCurrency, Length, IsInt, IsUrl } from 'class-validator';

@Entity()
export default class Advertisement extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id?: number

    @IsString()
    @Length(2, 25)
    @Column('text', {nullable:false})
    title: string

    @IsString()
    @Length(5, 350)
    @Column('text', {nullable:false})
    description: string

    @IsUrl()
    @Column('text', {nullable:false})
    picture: string

    @IsCurrency()
    @Column('int', {nullable:false})
    price: number

    @IsInt()
    @Column('int', {nullable:false})
    sellerId: number

}