import { Card, Skeleton } from "@nextui-org/react";

export default function AnimeDetailSkeleton() {
  return (
    <>
      <Card className="p-4 lg:p-8">
        <section className="flex flex-col lg:flex-row gap-4">
          <figure className="relative h-[40vh] w-full lg:max-w-xs">
            <Skeleton className="rounded-lg w-full h-full">
              <div className="h-full rounded-lg bg-default-300" />
            </Skeleton>
          </figure>
          <section className="relative w-full space-y-5">
            <Skeleton className="w-3/5 rounded-lg">
              <div className="h-5 w-3/5 rounded-lg bg-default-200" />
            </Skeleton>
            <Skeleton className="w-3/5 rounded-lg">
              <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-3/5 rounded-lg">
              <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <span className="inline-flex i space-x-4">
              {[1, 2, 3].map((genre) => (
                <Skeleton key={genre} className="w-5 rounded-lg">
                  <div className="h-3 w-5 rounded-lg bg-default-200"></div>
                </Skeleton>
              ))}
            </span>
            <Skeleton className="w-3/5 h-3/5 rounded-lg">
              <div className="h-3/5 w-3/5 rounded-lg bg-default-200"></div>
            </Skeleton>
          </section>
        </section>
      </Card>
      <div className="space-y-4">
        <Skeleton />
        <Card className="max-w-sm h-60">
          <Skeleton className="w-full h-full  rounded-lg">
            <div className="h-full w-full rounded-lg bg-default-200"></div>
          </Skeleton>
        </Card>
      </div>
    </>
  );
}
