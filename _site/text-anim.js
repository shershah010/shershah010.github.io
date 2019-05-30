let parent = document.getElementsByClassName("info")[0];
let index = 0;
let headers = [];
let paragraphs = [];

function createHeader(header) {
  return `<h1>` + header + `</h1>`;
}

function createParagraph(p) {
  return `<p>` + p + `</p>`;
}

function initHeaders() {
  headers = ["Sher Shah", "Education", "Experience", "Projects", "Fun Stuff"];
}

function initParagraphs() {
  paragraphs.push(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum libero nunc, et ultricies risus interdum eget. Morbi ac dui posuere erat consectetur suscipit id eget sem. Duis scelerisque magna nulla, ac bibendum justo faucibus in. In venenatis rhoncus lacus nec pellentesque. Ut aliquam sem neque, eu ornare ante varius quis. Morbi nec lacinia felis. Aenean at aliquet eros, eu auctor odio. Fusce tristique a nibh ut dictum. Duis lectus sem, pulvinar sed leo sed, aliquam dapibus libero. Integer finibus fringilla tincidunt. Donec lobortis volutpat mauris, non tincidunt quam elementum at. Cras turpis nunc, dignissim non pretium et, accumsan vitae ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur dictum accumsan dolor, nec condimentum dolor consectetur id.`);
  paragraphs.push(`Quisque molestie lorem sagittis aliquam auctor. Nunc et erat blandit, auctor tellus viverra, hendrerit eros. Sed mollis quam id purus malesuada, finibus vehicula justo convallis. Mauris non pulvinar velit. Donec pretium lacus justo, at sagittis turpis blandit non. Phasellus elementum vehicula porttitor. Duis odio felis, congue vel ex a, fringilla iaculis nunc. Aenean suscipit pulvinar ante, vitae rutrum libero posuere nec. Suspendisse sem nunc, finibus id metus ac, feugiat dignissim libero. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce sapien magna, tempor convallis lorem sed, porta sollicitudin diam. Nam quis arcu sit amet eros cursus tincidunt a sed odio.`);
  paragraphs.push(`Integer vel consequat lorem. In quis est vehicula urna scelerisque hendrerit eget sit amet neque. Proin finibus purus velit, at ultrices ante ultrices nec. Nam in diam sem. Integer suscipit lobortis accumsan. Suspendisse molestie purus sit amet blandit ultrices. Aenean sodales augue sit amet massa consectetur, ac fermentum ligula varius.`);
  paragraphs.push(`Quisque pretium bibendum placerat. Morbi tincidunt blandit cursus. Nulla consequat accumsan erat, ac imperdiet ligula maximus eget. Morbi vulputate, nibh in sodales mattis, lacus elit efficitur libero, nec tempor lorem felis sit amet elit. Donec nibh ex, finibus in magna quis, euismod gravida lectus. Cras pretium dapibus posuere. Ut imperdiet, metus vitae eleifend vulputate, neque velit imperdiet enim, a accumsan leo diam lacinia odio. Ut a fringilla nibh. Nullam in urna nec tortor pulvinar tincidunt sed sit amet lacus. Integer porta enim a posuere mattis. Quisque aliquam lectus eu mauris tincidunt tristique vitae at sem. Sed nec magna id nulla feugiat laoreet. Fusce condimentum malesuada dui, quis pulvinar justo aliquet vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean sit amet molestie mi.`);
  paragraphs.push(`Vestibulum et erat vitae lorem eleifend molestie. Nulla leo quam, sollicitudin vel libero et, semper dignissim lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum nisl magna, congue vel neque at, blandit egestas ligula. Aenean finibus, nisi ac malesuada fringilla, mauris ante ultrices ligula, ac elementum diam quam ut dui. Maecenas condimentum lorem id lacus aliquet dictum. Quisque ornare, dolor non placerat porta, urna lorem consectetur nunc, dapibus suscipit odio ligula et velit. Nunc ut velit vulputate, tincidunt odio at, rutrum tortor. Donec nec diam ut magna sagittis luctus in eget massa. Integer massa urna, fermentum at lorem ac, vestibulum egestas quam. Mauris maximus dolor viverra justo auctor malesuada. Donec ac sapien ut ligula convallis faucibus. Nunc auctor lacus ut ipsum facilisis interdum.`);
}

function initSection() {
  parent.innerHTML = createHeader(headers[0]) + createParagraph(paragraphs[0]);
  parent.onclick = changeSection;
}

function changeSection(e) {
  let children = parent.children;
  index = (index + 1) % headers.length;
  children[0].innerHTML = headers[index];
  children[1].innerHTML = paragraphs[index];
}

function init() {
  initHeaders();
  initParagraphs();
  initSection();
}

init();
