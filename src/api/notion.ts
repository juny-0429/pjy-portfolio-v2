import { Client } from '@notionhq/client';
import { NotionAPI } from 'notion-client';

export const notion = new NotionAPI();

export async function getData(rootPageId: string) {
  return await notion.getPage(rootPageId);
}

export const notionDatabase = new Client({
  auth: process.env.NOTION_SECRET,
});
