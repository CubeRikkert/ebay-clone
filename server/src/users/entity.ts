import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { MinLength, IsString, IsEmail, IsNumberString } from 'class-validator';


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

}