import {IsNotEmpty, IsString} from 'class-validator';

export class SignInClientDto {
    
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    password: string;   
}