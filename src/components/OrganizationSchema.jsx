export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "FlowSync",
    url: "https://flowsync-sandy.vercel.app/",
    description:
      "FlowSync is an AI workflow automation platform that helps modern businesses automate repetitive work, improve collaboration, and increase productivity.",
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
