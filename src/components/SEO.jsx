import { Helmet } from "react-helmet-async";

const SITE_URL = "https://flowsync-sandy.vercel.app";

export default function SEO({
  title,
  description,
  keywords,
  image = `${SITE_URL}/og-image.png`,
  url = SITE_URL,
}) {
  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>

      <meta name="description" content={description} />

      <meta
        name="keywords"
        content={
          keywords ||
          "AI Workflow, SaaS, Automation, Business Software, Project Management"
        }
      />

      <meta name="author" content="FlowSync" />

      <meta name="robots" content="index, follow" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="FlowSync" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter / X */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta name="twitter:title" content={title} />

      <meta
        name="twitter:description"
        content={description}
      />

      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
