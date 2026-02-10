import { IsString, IsNumber, IsOptional, MaxLength, Min, IsNotEmpty } from 'class-validator';

export class CreateAnomalyDto {
    @IsNotEmpty()
    @IsString()
    @MaxLength(200)
    name: string;

    @IsNumber()
    @Min(0)
    code: number;

    @IsOptional()
    @IsString()
    @MaxLength(500)
    description?: string;

    @IsOptional()
    @IsString()
    @MaxLength(500)
    containmentProcedure?: string;
}