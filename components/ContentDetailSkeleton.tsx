import Skeleton from "react-loading-skeleton";

export function ContentDetailSkeleton() {
  return (
    <div className="py-8 px-8 lg:px-20">
      <Skeleton height={220} />

      <div className="mt-14">
        <Skeleton height={50} className="my-8" />
        <Skeleton count={20} />
      </div>
    </div>
  );
}
