import '../src/styles/globals.scss'
import * as NextImage from "next/image";
import { addParameters } from "@storybook/react";

addParameters({
  docs: {
    inlineStories: true,
    iframeHeight: "60px",
  },
  html: {
    head: {
      links: [
        {
          rel: "stylesheet",
          href: "preview-head.html",
        },
      ],
    },
  },
});


const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => (
    <OriginalNextImage
      {...props}
      unoptimized
    />
  ),
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}