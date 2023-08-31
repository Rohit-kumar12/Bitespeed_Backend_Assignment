import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class Contact extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  phoneNumber!: string;

  @Column({ nullable: true })
  email!: string;

  @Column({ nullable: true })
  linkedId!: number;

  @Column({ default: "primary" })
  linkPrecedence!: "primary" | "secondary";

  @Column({ type: "timestamp", default: () => "Current_Timestamp" })
  createdAt!: Date;

  @Column({ type: "timestamp", default: () => "Current_Timestamp" })
  updatedAt!: Date;

  @Column({ type: "timestamp", nullable: true })
  deleteAt!: Date;
}
