module.exports = {
  title: "Stackworx Technical Assignments",
  tagline: "Technical Assignments to help gauge developer skill level",
  url: "https://stackworx.github.io/",
  baseUrl: "/technical-assignments/",
  favicon: "img/favicon.ico",
  organizationName: "stackworx",
  projectName: "technical-assignments",
  scripts: [
    {
      src: "/js/fix-location.js",
      async: false,
      defer: false,
    },
  ],
  themeConfig: {
    navbar: {
      title: "Stackworx Technical Assignments",
      logo: {
        alt: "Logo",
        src: "img/logo.svg",
      },
      links: [
        {
          to: "docs/getting-started",
          activeBasePath: "docs",
          label: "Getting Started",
          position: "left",
        },
        // { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/stackworx/technical-assignments",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Assignments",
          items: [
            {
              label: "Kubernetes Tutorials",
              to: "https://kubernetes.io/docs/tutorials/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Website",
              to: "https://stackworx.io/",
            },
            {
              label: "GitHub",
              href: "https://github.com/stackworx",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} K8s Workshop, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/stackworx/technical-assignments/edit/master/docs/",
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     "https://github.com/stackworx/technical-assignments/edit/master/website/blog/",
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
