import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useThemeContext from "@theme/hooks/useThemeContext";

import styles from "./styles.module.css";

function useFeatures() {
  const { isDarkTheme } = useThemeContext();
  return [
    {
      title: <>Docker</>,
      imageUrl: "img/docker.png",
      description: (
        <>
          A Docker container image is a lightweight, standalone, executable
          package of software that includes everything needed to run an
          application: code, runtime, system tools, system libraries and
          settings.
        </>
      ),
    },
    {
      title: <>Kubernetes</>,
      imageUrl: "img/logo.svg",
      description: (
        <>
          is an open source container orchestration engine for automating
          deployment, scaling, and management of containerized applications
        </>
      ),
    },
    {
      title: <>Helm</>,
      imageUrl: isDarkTheme ? "img/helm-dark.svg" : "img/helm-light.svg",
      description: (
        <>
          is the best way to find, share, and use software built for Kubernetes.
        </>
      ),
    },
  ];
}

function Feature({ imageUrl, imageUrlDark, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);

  return (
    <div className={classnames("col col--4", styles.feature)}>
      <div className="text--center">
        <img className={styles.featureImage} src={imageUrl} alt={title} />
      </div>
      <h3 className="text--center">{title}</h3>
      <p className="text--center">{description}</p>
    </div>
  );
}

function Features() {
  const features = useFeatures();
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {features.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Home() {
  const context = useDocusaurusContext();

  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/getting-started")}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        <Features />
      </main>
    </Layout>
  );
}

export default Home;
