import {
  NavLink,
  Outlet,
  useLoaderData,
  defer,
  Await,
  Link,
} from "react-router-dom";
import arrow from "../../assets/arrow.svg";
import { getHostVan } from "../../api";
import { requireAuth } from "../../utils";
import { Suspense } from "react";

const typeColor = {
  simple: "bg-[#E17654]",
  rugged: "bg-[#115E59]",
  luxury: "bg-[#161616]",
};

export const loader = async ({ params, request }) => {
  const { pathname } = new URL(request.url);
  await requireAuth(pathname);
  return defer({ van: getHostVan(params.id) });
};

export default function HostVan() {
  const data = useLoaderData();
  return (
    <div className="w-full px-[26px] pt-5 pb-20">
      <Link to="/host/vans" className="flex items-center gap-3">
        <img src={arrow} alt="arrow" />
        <span className="underline">Back to all vans</span>
      </Link>
      <div>
        <div className="w-full rounded-[10px] mt-10">
          <Suspense fallback={<h2>Loading host van...</h2>}>
            <Await resolve={data.van}>
              {(van) => {
                return (
                  <>
                    <div className="flex items-center gap-5">
                      <img
                        src={van.imageUrl}
                        className="w-40 rounded-[5px]"
                        alt=""
                      />
                      <div>
                        <button
                          className={`${typeColor[van.type.toLowerCase()]} text-[#FFEAD0] font-semibold rounded-[5px] mt-2.5 px-3 py-2`}
                        >
                          {van.type}
                        </button>
                        <h4 className="text-3xl mt-5 font-semibold leading-[31px] group-hover:underline duration-200">
                          {van.name}
                        </h4>
                        <div className="mt-2.5">
                          <span className="text-2xl font-semibold leading-[31px]">
                            ${van.price}
                          </span>
                          <span className="text-sm text-[#161616]">/day</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 mb-6 flex gap-6">
                      <NavLink
                        className={({ isActive }) =>
                          `${isActive && "underline font-medium"}`
                        }
                        end
                        to="."
                      >
                        Details
                      </NavLink>
                      <NavLink
                        className={({ isActive }) =>
                          `${isActive && "underline font-medium"}`
                        }
                        end
                        to="pricing"
                      >
                        Pricing
                      </NavLink>
                      <NavLink
                        className={({ isActive }) =>
                          `${isActive && "underline font-medium"}`
                        }
                        end
                        to="photos"
                      >
                        Photos
                      </NavLink>
                    </div>
                    <div>
                      <Outlet context={{ van: van }} />
                    </div>
                  </>
                );
              }}
            </Await>
          </Suspense>
        </div>
      </div>
    </div>
  );
}
