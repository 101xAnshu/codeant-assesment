import { Plus, RefreshCw } from "lucide-react";
import { RepositoryDetails } from "./_components/repository-detail";
import { RepoData } from "@/constants/repo-data";
import { useState } from "react";

const Repositories = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRepos = RepoData.filter((repo) =>
    repo.repoName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex w-full md:h-screen md:p-6">
      <div className="shadow-xs flex h-full w-full flex-1 overflow-hidden border bg-background-elevated shadow-shadow-base md:rounded-xl">
        <div className="relative flex-1 overflow-auto">
          <div className="z-10 flex w-full flex-col gap-4 bg-background-elevated px-4 py-5 md:sticky md:top-0 md:px-6">
            <div className="flex w-full justify-between max-md:flex-col max-md:gap-3 md:items-center">
              <div className="flex flex-col gap-1">
                <h1 className="text-2xl text-text-primary">Repositories</h1>
                <p className="text-sm font-normal text-text-secondary">
                  {RepoData.length} total repositories
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button className="shadow-xs group flex items-center gap-1 rounded-md border px-[14px] py-[10px] shadow-shadow-base">
                  <RefreshCw size={16} className="group-hover:animate-spin" />
                  <span className="inline text-sm font-normal">
                    Refresh All
                  </span>
                </button>
                <button className="group flex items-center gap-1 rounded-md border bg-action-primary px-[14px] py-[10px]">
                  <Plus
                    size={16}
                    color="#fff"
                    className="transition-all duration-100 ease-in-out group-hover:scale-[1.15]"
                  />
                  <span className="inline text-sm font-normal text-white">
                    Add Repository
                  </span>
                </button>
              </div>
            </div>
            <div className="shadow-xs flex w-full items-center gap-[10px] rounded-md border px-[14px] py-[10px] shadow-shadow-base md:w-[366px]">
              <img
                alt="search"
                src="/icons/search.svg"
                width={18}
                height={18}
              />
              <input
                placeholder="Search Repositories"
                className="flex-1 border-0 bg-transparent text-base font-normal outline-none placeholder:text-text-secondary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="relative">
            {filteredRepos.length > 0 ? (
              filteredRepos.map((data) => (
                <RepositoryDetails key={data.repoName} data={data} />
              ))
            ) : (
              <div className="flex h-[calc(100vh-310px)] items-center justify-center border-t md:h-[calc(100vh-250px)]">
                <div className="flex flex-col items-center gap-2 text-text-secondary">
                  <img
                    src="/icons/search.svg"
                    alt="No results"
                    width={24}
                    height={24}
                    className="opacity-50"
                  />
                  <p className="text-lg">No repositories match your search</p>
                  <p className="text-sm">
                    Please check your spelling or try different search terms
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repositories;
