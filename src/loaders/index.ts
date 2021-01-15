import { Application } from "express";

export default async (app : Application) => {
  const moongose_loader = (await import('./mongoose')).default;
  const express_loader = (await import('./express')).default;

  await moongose_loader();
  await express_loader(app);
}