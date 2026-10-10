import { PagefindUI } from "@pagefind/default-ui";

let initialized = false;

export async function initSearch() {
  if (initialized) return;
  initialized = true;

  const el = document.querySelector<HTMLElement>("#search[data-pagefind-ui]");
  if (!el) return;

  // Pagefind's stylesheet lives beside the pagefind bundle and is only needed
  // once the dialog is open, so it is linked on demand rather than shipped
  // render-blocking on every page.
  if (!document.querySelector<HTMLLinkElement>("link[data-pagefind-css]")) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `${el.dataset.bundlePath ?? "/pagefind/"}pagefind-ui.css`;
    link.dataset.pagefindCss = "";
    document.head.appendChild(link);
  }

  const bundlePath = el.dataset.bundlePath ?? "/pagefind/";
  const uiOptions = JSON.parse(el.dataset.uiOptions ?? "{}");

  new PagefindUI({
    ...uiOptions,
    element: "#search",
    bundlePath,
  });
}
