import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { MinLength, IsString, IsEmail, IsNumberString } from 'class-validator';
import Advertisement from '../advertisements/entity'

@Entity()
export default class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number

    @IsString()
    @MinLength(3)
    @Column('text', {nullable:false})
    userName: string

    @IsEmail()
    @Column('text', {nullable:false})
    email: string

    @IsNumberString()
    @Column('text', {nullable:false})
    phoneNumber: string

    @OneToMany(() => Advertisement, advertisement => advertisement.id)
    advertisements: Advertisement[];

}