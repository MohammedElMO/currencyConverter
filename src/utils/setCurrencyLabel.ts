export function selectNode(menu: Node, selectMenuItem: HTMLSpanElement) {
  menu?.childNodes.forEach((node) => {
    node.addEventListener("click", () => {
      selectMenuItem.innerText = node.textContent || "currency";
    });
  });
}
