import { Helmet } from "react-helmet-async";

export default function SEO({
  title,
  description,
  keywords,
  image = "/og-image.png",
  url = "https://flowsync.vercel.app",
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

      <meta name="robots" content="index,follow" />

      {/* Canonical */}

      <link rel="canonical" href={url} />

      {/* Open Graph */}

      <meta property="og:type" content="website" />

      <meta property="og:title" content={title} />

      <meta property="og:description" content={description} />

      <meta property="og:image" content={image} />

      <meta property="og:url" content={url} />

      {/* Twitter */}

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