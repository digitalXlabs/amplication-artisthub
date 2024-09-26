/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Journal as PrismaJournal,
  User as PrismaUser,
} from "@prisma/client";

export class JournalServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.JournalCountArgs, "select">): Promise<number> {
    return this.prisma.journal.count(args);
  }

  async journals(args: Prisma.JournalFindManyArgs): Promise<PrismaJournal[]> {
    return this.prisma.journal.findMany(args);
  }
  async journal(
    args: Prisma.JournalFindUniqueArgs
  ): Promise<PrismaJournal | null> {
    return this.prisma.journal.findUnique(args);
  }
  async createJournal(args: Prisma.JournalCreateArgs): Promise<PrismaJournal> {
    return this.prisma.journal.create(args);
  }
  async updateJournal(args: Prisma.JournalUpdateArgs): Promise<PrismaJournal> {
    return this.prisma.journal.update(args);
  }
  async deleteJournal(args: Prisma.JournalDeleteArgs): Promise<PrismaJournal> {
    return this.prisma.journal.delete(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.journal
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
