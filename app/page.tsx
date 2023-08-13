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

  return (
    <section className="mt-12 w-full">
      <div className="mx-auto w-full max-w-6xl px-4 py-12">
        <h1
          className={"text-6xl font-medium text-gray-50"}
          style={crimson.style}
        >
          A set of 16x16
          <br />
          pixel-perfect icons
        </h1>
        <div className="mt-12 flex items-center gap-4">
          {/* <button className="px-4 py-2 border-2 rounded-lg text-base font-semibold bg-gray-50 border-gray-50 text-gray-950">
            Open in Figma
          </button> */}
          <a
            className="px-4 py-2 border-2 rounded-lg text-base font-semibold bg-gray-50 border-gray-50 text-gray-950"
            href="https://github.com/gaganbiswas/recon-icons"
            rel="noopener noreferrer"
            target="_blank"
          >
            View on Github
          </a>
        </div>

        <div
          className="mt-16 bg-[rgba(249,_250,_251,_0.025)] w-full rounded-md border border-gray-50/30"
          style={{ boxShadow: "0 0 50px 12px rgb(0 0 0 / 0.25);" }}
        >
          <div className="grid grid-cols-3 p-8 gap-10">
            <Icons title={"Arrows"} icons={arrowIcons} />
            <Icons title={"Abstract"} icons={abstractIcons} />
          </div>
          <div className="h-[1px] bg-gray-50/30" />
          <div className="p-8 flex items-start gap-10">
            <div className="flex-1">
              <h2 className="font-semibold text-xl text-gray-100">Usage</h2>
              <p className="mt-3 text-gray-200 font-light leading-relaxed">
                Click on the icons to copy the svg.
              </p>
              {/* <CodeBlock code={code} language={"jsx"} /> */}
              <h2 className="mt-8 font-semibold text-xl text-gray-100">
                Update Notes
              </h2>
              <p className="mt-3 text-gray-200 font-light leading-relaxed">
                Our icon collection will be updated every single day.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-xl text-gray-100">Assets</h2>
              <ul className="mt-3 text-gray-200 text-sm font-light">
                {/* <li className="underline decoration-gray-50/20">
                  Download SVG
                </li> */}
                {/* <li className="mt-2 underline decoration-gray-50/20">
                  Open in Figma
                </li> */}
                <li className="mt-2 underline decoration-gray-50/20">
                  <a
                    href="https://github.com/gaganbiswas/recon-icons"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on Github
                  </a>
                </li>
              </ul>
              <h2 className="mt-8 font-semibold text-xl text-gray-100">
                License
              </h2>
              <p className="mt-3 text-gray-200 text-sm font-light leading-relaxed">
                Licensed under the{" "}
                <a
                  className="underline decoration-gray-50/20"
                  href="https://github.com/gaganbiswas/recon-icons/blob/main/LICENSE"
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
