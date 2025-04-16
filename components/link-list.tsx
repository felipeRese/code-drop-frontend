"use client";
import LinkItem from "./link-item";
import { ScrollArea } from "./ui/scroll-area";

type LinkListProps = {
  links: {
    url: string;
  }[];
};

export default function LinkList({ links }: LinkListProps) {
  return (
    <ScrollArea className="w-[20rem] h-full bg-neutral-900 p-3 rounded-xl">
      <ul className="flex flex-col gap-2">
        {links &&
          links.map((link: any) => <LinkItem key={link} href={link.url} />)}
      </ul>
    </ScrollArea>
  );
}
