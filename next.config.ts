import type { NextConfig } from "next";
import createMdx from "@next/mdx";

const withMDX = createMdx({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [],
    },
});

const nextConfig: NextConfig = {
    /* config options here */
    experimental: {
        optimizePackageImports: [
            "@mantine/core",
            "@mantine/hooks",
            "@mantine/notifications",
            "@mantine/nprogress",
            "@mantine/form",
        ],
    },
    eslint: {
        ignoreDuringBuilds: true,
    },

    pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
};

export default withMDX(nextConfig);
