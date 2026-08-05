import clsx from "clsx";
import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { FaEye, FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import CardIcon from "../../components/icons/Card";
import { portfolios, type PortfolioType } from "../../mockData/portfolio";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const tabs = [
  { label: "All Categories", value: "all" },
  { label: "Civil & Structural", value: "civil_structural" },
  { label: "Architecture & Interior", value: "architecture" },
  { label: "MEP (Mechanical, Electrical, Plumbing, HVAC)", value: "mep" },
];

const colorMap = [
  "bg-blue-50 text-blue-700",
  "bg-stone-100 text-stone-700",
  "bg-emerald-50 text-emerald-700",
  "bg-amber-50 text-amber-800",
];

const PreviewModal = ({
  project,
  imageIndex,
  onPrev,
  onNext,
  onClose,
}: {
  project: PortfolioType;
  imageIndex: number;
  onPrev: () => void;
  onNext: () => void;
  onClose: () => void;
}) => {
  const media = project.media ?? [];
  const hasPrev = media.length > 0 && imageIndex > 0;
  const hasNext = media.length > 0 && imageIndex < media.length - 1;

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") hasPrev && onPrev();
      if (e.key === "ArrowRight") hasNext && onNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Preview: ${project.title}`}
    >
      <div
        className="relative flex max-h-full w-full max-w-5xl flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-2 right-0 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:-right-2 sm:top-0"
          aria-label="Close preview"
        >
          <FaTimes size={20} />
        </button>

        <p className="mb-3 text-center text-sm font-medium text-white sm:text-base">
          {project.title}
        </p>

        <div className="relative flex w-full flex-1 items-center justify-center">
          {hasPrev && (
            <button
              onClick={onPrev}
              className="absolute left-0 z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:-left-4 sm:h-14 sm:w-14"
              aria-label="Previous image"
            >
              <FaChevronLeft size={24} />
            </button>
          )}

          {media[imageIndex] && (
            <img
              src={media[imageIndex]}
              alt={`${project.title} – image ${imageIndex + 1} of ${media.length}`}
              className="max-h-[70vh] w-auto max-w-full rounded-lg object-contain"
            />
          )}

          {hasNext && (
            <button
              onClick={onNext}
              className="absolute right-0 z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:-right-4 sm:h-14 sm:w-14"
              aria-label="Next image"
            >
              <FaChevronRight size={24} />
            </button>
          )}
        </div>

        {media.length > 0 && (
          <p className="mt-3 text-sm text-white/80">
            {imageIndex + 1} / {media.length}
          </p>
        )}
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [query] = useSearchParams();
  const [previewProject, setPreviewProject] = useState<PortfolioType | null>(null);
  const [previewImageIndex, setPreviewImageIndex] = useState(0);

  const filteredPortfolios = useMemo(
    () =>
      portfolios.filter((p) =>
        activeTab === "all" ? true : p.category === activeTab
      ),
    [activeTab]
  );

  useEffect(() => {
    const tab = query.get("tab");
    setActiveTab(tab || "all");
  }, [query]);

  const openPreview = (project: PortfolioType) => {
    if (!project.media?.length) return;
    setPreviewProject(project);
    setPreviewImageIndex(0);
  };

  const closePreview = () => {
    setPreviewProject(null);
  };

  const goPrev = () => {
    if (!previewProject) return;
    setPreviewImageIndex((i) => Math.max(0, i - 1));
  };

  const goNext = () => {
    if (!previewProject) return;
    setPreviewImageIndex((i) =>
      Math.min(previewProject.media.length - 1, i + 1)
    );
  };

  const mediaCarousel = (portfolio: PortfolioType) => {
    const media = portfolio.media ?? [];
    if (media.length === 0) {
      return (
        <div className="flex aspect-video w-full items-center justify-center rounded-t-2xl bg-stone-200 text-stone-500">
          No images
        </div>
      );
    }
    return (
      <Swiper
        key={portfolio.title}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        className="!pb-8"
      >
        {media.map((src, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={src}
              alt={`${portfolio.title} media ${idx + 1}`}
              className="h-auto w-full rounded-t-2xl object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };

  return (
    <div className="min-h-[60vh] bg-stone-50">
      <section className="border-b border-stone-200 bg-white px-4 py-10 sm:px-6 md:py-14 lg:px-8">
        <div className="mx-auto max-w-screen-2xl">
          <h1 className="text-center text-2xl font-bold text-stone-900 sm:text-3xl lg:text-4xl">
            Projects
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-center text-base text-stone-600">
            Explore our civil, structural, architectural, and MEP projects.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {tabs.map((tab, index) => (
              <Link
                key={index}
                to={`/projects?tab=${tab.value}`}
                className={clsx(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  activeTab === tab.value
                    ? "bg-blue-600 text-white"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900"
                )}
              >
                {tab.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-screen-2xl px-4 py-10 sm:px-6 md:py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPortfolios.map((portfolio) => (
            <div
              key={portfolio.title}
              className="flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-shadow hover:shadow-lg hover:border-stone-300"
            >
              <div className="relative group">
                {mediaCarousel(portfolio)}
                {portfolio.media?.length > 0 && (
                  <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/20">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        openPreview(portfolio);
                      }}
                      className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white/95 text-stone-700 shadow-lg transition hover:scale-110 hover:bg-white hover:text-blue-600 sm:h-14 sm:w-14"
                      aria-label={`Preview ${portfolio.title}`}
                    >
                      <FaEye size={24} />
                    </button>
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col p-4 sm:p-5">
                <div className="flex items-center gap-2">
                  <CardIcon />
                  <h2 className="text-lg font-semibold text-stone-900">
                    {portfolio.title}
                  </h2>
                </div>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">
                  {portfolio.description}
                </p>
                <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {portfolio.skills.map((skill, i) => (
                      <span
                        key={i}
                        className={clsx(
                          "rounded-md px-2 py-0.5 text-xs font-medium",
                          colorMap[i % 4]
                        )}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <span className="rounded-md bg-blue-50 px-2 py-0.5 text-xs font-medium uppercase text-blue-700">
                    {portfolio.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {previewProject && (
        <PreviewModal
          project={previewProject}
          imageIndex={previewImageIndex}
          onPrev={goPrev}
          onNext={goNext}
          onClose={closePreview}
        />
      )}
    </div>
  );
};

export default Portfolio;
