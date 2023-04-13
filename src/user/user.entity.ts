import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Bookmark from '../bookmark/bookmark.entity';

@Entity()
class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public email: string;

  @Column()
  public password: string;

  @Column()
  public full_name: string;

  @OneToMany(() => Bookmark, (bookmark) => bookmark.user)
  bookmarks: Bookmark[];
}

export default User;
