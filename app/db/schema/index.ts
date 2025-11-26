/* eslint-disable @typescript-eslint/no-explicit-any */
import { relations } from "drizzle-orm";
import {
  integer,
  json,
  text,
  timestamp,
  uuid,
  pgTable,
} from "drizzle-orm/pg-core";

export const configTable = pgTable("configs", {
  name: text("name").primaryKey(),
  content: json("content").notNull().$type<Record<string, any>>(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export const userTable = pgTable("users", {
  id: uuid("id").primaryKey(),
  role: text("role").notNull().$type<string>(),
  email: text("email").notNull().default(""),
  name: text("name").notNull().default(""),
  refreshToken: text("refreshToken"),
  profileImageId: uuid("profileImageId"),
  firebaseToken: text("firebaseToken"),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export const userRelations = relations(userTable, ({ one, many }) => ({
  credentials: many(credentialTable),
  files: many(fileTable),
  profileImage: one(fileTable, {
    fields: [userTable.profileImageId],
    references: [fileTable.id],
  }),
}));

export const credentialTable = pgTable("credentials", {
  id: text("id").primaryKey(),
  password: text("password").notNull(),
  userId: uuid("userId")
    .notNull()
    .references(() => userTable.id, { onDelete: "cascade" }),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export const credentialRelations = relations(credentialTable, ({ one }) => ({
  user: one(userTable, {
    fields: [credentialTable.userId],
    references: [userTable.id],
  }),
}));

export const thirdpartyAuthTable = pgTable("thirdparty_auths", {
  id: text("id").primaryKey(),
  provider: text("provider").notNull(),
  userId: uuid("userId")
    .notNull()
    .references(() => userTable.id, { onDelete: "cascade" }),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export const thirdpartyAuthRelations = relations(
  thirdpartyAuthTable,
  ({ one }) => ({
    user: one(userTable, {
      fields: [thirdpartyAuthTable.userId],
      references: [userTable.id],
    }),
  })
);

export const fileTable = pgTable("files", {
  id: uuid("id").primaryKey(),
  userId: uuid("userId").references(() => userTable.id, {
    onDelete: "set null",
  }),
  name: text("name").notNull(),
  type: text("type").notNull(),
  size: integer("size").default(0).notNull(),
  metadata: json("metadata").notNull().default({}).$type<Record<string, any>>(),
  key: text("key").notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export const fileRelations = relations(fileTable, ({ one }) => ({
  user: one(userTable, {
    fields: [fileTable.userId],
    references: [userTable.id],
  }),
}));
