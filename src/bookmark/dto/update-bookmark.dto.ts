import { IsNotEmpty } from 'class-validator';

export class UpdateBookmarkDto {
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  description: string;
  @IsNotEmpty()
  link: string;
}
