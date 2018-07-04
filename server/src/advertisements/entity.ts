import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { IsString, IsCurrency, Length, IsUrl } from 'class-validator';
import User from '../users/entity'

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

    @ManyToOne(() => User, user => user.id)
    seller: User

}