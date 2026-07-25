export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "FlowSync",
    url: "https://flowsync.vercel.app",
    logo: "https://flowsync.vercel.app/logo.png",
    description:
      "AI workflow automation platform for modern businesses.",
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}