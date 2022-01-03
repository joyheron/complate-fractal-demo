import { createElement } from "complate-stream";

export default function PreviewLayout({ context }, ...children) {
  return <html lang="en">
    <body>
      {children}
    </body>
  </html>;
}
