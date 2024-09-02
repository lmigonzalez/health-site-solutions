import Image from "next/image";
import Link from "next/link";
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Map the img tag to Next.js Image component
    img: ({ src, alt, width, height, ...rest }) => (
      <Image
        src={src as string}
        alt={alt as string}
        width={width ? Number(width) : undefined}
        height={height ? Number(height) : undefined}
        {...rest}
        layout="responsive" // or other layout option based on your need
      />
    ),
    // Map the a tag to Next.js Link component
    a: ({ href, children, ...rest }) => (
      <Link href={href as string} {...rest}>
        {children}
      </Link>
    ),
    ...components,
  };
}
