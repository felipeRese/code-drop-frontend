import { isLoggedIn } from "@/lib/auth";
import { getCode } from "@/actions/code-actions";
import Header from "./header";
import LinkList from "./link-list";
import CodeInput from "./code-input";
import { getUserLinks } from "@/actions/user-actions";

type BodyProps = {
  params?: { id: string };
  view?: boolean;
};

export default async function Body({ view = false, params }: BodyProps) {
  const isLogged = await isLoggedIn();
  const codeBlockCode = view ? await getCode(params!.id) : "";
  const links = await getUserLinks();

  return (
    <div className="h-screen flex flex-col">
      <Header isLogged={isLogged} />
      <div className="flex-grow flex gap-3 m-2">
        <div className="flex-grow">
          <CodeInput codeBlockCode={codeBlockCode} isView={view} />
        </div>
        <div className="w-fit">
          <LinkList links={links} />
        </div>
      </div>
    </div>
  );
}
