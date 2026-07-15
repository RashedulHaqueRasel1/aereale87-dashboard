import { Award, ShieldCheck } from "lucide-react";

function GuideHero() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-6 outline outline-1 outline-stone-300 md:px-6 md:py-8">
      <div className="flex flex-col items-start gap-6">
        <div className="inline-flex items-center gap-2 rounded-full bg-stone-100 px-3 py-1 outline outline-1 outline-stone-200">
          <ShieldCheck className="size-3.5 text-green-900" strokeWidth={2.2} />
          <span className="text-[11px] font-semibold uppercase tracking-wide text-green-900">
            Premium Author Education Center
          </span>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-semibold leading-tight text-green-900 md:text-5xl md:leading-[57.6px]">
            Author Program Guide
          </h1>
          <p className="max-w-5xl text-lg leading-8 text-gray-600 md:text-xl">
            Learn how royalties, distribution, pricing, and publishing work at
            The Wonder Emporium. This comprehensive reference center is designed
            to help you maximize your success.
          </p>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex size-11 items-center justify-center rounded-full bg-green-900/10 text-xl font-bold text-green-900 outline outline-1 outline-green-900/20">
        {number}
      </div>
      <h2 className="text-2xl font-bold leading-7 text-neutral-800">{title}</h2>
    </div>
  );
}

function BenefitItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="space-y-1">
      <h3 className="text-lg font-bold leading-5 text-neutral-800">{title}</h3>
      <p className="text-base leading-5 text-neutral-500">{description}</p>
    </div>
  );
}

function FoundingAuthorProgram() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-6 outline outline-1 outline-stone-300 md:px-6 md:py-8">
      <div className="absolute right-0 top-0 size-36 rounded-bl-[999px] bg-orange-400/25 md:size-56" />

      <div className="relative flex flex-col gap-8">
        <div className="flex flex-col gap-5 border-b border-stone-300 pb-6 md:flex-row md:items-center">
          <div className="flex size-16 items-center justify-center rounded-full bg-orange-400/20 text-amber-400 outline outline-1 outline-orange-400/30">
            <Award className="size-8" strokeWidth={2.2} />
          </div>
          <div className="space-y-1">
            <h3 className="text-2xl font-bold leading-7 text-green-900">
              First 100 Authors
            </h3>
            <p className="text-lg leading-7 text-gray-600">
              Exclusive benefits for our earliest publishing partners.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <BenefitItem
            title="Premium Visibility"
            description="Featured placement across the platform, ensuring your books are seen by top readers first."
          />
          <BenefitItem
            title="Founding Author Badge"
            description="A special gold distinction on your profile and book pages to build immediate trust."
          />
          <BenefitItem
            title="Priority Promotion"
            description="First access to our marketing campaigns, newsletter spots, and social media pushes."
          />
          <BenefitItem
            title="Enhanced Revenue Opportunities"
            description="Special bonus structures and early access to new monetization features."
          />
        </div>
      </div>
    </section>
  );
}

function DistributionCard({
  title,
  royalty,
  description,
  bullets,
  recommended = false,
}: {
  title: string;
  royalty: string;
  description: string;
  bullets: string[];
  recommended?: boolean;
}) {
  return (
    <article
      className={
        recommended
          ? "flex flex-col gap-5 bg-stone-100 p-6 outline outline-1 outline-stone-300 md:p-8"
          : "flex flex-col gap-5 bg-white p-6 outline outline-1 outline-stone-300 md:p-8"
      }
    >
      <div className="space-y-3">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <h3 className="text-2xl font-bold leading-7 text-green-900">{title}</h3>
          {recommended ? (
            <span className="inline-flex rounded-full bg-amber-400 px-3 py-1.5 text-sm font-bold uppercase tracking-tight text-green-900">
              Recommended
            </span>
          ) : null}
        </div>
        <p className={recommended ? "text-2xl font-bold leading-7 text-orange-400" : "text-2xl font-bold leading-7 text-green-900"}>
          {royalty}
        </p>
      </div>

      <div className="space-y-3">
        <p className="text-2xl font-medium leading-7 text-gray-600">
          Author Royalty
        </p>
        <p className="pt-1 text-xl leading-8 text-neutral-500">{description}</p>
      </div>

      <div className="space-y-2">
        {bullets.map((bullet) => (
          <p key={bullet} className="text-xl leading-8 text-neutral-800">
            {bullet}
          </p>
        ))}
      </div>
    </article>
  );
}

function DistributionOptions() {
  return (
    <section className="relative overflow-hidden bg-white p-5 outline outline-1 outline-stone-300 md:p-6">
      <div className="flex flex-col gap-8">
        <SectionHeader number="02" title="Distribution Options" />

        <div className="grid gap-6 xl:grid-cols-2 xl:gap-8">
          <DistributionCard
            title="WE Exclusive"
            royalty="65%"
            description="Maximize your earnings with exclusive platform placement and dedicated marketing."
            bullets={[
              "Highest royalty rate available",
              "Exclusive platform placement",
              "Included in premium subscriptions",
            ]}
            recommended
          />
          <DistributionCard
            title="Wide Distribution"
            royalty="45%"
            description="Expanded global reach across multiple retailers while maintaining independence."
            bullets={[
              "Expanded global reach",
              "Multi-retailer distribution",
              "Maintain independent listings elsewhere",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function RoyaltyValue({
  value,
  suffix,
}: {
  value: string;
  suffix: string;
}) {
  return (
    <div className="flex items-center justify-center gap-1">
      <span className="text-2xl font-bold leading-7 text-green-900">{value}</span>
      <span className="text-xs font-semibold uppercase leading-4 text-gray-600">
        {suffix}
      </span>
    </div>
  );
}

function RoyaltyStructure() {
  const rows = [
    { format: "Paperback", exclusive: "65%", exclusiveSuffix: "OF NET", wide: "45%", wideSuffix: "OF NET" },
    { format: "Hardcover", exclusive: "65%", exclusiveSuffix: "OF NET", wide: "45%", wideSuffix: "OF NET" },
    { format: "eBook", exclusive: "70%", exclusiveSuffix: "OF LIST", wide: "45%", wideSuffix: "OF LIST" },
    { format: "Audiobook", exclusive: "65%", exclusiveSuffix: "OF LIST", wide: "45%", wideSuffix: "OF LIST" },
  ];

  return (
    <section className="space-y-4">
      <SectionHeader number="03" title="Royalty Structure" />
      <div className="overflow-hidden bg-white outline outline-1 outline-stone-300">
        <div className="grid grid-cols-3 bg-stone-100">
          <div className="border-b border-stone-200 p-5 text-center text-sm font-semibold text-neutral-800 md:text-lg">
            Format
          </div>
          <div className="border-b border-stone-200 p-5 text-center text-sm font-semibold text-neutral-800 md:text-lg">
            WE Exclusive
          </div>
          <div className="border-b border-stone-200 p-5 text-center text-sm font-semibold text-neutral-800 md:text-lg">
            Wide Distribution
          </div>
        </div>

        {rows.map((row) => (
          <div key={row.format} className="grid grid-cols-3 border-b border-stone-200 last:border-b-0">
            <div className="flex items-center justify-center p-5 text-sm font-semibold text-gray-900 md:text-lg">
              {row.format}
            </div>
            <div className="p-5">
              <RoyaltyValue value={row.exclusive} suffix={row.exclusiveSuffix} />
            </div>
            <div className="p-5">
              <RoyaltyValue value={row.wide} suffix={row.wideSuffix} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CostExamplesCard({
  title,
  items,
}: {
  title: string;
  items: Array<{ label: string; amount: string }>;
}) {
  return (
    <div className="bg-white p-6 outline outline-1 outline-stone-300">
      <div className="border-b border-stone-200 pb-4 text-xl font-bold leading-7 text-gray-900">
        {title}
      </div>
      <div className="mt-6 space-y-4">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between bg-stone-100 p-4"
          >
            <span className="text-base leading-5 text-neutral-500">{item.label}</span>
            <span className="text-lg font-bold leading-5 text-neutral-800">
              {item.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PrintCostOverview() {
  return (
    <section className="space-y-4">
      <SectionHeader number="04" title="Lulu Print Cost Overview" />
      <div className="grid gap-6 xl:grid-cols-2">
        <CostExamplesCard
          title="Paperback Examples"
          items={[
            { label: "B&W, 200 pages, 6x9", amount: "$3.25" },
            { label: "Color, 200 pages, 6x9", amount: "$8.50" },
            { label: "B&W, 350 pages, 5.5x8.5", amount: "$4.80" },
          ]}
        />
        <CostExamplesCard
          title="Hardcover Examples"
          items={[
            { label: "B&W, 200 pages, 6x9", amount: "$9.50" },
            { label: "Color, 200 pages, 6x9", amount: "$14.75" },
            { label: "B&W, 350 pages, 6x9", amount: "$11.20" },
          ]}
        />
      </div>
    </section>
  );
}

function EarningsStep({
  label,
  badge,
  result = false,
}: {
  label: string;
  badge: string;
  result?: boolean;
}) {
  return (
    <div
      className={
        result
          ? "relative flex-1 bg-green-900 p-6 outline outline-1 outline-green-900"
          : "relative flex-1 bg-white p-6 outline outline-1 outline-stone-200"
      }
    >
      <div
        className={
          result
            ? "absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-400 px-3 py-1 text-xs uppercase leading-4 text-neutral-800"
            : "absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-stone-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-gray-600 outline outline-1 outline-stone-300"
        }
      >
        {badge}
      </div>
      <div className="text-center">
        <span
          className={
            result
              ? "text-2xl font-medium leading-7 text-white"
              : "text-xl font-semibold leading-6 text-gray-900"
          }
        >
          {label}
        </span>
      </div>
    </div>
  );
}

function RoyaltyCalculatorGuide() {
  return (
    <section className="space-y-4">
      <SectionHeader number="05" title="Royalty Calculator Guide" />
      <div className="bg-stone-100 p-6 outline outline-1 outline-stone-300">
        <div className="text-center text-2xl font-bold leading-8 text-green-900">
          How Earnings Are Calculated
        </div>
        <div className="mt-8 grid gap-5 xl:grid-cols-4">
          <EarningsStep label="List Price" badge="STEP 1" />
          <EarningsStep label="Print Cost" badge="STEP 2" />
          <EarningsStep label="WE Share" badge="STEP 3" />
          <EarningsStep label="Author Earnings" badge="RESULT" result />
        </div>
      </div>
    </section>
  );
}

function PublishingFormats() {
  const formats = [
    { title: "eBook", subtitle: "EPUB & MOBI" },
    { title: "Paperback", subtitle: "Trade & Mass Market" },
    { title: "Hardcover", subtitle: "Jacket & Casebound" },
    { title: "Audiobook", subtitle: "MP3 & M4B" },
  ];

  return (
    <section className="space-y-4 bg-stone-100 p-6 outline outline-1 outline-stone-300">
      <SectionHeader number="06" title="Publishing Formats" />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {formats.map((format) => (
          <div
            key={format.title}
            className="flex flex-col items-center gap-2 bg-white p-8 outline outline-1 outline-stone-200"
          >
            <div className="pt-4 text-center text-xl font-bold leading-6 text-gray-900">
              {format.title}
            </div>
            <div className="text-center text-sm font-medium leading-5 text-gray-600">
              {format.subtitle}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function IsbnRequirements() {
  return (
    <section className="space-y-4 bg-white p-6 outline outline-1 outline-stone-300">
      <SectionHeader number="07" title="ISBN Requirements" />
      <div className="bg-amber-400/10 px-6 py-6 outline outline-2 outline-amber-400/30">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold leading-7 text-neutral-800">
            ISBN Required For Submission
          </h3>
          <p className="text-lg leading-7 text-neutral-500">
            To publish print formats (Paperback or Hardcover) on The Wonder
            Emporium, you must provide your own ISBN. We do not currently assign
            free ISBNs. eBooks and Audiobooks do not strictly require an ISBN,
            but it is highly recommended for wide distribution.
          </p>
        </div>
      </div>
    </section>
  );
}

function MetadataCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-3 bg-white p-6 outline outline-1 outline-stone-300">
      <div className="pt-3 text-2xl font-bold leading-7 text-gray-900">
        {title}
      </div>
      <p className="text-base leading-5 text-neutral-500">{description}</p>
    </div>
  );
}

function KeywordsAndMetadata() {
  return (
    <section className="space-y-4 bg-stone-100 p-6 outline outline-1 outline-stone-300">
      <SectionHeader number="08" title="Keywords & Metadata" />
      <div className="grid gap-5 xl:grid-cols-3">
        <MetadataCard
          title="4 Keyword Fields"
          description="You are allowed up to 4 specific keyword phrases per title to optimize search visibility across our platform."
        />
        <MetadataCard
          title="Genre Selection"
          description="Select up to 2 primary BISAC categories and 1 WE-specific sub-genre to properly categorize your work."
        />
        <MetadataCard
          title="Metadata Best Practices"
          description="Ensure your subtitle, series name, and author name are perfectly consistent across all published formats."
        />
      </div>
    </section>
  );
}

export function AuthorProgramGuidePage() {
  return (
    <div className="space-y-4">
      <GuideHero />
      <SectionHeader number="01" title="Founding Author Program" />
      <FoundingAuthorProgram />
      <DistributionOptions />
      <RoyaltyStructure />
      <PrintCostOverview />
      <RoyaltyCalculatorGuide />
      <PublishingFormats />
      <IsbnRequirements />
      <KeywordsAndMetadata />
    </div>
  );
}
