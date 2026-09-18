import type { Project } from "./data/projects.ts";

export function ProjectCard({ title, blurb, hardPart, stack, repo, live, image, featured }: Project) {
  return (
    <div className={`card bg-base-200 border border-base-300 hover:border-primary hover:-translate-y-1 transition ${featured ? "lg:col-span-2" : ""}`}>
      {image && (
        <figure className="h-48 overflow-hidden">
          <img src={image} alt={`${title} preview`} loading="lazy" className="w-full h-full object-cover" />
        </figure>
      )}
      <div className="card-body">
        <h3 className="card-title font-mono">{title}</h3>
        <p>{blurb}</p>
        <p className="text-base-content/70">{hardPart}</p>
        <div className="flex flex-wrap gap-2">
          {stack.map(s => <span key={s} className="badge badge-outline">{s}</span>)}
        </div>
        {(live || repo) && (
          <div className="card-actions mt-2">
            {live && <a href={live} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">Visit live</a>}
            {repo && <a href={repo} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">Code</a>}
          </div>
        )}
      </div>
    </div>
  );
}