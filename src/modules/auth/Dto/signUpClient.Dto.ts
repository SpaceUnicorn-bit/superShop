import {IsNotEmpty, IsString} from 'class-validator';

export class SignUpClientDto {
    
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;   
}