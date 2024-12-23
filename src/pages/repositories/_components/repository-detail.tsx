import { RepoDataProps } from "@/constants/repo-data";

export const RepositoryDetails = ({ data }: { data: RepoDataProps }) => {
  return (
    <div className="group flex flex-col gap-3 border-t p-6 transition-all duration-100 ease-in-out hover:bg-background-muted">
      <div className="flex items-center gap-2">
        <h1 className="text-lg font-medium text-text-primary">
          {data.repoName}
        </h1>
        <div className="rounded-full border border-border-highlight bg-action-light px-[10px] py-[2px]">
          <p className="text-sm font-normal text-text-highlight">
            {data.repoVisibility}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-6 md:gap-10">
        <div className="flex items-center gap-2">
          <h1 className="text-base font-normal text-text-primary">
            {data.language}
          </h1>
          <div className="size-2 rounded-full bg-action-primary group-hover:animate-pulse" />
        </div>
        <div className="flex items-center gap-2">
          <img
            alt="database"
            src="/icons/database.svg"
            width={12}
            height={12}
          />
          <h1 className="text-base font-normal text-text-primary">
            {data.size} KB
          </h1>
        </div>
        <div>
          <h1 className="text-base font-normal text-text-primary">
            {`Updated ${data.timeAgo} day${
              Number(data.timeAgo) > 1 ? "s" : ""
            } ago`}
          </h1>
        </div>
      </div>
    </div>
  );
};
