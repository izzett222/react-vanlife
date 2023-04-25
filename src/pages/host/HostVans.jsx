import { Link, useLoaderData, defer, Await } from "react-router-dom";
import { getHostVans } from "../../api";
import { requireAuth } from "../../utils";
import { Suspense } from "react";

export const loader = async ({ request }) => {
  const { pathname } = new URL(request.url);
  await requireAuth(pathname);
  return defer({ vans: getHostVans() });
};

export default function HostVans() {
  const data = useLoaderData();
  return (
    <div className="w-full bg-[#FFF7ED]">
      <div className=" px-[26px] mx-auto py-10">
        <h1 className="font-bold text-[32px] leading-[33.7px] text-dark mb-10">
          Your listed vans
        </h1>
        <div className="grid gap-x-8 gap-y-4">
          <Suspense fallback={<h2>Loading...</h2>}>
            <Await resolve={data.vans}>
              {(vans) => {
                return vans.map((van) => {
                  return (
                    <Link
                      to={van.id}
                      key={van.id}
                      className="flex w-full rounded-md px-6 py-[18px] gap-4 bg-white"
                    >
                      <img
                        src={van.imageUrl}
                        className="h-[64px] w-[64px] rounded-[5px]"
                        alt="van"
                      />
                      <div className="flex justify-between items-center w-full">
                        <div>
                          <h4 className="text-xl text-dark font-semibold">
                            {van.name}
                          </h4>
                          <p className="text-[#4d4d4d]">${van.price}/day</p>
                        </div>
                      </div>
                    </Link>
                  );
                });
              }}
            </Await>
          </Suspense>
        </div>
      </div>
    </div>
  );
}
