import Icons from "@/components/icons/Icons";
import { tags } from "@/data/tags";
import CodeBlock from "@/components/shared/CodeBlock";
import { crimson } from "./fonts";

function importIcons(r: __WebpackModuleApi.RequireContext, attrs: string) {
  return r
    .keys()
    .filter((fileName) => fileName.startsWith("./"))
    .map((fileName) => {
      let name = fileName.slice(2).replace(/\.svg$/, "");
      return {
        name,
        tags: tags[name] ?? [],
        svg: r(fileName).default.replace(">", ` ${attrs}>`),
      };
    });
}

export default function Home() {
  const arrowIcons = importIcons(
    require.context(`../icons/arrows`, false, /\.svg$/),
    "width='16' height='16'"
  );

  const abstractIcons = importIcons(
    require.context(`../icons/abstract`, false, /\.svg$/),
    "width='16' height='16'"
  );

  const npmCode = `npm install @struct-ui/icons`;

  const reactCode = `import { ArrowRight, Sun } from "@struct-ui/icons";

  function MyComponent() {
    return (
      <div>
        <ArrowRight />
        <Sun />
      </div>
    );
  }`;

  return (
    <section className="mt-12 w-full">
      <div className="mx-auto w-full max-w-6xl px-4 py-12">
        <h1
          className={"text-6xl font-medium text-gray-900"}
          style={crimson.style}
        >
          A set of 16x16
          <br />
          pixel-perfect icons
        </h1>
        <div className="mt-12 flex items-center gap-4">
          <a
            className="px-4 py-2 border rounded-md font-semibold bg-gray-900 border-gray-900 text-white"
            href="https://github.com/gaganbiswas/struct-icons"
            rel="noopener noreferrer"
            target="_blank"
          >
            View on Github
          </a>
          <p className="px-4 py-2 border rounded-md text-base font-mono bg-white border-gray-300 text-gray-900">
            {npmCode}
          </p>
        </div>

        <div
          className="mt-16 bg-white w-full rounded-md border border-gray-300"
          style={{ boxShadow: "0 0 50px 12px rgb(0 0 0 / 0.075)" }}
        >
          <div className="grid grid-cols-3 p-8 gap-10">
            <Icons title={"Arrows"} icons={arrowIcons} />
            <Icons title={"Abstract"} icons={abstractIcons} />
          </div>
          <div className="h-[1px] bg-gray-300" />
          <div className="p-8 flex items-start gap-10">
            <div className="w-full flex flex-col flex-1">
              <h2 className="font-semibold text-xl text-gray-900">Usage</h2>
              <p className="mt-3 text-gray-800 leading-relaxed">
                You can always click on the icons above to copy the svg and use
                it in your desired framework.
              </p>
              <h3 className="mt-6 font-semibold text-lg text-gray-900">
                React components
              </h3>
              <p className="my-4 text-gray-800 leading-relaxed">
                All icons are available as individual React components. Install
                Struct Icons from npm:
              </p>
              <CodeBlock code={npmCode} language={"jsx"} />
              <p className="my-4 text-gray-800 leading-relaxed">
                Import the icons into your React project:
              </p>
              <CodeBlock code={reactCode} language={"jsx"} />
              <h2 className="mt-8 font-semibold text-xl text-gray-900">
                Update Notes
              </h2>
              <p className="mt-3 text-gray-800 leading-relaxed">
                Our icon collection will be updated every single day.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-xl text-gray-900">Assets</h2>
              <ul className="mt-3 text-gray-800 text-sm">
                <li className="underline decoration-gray-300">
                  <a
                    href="https://raw.githubusercontent.com/gaganbiswas/struct-icons/main/struct-icons.zip"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download SVG
                  </a>
                </li>
                <li className="mt-2 underline decoration-gray-300">
                  <a
                    href="https://github.com/gaganbiswas/struct-icons"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on Github
                  </a>
                </li>
              </ul>
              <h2 className="mt-8 font-semibold text-xl text-gray-900">
                License
              </h2>
              <p className="mt-3 text-gray-800 text-sm leading-relaxed">
                Licensed under the{" "}
                <a
                  className="underline decoration-gray-300"
                  href="https://github.com/gaganbiswas/struct-icons/blob/main/LICENSE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MIT License
                </a>
                .
                <br />
                Copyright &copy; 2023-present.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
