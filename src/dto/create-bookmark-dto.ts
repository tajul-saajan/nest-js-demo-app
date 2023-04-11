import { IsNotEmpty } from 'class-validator';

export class CreateBookmarkDto {
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  description: string;
  @IsNotEmpty()
  link: string;
}
